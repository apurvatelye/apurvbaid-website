import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORDS = [
    "SPACE PSYCHOLOGY",
    "EXECUTION",
    "INTERIOR DESIGN",
    "LANDSCAPE DESIGN",
    "PLANNING",
    "RESEARCH",
    "SUSTAINABILITY",
];

export default function TypographySection() {
    const sectionRef = useRef(null);
    const wordRefs = useRef([]);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                mobile: "(max-width: 767px)",
                tablet: "(min-width: 768px) and (max-width: 1023px)",
                desktop: "(min-width: 1024px)",
            },
            (context) => {
                const { mobile, tablet } = context.conditions;

                const moveY = mobile ? -90 : tablet ? -130 : -180;
                const scrollEnd = mobile
                    ? "+=180%"
                    : tablet
                        ? "+=220%"
                        : "+=250%";

                gsap.set(wordRefs.current, {
                    y: 0,
                    opacity: 0.08,
                    force3D: true,
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: scrollEnd,
                        pin: true,
                        scrub: 1.5,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                wordRefs.current.forEach((el, i) => {
                    tl.to(
                        el,
                        {
                            y: moveY,
                            opacity: 1,
                            ease: "power2.out",
                            duration: 1,
                        },
                        i * 0.28
                    );
                });
            }
        );

        return () => mm.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen overflow-hidden bg-black"
        >
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
                <div className="flex flex-col items-center justify-center pointer-events-none">

                    {WORDS.map((word, index) => (
                        <span
                            key={index}
                            ref={(el) => (wordRefs.current[index] = el)}
                            className="
                                block
                                text-center
                                font-bold
                                uppercase
                                text-white
                                leading-[0.82]
                                tracking-[-0.04em]
                                whitespace-nowrap
                                opacity-[0.08]
                                will-change-transform
                                select-none

                                text-[clamp(2rem,8vw,6rem)]
                                sm:text-[clamp(2.5rem,8vw,6.5rem)]
                                lg:text-[clamp(3rem,9vw,7rem)]
                            "
                        >
                            {word}
                        </span>
                    ))}

                </div>
            </div>
        </section>
    );
}