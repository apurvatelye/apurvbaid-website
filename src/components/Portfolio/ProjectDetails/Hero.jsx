import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero({ project }) {

    const imageRef = useRef(null);
    const titleRef = useRef(null);

    useLayoutEffect(() => {

        if (imageRef.current) {

            gsap.from(imageRef.current, {
                scale: 1.15,
                duration: 2,
                ease: "power3.out",
            });

        }

        if (titleRef.current) {

            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                delay: 0.4,
                ease: "power4.out",
            });

        }

    }, []);

    // =========================
    // IMAGE
    // =========================

    let imageSrc = project?.image;

    /*
     * Backend can return:
     *
     * data:image/jpeg;base64,...
     *
     * OR only Base64:
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
        <section className="relative h-screen overflow-hidden">

            {/* IMAGE */}

            <img
                ref={imageRef}
                src={imageSrc}
                alt={
                    project?.heading ||
                    "Project"
                }
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-black/30" />

            {/* TITLE */}

            <div className="absolute bottom-16 left-10 lg:left-20">

                <h1
                    ref={titleRef}
                    className="
                        text-white
                        text-6xl
                        md:text-8xl
                        lg:text-[120px]
                        font-light
                        leading-none
                    "
                >
                    {project?.heading}
                </h1>

            </div>

        </section>
    );
}