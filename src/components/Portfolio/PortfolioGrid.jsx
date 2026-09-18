import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PortfolioCard from "./PortfolioCard";

gsap.registerPlugin(Flip, ScrollTrigger);

export default function PortfolioGrid({
  projects,
  activeFilter,
}) {
  const gridRef = useRef(null);
  const flipState = useRef(null);

  const [filteredProjects, setFilteredProjects] = useState(projects);

  // -------------------------------
  // Save layout before filtering
  // -------------------------------
  useLayoutEffect(() => {
    if (!gridRef.current) return;

    flipState.current = Flip.getState(".portfolio-card");

    const next =
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    setFilteredProjects(next);

  }, [activeFilter, projects]);

  // -------------------------------
  // Animate filter change
  // -------------------------------
  useLayoutEffect(() => {
    if (!flipState.current) return;

    Flip.from(flipState.current, {
      duration: 1,
      ease: "power4.inOut",
      absolute: true,
      nested: true,
      prune: true,
      stagger: 0.05,

      onEnter(elements) {
        gsap.fromTo(
          elements,
          {
            opacity: 0,
            y: 40,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.04,
          }
        );

        gsap.fromTo(
          elements.map((el) => el.querySelector(".portfolio-image")),
          {
            scale: 1.15,
          },
          {
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.04,
          }
        );
      },

      onLeave(elements) {
        gsap.to(
          elements.map((el) => el.querySelector(".portfolio-image")),
          {
            scale: 0.88,
            duration: 0.45,
            ease: "power3.out",
          }
        );

        gsap.to(elements, {
          opacity: 0,
          scale: 0.94,
          y: -20,
          duration: 0.45,
          ease: "power3.out",
        });
      },
    });
  }, [filteredProjects]);

  // -------------------------------
  // Floating / Parallax Effect
  // -------------------------------
  useLayoutEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {

      gsap.utils.toArray(".portfolio-card").forEach((card) => {

        const image = card.querySelector(".portfolio-image");

        // Floating Card
        gsap.fromTo(
          card,
          {
            y: 40,
          },
          {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        // Image Parallax
        if (image) {
          gsap.fromTo(
            image,
            {
              yPercent: -10,
              scale: 1.12,
            },
            {
              yPercent: 10,
              scale: 1.12,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

      });

    }, gridRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  const rows = [];

  for (let i = 0; i < filteredProjects.length; i += 2) {
    rows.push(filteredProjects.slice(i, i + 2));
  }

  return (
    <section className="py-24">

      <div
        ref={gridRef}
        className="max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 space-y-12 sm:space-y-20 lg:space-y-40"
      >
        {rows.map((row, index) => {

          const reverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-12
                md:gap-20
                lg:gap-40
                items-center
                ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >
              <PortfolioCard
                key={row[0].id}
                project={row[0]}
                large
              />

              {row[1] && (
                <PortfolioCard
                  key={row[1].id}
                  project={row[1]}
                />
              )}
            </div>
          );

        })}
      </div>

    </section>
  );
}