import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import api from "../../services/api";

gsap.registerPlugin(ScrollTrigger);

const ImageSlider = () => {
    const wrapperRef = useRef(null);

    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);

    // =========================
    // FETCH CAROUSEL IMAGES
    // =========================
    useEffect(() => {
        const fetchCarouselImages = async () => {
            try {
                setLoading(true);

                const response = await api.get("/carousel");

                console.log(
                    "Carousel API Response:",
                    response.data
                );

                const data = Array.isArray(response.data)
                    ? response.data
                    : [];

                const activeImages = data
                    .filter((item) => item.active === true)
                    .sort(
                        (a, b) =>
                            (a.displayOrder ?? 0) -
                            (b.displayOrder ?? 0)
                    );

                setSections(activeImages);
            } catch (error) {
                console.error(
                    "Carousel API Error:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        fetchCarouselImages();
    }, []);

    // =========================
    // GSAP SCROLL ANIMATION
    // =========================
    useEffect(() => {
        if (!sections.length || !wrapperRef.current) {
            return;
        }

        const ctx = gsap.context(() => {
            const panels = gsap.utils.toArray(".section");

            panels.slice(0, -1).forEach((panel) => {
                gsap.set(panel, {
                    force3D: true,
                    transformOrigin: "center center",
                });

                gsap.timeline({
                    scrollTrigger: {
                        trigger: panel,
                        start: "bottom bottom",
                        end: "+=100%",
                        pin: true,
                        pinSpacing: false,
                        scrub: 1.5,
                        anticipatePin: 1,
                        fastScrollEnd: true,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(panel, {
                        scale: 0.88,
                        opacity: 0.35,
                        ease: "none",
                        force3D: true,
                    })
                    .to(
                        panel,
                        {
                            opacity: 0,
                            ease: "none",
                            force3D: true,
                        },
                        0.8
                    );
            });

            ScrollTrigger.refresh();
        }, wrapperRef);

        return () => {
            ctx.revert();
        };
    }, [sections]);

    // =========================
    // LOADING
    // =========================
    if (loading) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center">
                <p className="text-sm text-gray-500">
                    Loading...
                </p>
            </div>
        );
    }

    // =========================
    // NO ACTIVE IMAGES
    // =========================
    if (!sections.length) {
        return null;
    }

    return (
        <div
            ref={wrapperRef}
            className="px-10 py-4"
        >
            {sections.map((section, index) => {
                let imageSrc = section.image;

                // =========================
                // BASE64 IMAGE HANDLING
                // =========================
                if (
                    imageSrc &&
                    !imageSrc.startsWith("data:image")
                ) {
                    imageSrc =
                        `data:image/jpeg;base64,${imageSrc}`;
                }

                return (
                    <section
                        key={section.id}
                        className="section relative h-screen overflow-hidden rounded-2xl"
                    >
                        <img
                            src={imageSrc}
                            alt={
                                section.name ||
                                `Slide ${index + 1}`
                            }
                            draggable={false}
                            className="absolute inset-0 h-full w-full select-none object-cover will-change-transform"
                            onError={() => {
                                console.error(
                                    "Failed to load carousel image:",
                                    section
                                );
                            }}
                        />
                    </section>
                );
            })}
        </div>
    );
};

export default ImageSlider;