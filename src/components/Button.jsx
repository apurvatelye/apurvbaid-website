import { useRef, useState } from "react";

export default function Button() {
    const btnRef = useRef(null);
    const textRef = useRef(null);
    const [tracking, setTracking] = useState(false);

    const BTN_STRENGTH = 0.35;
    const TEXT_STRENGTH = 0.55;

    const BTN_MAX = 26;
    const TEXT_MAX = 14;

    const clamp = (value, max) => Math.max(-max, Math.min(max, value));

    const handleMouseEnter = () => {
        // Disable magnetic effect on touch devices
        if (window.innerWidth < 768) return;
        setTracking(true);
    };

    const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;

        if (!btnRef.current || !textRef.current) return;

        const rect = btnRef.current.getBoundingClientRect();

        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = e.clientX - cx;
        const dy = e.clientY - cy;

        const btnX = clamp(dx * BTN_STRENGTH, BTN_MAX);
        const btnY = clamp(dy * BTN_STRENGTH, BTN_MAX);

        const textX = clamp(dx * TEXT_STRENGTH, TEXT_MAX);
        const textY = clamp(dy * TEXT_STRENGTH, TEXT_MAX);

        btnRef.current.style.transform = `translate(${btnX}px, ${btnY}px)`;
        textRef.current.style.transform = `translate(${textX}px, ${textY}px)`;
    };

    const handleMouseLeave = () => {
        setTracking(false);

        if (!btnRef.current || !textRef.current) return;

        btnRef.current.style.transform = "translate(0px,0px)";
        textRef.current.style.transform = "translate(0px,0px)";
    };

    return (
        <div className="flex items-center justify-center bg-black px-4">

            <div
                className="inline-block p-4 sm:p-6 md:p-8 lg:p-10"
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <button
                    ref={btnRef}
                    className={`
                        relative
                        overflow-hidden
                        rounded-full
                        border
                        border-white
                        bg-transparent
                        cursor-pointer
                        select-none
                        whitespace-nowrap

                        px-6 py-3
                        sm:px-8 sm:py-3.5
                        md:px-10 md:py-4
                        lg:px-14 lg:py-5

                        tracking-[0.08em]
                        sm:tracking-[0.12em]

                        ${tracking
                            ? "transition-none"
                            : "transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
                        }
                    `}
                >
                    <span
                        ref={textRef}
                        className={`
                            relative
                            inline-block
                            pointer-events-none
                            uppercase
                            font-semibold
                            text-white

                            text-xs
                            sm:text-sm
                            md:text-[15px]
                            lg:text-base

                            ${tracking
                                ? "transition-none"
                                : "transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
                            }
                        `}
                    >
                        See All Works
                    </span>
                </button>
            </div>
        </div>
    );
}