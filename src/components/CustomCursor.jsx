import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(hover: hover) and (pointer: fine)");

        const updateDevice = () => {
            setIsDesktop(media.matches);
        };

        updateDevice();

        media.addEventListener("change", updateDevice);

        return () => {
            media.removeEventListener("change", updateDevice);
        };
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const cursor = cursorRef.current;

        const xTo = gsap.quickTo(cursor, "x", {
            duration: 0.4,
            ease: "power3.out",
        });

        const yTo = gsap.quickTo(cursor, "y", {
            duration: 0.4,
            ease: "power3.out",
        });

        const moveCursor = (e) => {
            xTo(e.clientX - 20);
            yTo(e.clientY - 20);
        };

        window.addEventListener("mousemove", moveCursor);

        const hoverTargets = document.querySelectorAll(
            "a, button, h1, h2, h3"
        );

        const handleEnter = () => {
            gsap.to(cursor, {
                scale: 2.5,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        hoverTargets.forEach((el) => {
            el.addEventListener("mouseenter", handleEnter);
            el.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);

            hoverTargets.forEach((el) => {
                el.removeEventListener("mouseenter", handleEnter);
                el.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, [isDesktop]);

    // Don't render the cursor on mobile/tablet
    if (!isDesktop) return null;

    return (
        <div
            ref={cursorRef}
            className="
        fixed
        top-0
        left-0
        w-10
        h-10
        rounded-full
        bg-white
        pointer-events-none
        z-[9999]
        mix-blend-difference
      "
        />
    );
};

export default CustomCursor;