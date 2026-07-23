"use client";

import { useEffect, useRef } from "react"
// @ts-ignore — matter-js may not ship bundled type declarations
import Matter from "matter-js"

const DEFAULT_IMAGES = [
    { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/5f084e5a-2e3f-4239-be1a-5084a6dcef00/w=800" },
    { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/3b42034b-897e-456d-cb00-1f2cf0aa4700/w=800" },
]

const M = Matter

// Make the walls extremely bouncy by adding restitution and removing friction
function makeWalls(bounding, world, opts) {
    const { width: w, height: h } = bounding
    const t = 200
    const wallOptions = { 
        isStatic: true, 
        restitution: 0.9, // Make walls bouncy
        friction: 0 
    }
    const walls = []
    
    if (opts.top) walls.push(M.Bodies.rectangle(w / 2, -t / 2, w + 2 * t, t, wallOptions))
    if (opts.bottom) walls.push(M.Bodies.rectangle(w / 2, h + t / 2, w + 2 * t, t, wallOptions))
    if (opts.left) walls.push(M.Bodies.rectangle(-t / 2, h / 2, t, h + 2 * t, wallOptions))
    if (opts.right) walls.push(M.Bodies.rectangle(w + t / 2, h / 2, t, h + 2 * t, wallOptions))
    
    M.Composite.add(world, walls)
    return walls
}

export default function GravityGallery(props) {
    props = { ...COMPONENT_DEFAULTS, ...props }
    const {
        images = DEFAULT_IMAGES,
        count = 20,
        size = 126,
        shape = "square",
        color = "#FFFFFF",
        mouseEnable = true,
        mouseStiffness = 0.991,
        mouseAngularStiffness = 0,
        gravX = 0,
        gravY = 0.8, // Slightly reduced gravity so they bounce higher
        wallOptions = { top: true, bottom: true, right: true, left: true },
        style,
    } = props

    const n = Math.max(1, Math.min(20, Math.round(count)))
    const containerRef = useRef(null)
    const rafRef = useRef(0)

    const depKey = JSON.stringify({
        n, size, shape, gravX, gravY, wallOptions, mouseEnable, mouseStiffness, mouseAngularStiffness,
    })

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const engine = M.Engine.create({
            enableSleeping: false, // Prevents physics from stopping when objects rest
            gravity: { x: gravX, y: gravY },
        })

        const bounding = container.getBoundingClientRect()
        makeWalls(bounding, engine.world, wallOptions)

        let mouseConstraint = null
        const onLeave = () => mouseConstraint?.mouse?.mouseup(new Event("mouseup"))
        
        if (mouseEnable) {
            const mouse = M.Mouse.create(container)
            mouseConstraint = M.MouseConstraint.create(engine, {
                mouse,
                constraint: {
                    angularStiffness: mouseAngularStiffness,
                    stiffness: mouseStiffness,
                },
            })
            M.Composite.add(engine.world, mouseConstraint)
            const el = mouseConstraint.mouse.element
            el.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel)
            el.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel)
            container.addEventListener("mouseleave", onLeave)
        }

        // Updated body physics for maximum continuous bouncing
        const bodyOpts = {
            friction: 0.001,      // Almost zero friction
            frictionAir: 0.001,   // No air resistance
            restitution: 0.9,     // Extremely bouncy (1 is perfectly elastic)
            density: 0.05
        }
        
        const made = []
        for (let i = 0; i < n; i++) {
            const x = ((i + 0.5) / n) * bounding.width
            const y = size / 2 + i * (size * 0.15 + 10)
            const body = shape === "square"
                ? M.Bodies.rectangle(x, y, size, size, bodyOpts)
                : M.Bodies.circle(x, y, size / 2, bodyOpts)
            
            // Give them an initial random velocity so they explode instantly
            M.Body.setVelocity(body, {
                x: (Math.random() - 0.5) * 15,
                y: (Math.random() - 0.5) * 15
            });

            made.push(body)
        }
        M.Composite.add(engine.world, made)

        const els = Array.from(container.querySelectorAll("[data-physics-body]"))

        const update = () => {
            rafRef.current = requestAnimationFrame(update)
            
            for (let i = 0; i < made.length; i++) {
                const el = els[i]
                if (!el) continue
                const body = made[i]
                
                // CONTINUOUS MOTION LOGIC: 
                // If a body slows down too much, kick it back into motion
                if (body.speed < 2.5) {
                    M.Body.setVelocity(body, {
                        x: body.velocity.x + ((Math.random() - 0.5) * 6),
                        y: body.velocity.y - (Math.random() * 6) // Kick it mostly upward against gravity
                    });
                }
                // Random continuous spin to keep them visually chaotic
                if (Math.abs(body.angularVelocity) < 0.05) {
                     M.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.2);
                }

                const { position, angle } = body
                el.style.visibility = "visible"
                el.style.left = `${position.x}px`
                el.style.top = `${position.y}px`
                el.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`
            }
            M.Engine.update(engine)
        }
        update()

        return () => {
            cancelAnimationFrame(rafRef.current)
            if (mouseEnable) container.removeEventListener("mouseleave", onLeave)
            M.World.clear(engine.world, false)
            M.Engine.clear(engine)
        }
    }, [depKey])

    const imgFor = (i) => {
        const imgs = Array.isArray(images) && images.length > 0 ? images : DEFAULT_IMAGES
        if (!imgs.length) return undefined
        return imgs[i % imgs.length]?.src
    }

    return (
        <div
            ref={containerRef}
            style={{
                ...style,
                position: "relative",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                zIndex: 10
            }}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
        >
            {Array.from({ length: n }).map((_, i) => {
                const src = imgFor(i)
                return (
                    <div
                        key={i}
                        data-physics-body=""
                        style={{
                            position: "absolute",
                            visibility: "hidden",
                            width: size,
                            height: size,
                            borderRadius: shape === "circle" ? "50%" : 0,
                            overflow: "hidden",
                            background: src ? "transparent" : color,
                            backgroundImage: src ? `url(${src})` : undefined,
                            backgroundSize: "60%", // Adjust image size inside circle
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            cursor: "grab",
                            backgroundColor: src ? "#ffffff" : color, 
                            border: "1px solid rgba(0,0,0,0.1)",
                            boxShadow: "0px 10px 30px rgba(0,0,0,0.1)"
                        }}
                        draggable={false}
                    />
                )
            })}
        </div>
    )
}

const COMPONENT_DEFAULTS = {
    images: DEFAULT_IMAGES,
    count: 20,
    size: 126,
    shape: "square",
    color: "#FFFFFF",
    gravY: 0.8,
    gravX: 0,
    wallOptions: { top: true, bottom: true, left: true, right: true },
    mouseEnable: true,
    mouseStiffness: 0.991,
    mouseAngularStiffness: 0,
}

GravityGallery.displayName = "GravityGallery"