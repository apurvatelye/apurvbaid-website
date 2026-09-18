import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({
    firstLine,
    secondLine,
    paragraph,
    leftBottomText,
    leftBottomIcon,
    rightBottomText,
}) => {
    const heroRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            heroRef.current,
            {
                y: 120,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.08,
                duration: 1.2,
                ease: "expo.out",
            }
        );
    }, []);

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 text-white sm:px-8 lg:px-16">
            {/* Hero Content */}
            <div className="flex flex-col items-center text-center">
                {/* First Line */}
                <h1
                    ref={(el) => (heroRef.current[0] = el)}
                    className="
            font-anton
            uppercase
            leading-tight

            text-xl
            tracking-[8px]

            sm:text-2xl
            sm:tracking-[12px]

            md:text-3xl
            md:tracking-[18px]

            lg:text-4xl
            lg:tracking-[28px]

            xl:text-[42px]
            xl:tracking-[40px]
          "
                >
                    {firstLine}
                </h1>

                {/* Second Line */}
                {secondLine && (
                    <h1
                        ref={(el) => (heroRef.current[1] = el)}
                        className="
              mt-2
              font-anton
              uppercase
              leading-tight

              text-xl
              tracking-[8px]

              sm:text-2xl
              sm:tracking-[12px]

              md:text-3xl
              md:tracking-[18px]

              lg:text-4xl
              lg:tracking-[28px]

              xl:text-[42px]
              xl:tracking-[40px]
            "
                    >
                        {secondLine}
                    </h1>
                )}

                {/* Paragraph */}
                {paragraph && (
                    <p
                        ref={(el) => (heroRef.current[2] = el)}
                        className="
              mt-6
              max-w-xs
              text-center
              text-sm
              leading-relaxed
              text-white/60

              sm:max-w-lg
              sm:text-base

              md:max-w-2xl
              md:text-lg

              lg:max-w-3xl
              lg:text-xl

              xl:max-w-4xl
            "
                    >
                        {paragraph}
                    </p>
                )}
            </div>

            {/* Bottom Bar */}
            <div
                className="
          absolute
          bottom-6
          left-0
          w-full

          px-5
          sm:px-8
          lg:px-16

          flex
          items-center
          justify-between
          gap-6
        "
            >
                {/* Left */}
                <div
                    ref={(el) => (heroRef.current[3] = el)}
                    className="flex items-center gap-3 shrink-0"
                >
                    <span className="text-sm font-medium sm:text-base lg:text-lg whitespace-nowrap">
                        {leftBottomText}
                    </span>

                    {leftBottomIcon && (
                        <span className="text-lg sm:text-xl">
                            {leftBottomIcon}
                        </span>
                    )}
                </div>

                {/* Right */}
                <div
                    ref={(el) => (heroRef.current[4] = el)}
                    className="flex-1 flex justify-end"
                >
                    {rightBottomText}
                </div>
            </div>
        </section>
    );
};

export default Hero;