import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioCard({
    project,
    large = false,
}) {
    const cardRef = useRef(null);

    useGSAP(() => {
        const card = cardRef.current;

        if (!card) return;

        const image = card.querySelector(".portfolio-image");
        const blinds = card.querySelectorAll(".blind");

        // =========================
        // REVEAL ANIMATION
        // =========================
        gsap.to(blinds, {
            scaleY: 0,
            stagger: 0.03,
            duration: 0.9,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                once: true,
            },
        });

        // =========================
        // HOVER ZOOM
        // =========================
        if (window.innerWidth > 768 && image) {
            const hoverTl = gsap.timeline({
                paused: true,
            });

            hoverTl.to(image, {
                scale: 1.06,
                duration: 0.8,
                ease: "power3.out",
            });

            const enter = () => hoverTl.play();
            const leave = () => hoverTl.reverse();

            card.addEventListener(
                "mouseenter",
                enter
            );

            card.addEventListener(
                "mouseleave",
                leave
            );

            return () => {
                card.removeEventListener(
                    "mouseenter",
                    enter
                );

                card.removeEventListener(
                    "mouseleave",
                    leave
                );
            };
        }
    }, []);

    // =========================
    // IMAGE
    // =========================
    let imageSrc = project.image;

    /*
     * Backend LONGTEXT may contain:
     *
     * data:image/jpeg;base64,...
     *
     * OR only:
     *
     * /9j/4AAQ...
     */

    if (
        imageSrc &&
        !imageSrc.startsWith("data:image")
    ) {
        imageSrc =
            `data:image/jpeg;base64,${imageSrc}`;
    }

    return (
        <Link
            ref={cardRef}
            to={`/project/${project.id}`}
            className="portfolio-card group block"
        >
            {/* =========================
                IMAGE
            ========================= */}

            <div
                className={`
                    relative
                    overflow-hidden
                    rounded-2xl
                    md:rounded-[26px]

                    ${
                        large
                            ? "h-[280px] sm:h-[380px] md:h-[500px] lg:h-[760px]"
                            : "h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px]"
                    }
                `}
            >
                <img
                    src={imageSrc}
                    alt={
                        project.heading ||
                        "Portfolio Project"
                    }
                    className="
                        portfolio-image
                        w-full
                        h-full
                        object-cover
                        scale-[1.12]
                        will-change-transform
                    "
                    onError={() => {
                        console.error(
                            "Project image failed to load:",
                            project
                        );
                    }}
                />

                {/* =========================
                    CURTAIN
                ========================= */}

                <div className="curtain">
                    {Array.from({
                        length: 20,
                    }).map((_, i) => (
                        <div
                            key={i}
                            className="blind"
                        />
                    ))}
                </div>
            </div>

            {/* =========================
                CONTENT
            ========================= */}

            <div className="relative mt-4 md:mt-6 h-[72px] md:h-[80px] overflow-hidden">

                {/* META */}

                <div
                    className="
                        absolute
                        inset-x-0
                        top-0
                        flex
                        justify-between
                        items-center
                        translate-y-full
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:opacity-100
                    "
                >
                    <span className="text-xs sm:text-sm text-zinc-400">
                        {project.year}
                    </span>

                    <span className="text-xs sm:text-sm text-zinc-500">
                        {project.category}
                    </span>
                </div>

                {/* TITLE */}

                <div
                    className="
                        absolute
                        left-0
                        right-0
                        top-6
                        md:top-8
                        translate-y-full
                        opacity-0
                        transition-all
                        duration-700
                        delay-100
                        group-hover:translate-y-0
                        group-hover:opacity-100
                    "
                >
                    <h3
                        className="
                            uppercase
                            font-medium
                            tracking-tight
                            leading-tight
                            text-lg
                            sm:text-2xl
                            md:text-[30px]
                            lg:text-[34px]
                        "
                    >
                        {project.heading}
                    </h3>
                </div>

            </div>
        </Link>
    );
}