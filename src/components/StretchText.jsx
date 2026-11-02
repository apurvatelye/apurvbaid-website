import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

export default function StretchText({ text = "CONTACT" }) {
    const wrapRef = useRef(null);
    const cursorRef = useRef(null);
    const letterRefs = useRef([]);

    const letters = useMemo(() => [...text], [text]);

    useEffect(() => {
        const wrap = wrapRef.current;
        const cursor = cursorRef.current;

        let mouse = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };

        let pos = {
            x: mouse.x,
            y: mouse.y,
        };

        const LERP = 0.12;
        const RADIUS = 260;
        const MAX_SCALE = 1.2;

        //----------------------------------
        // Mouse
        //----------------------------------

        const move = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("mousemove", move);

        //----------------------------------
        // Hover
        //----------------------------------

        const container = wrap.parentElement;

        const enter = () => {
            gsap.to(cursor, {
                scale: 1,
                opacity: 1,
                duration: 0.35,
                ease: "power3.out",
            });
        };

        const leave = () => {
            gsap.to(cursor, {
                scale: 0,
                opacity: 0,
                duration: 0.35,
                ease: "power3.out",
            });

            letterRefs.current.forEach((el) => {
                gsap.to(el, {
                    scaleY: 1,
                    duration: 0.4,
                    ease: "power3.out",
                });
            });
        };

        container.addEventListener("mouseenter", enter);
        container.addEventListener("mouseleave", leave);

        //----------------------------------
        // Animation Loop
        //----------------------------------

        const render = () => {
            pos.x += (mouse.x - pos.x) * LERP;
            pos.y += (mouse.y - pos.y) * LERP;

            gsap.set(wrap, {
                x: pos.x,
                y: pos.y,
            });

            letterRefs.current.forEach((el) => {
                if (!el) return;

                const rect = el.getBoundingClientRect();

                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;

                const dx = pos.x - cx;
                const dy = pos.y - cy;

                const dist = Math.sqrt(dx * dx + dy * dy);

                let t = Math.max(0, 1 - dist / RADIUS);

                // Smoothstep
                t = t * t * (3 - 2 * t);

                gsap.set(el, {
                    scaleY: 1 + t * (MAX_SCALE - 1),
                });
            });
        };

        gsap.ticker.add(render);

        //----------------------------------
        // Cleanup
        //----------------------------------

        return () => {
            gsap.ticker.remove(render);

            window.removeEventListener("mousemove", move);

            container.removeEventListener("mouseenter", enter);
            container.removeEventListener("mouseleave", leave);
        };
    }, []);

    return (
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-black cursor-none">

            <h1
                className="
                    text-white
                    uppercase
                    font-black
                    tracking-[-0.04em]
                    leading-none
                    text-[clamp(70px,12vw,220px)]
                    select-none
                    whitespace-nowrap
                    font-['Archivo_Narrow']
                "
            >
                {letters.map((letter, i) => (
                    <span
                        key={i}
                        ref={(el) => (letterRefs.current[i] = el)}
                        className="inline-block origin-bottom will-change-transform"
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </h1>

            {/* Cursor */}

            <div
                ref={wrapRef}
                className="fixed left-0 top-0 pointer-events-none z-9999"
            >
                <div
                    ref={cursorRef}
                    className="
                        w-32
                        h-32
                        rounded-full
                        scale-0
                        opacity-0
                        -translate-x-1/2
                        -translate-y-1/2
                        flex
                        items-center
                        justify-center
                        bg-linear-to-b
                        from-white
                        via-neutral-200
                        to-neutral-400
                        shadow-2xl
                    "
                >
                    <span className="text-black text-sm font-semibold uppercase tracking-wider">
                        {text}
                    </span>
                </div>
            </div>
        </section>
    );
}