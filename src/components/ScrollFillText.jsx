import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollFillText({
    text = "LET'S TALK",
}) {
    const sectionRef = useRef(null);
    const fillRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                fillRef.current,
                {
                    clipPath: "inset(0 100% 0 0)",
                },
                {
                    clipPath: "inset(0 0% 0 0)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "bottom 100%",
                        scrub: 0.8,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-[30vh] flex items-center justify-center px-[5vw]"
        >
            <div
                className="
          relative
          uppercase
          leading-[0.92]
          tracking-[0.01em]
          whitespace-nowrap
          font-['Anton']
          text-[clamp(48px,5vw,160px)]
        "
            >
                {/* Base Text */}
                <span className="text-white/10">
                    {text}
                </span>

                {/* Animated Fill */}
                <span
                    ref={fillRef}
                    className="absolute inset-0 text-white"
                    style={{
                        clipPath: "inset(0 100% 0 0)",
                    }}
                >
                    {text}
                </span>
            </div>
        </section>
    );
}