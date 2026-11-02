
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PortfolioCard from "./PortfolioCard.jsx";

gsap.registerPlugin(Flip, ScrollTrigger);

export default function PortfolioGrid({
  projects = [],
  activeFilter = "All",
}) {
  const gridRef = useRef(null);
  const flipState = useRef(null);

  const [filteredProjects, setFilteredProjects] = useState(projects);

  // FILTER PROJECTS
  useLayoutEffect(() => {
    if (!gridRef.current) return;

    flipState.current = Flip.getState(".portfolio-card");

    const next =
      activeFilter === "All"
        ? projects
        : projects.filter(
            (project) => project.category === activeFilter
          );

    setFilteredProjects(next);
  }, [activeFilter, projects]);

  // FLIP ANIMATION
  useLayoutEffect(() => {
    if (!flipState.current) return;

    Flip.from(flipState.current, {
      duration: 0.8,
      ease: "power3.inOut",
      absolute: true,
      nested: true,
      prune: true,
      stagger: 0.04,

      onEnter: (elements) => {
        gsap.fromTo(
          elements,
          {
            opacity: 0,
            y: 25,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.04,
          }
        );
      },
    });

    flipState.current = null;
  }, [filteredProjects]);

  // SCROLL ANIMATION
  useLayoutEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".portfolio-card");

      cards.forEach((card) => {
        const image = card.querySelector(".portfolio-image");

        if (image) {
          gsap.fromTo(
            image,
            {
              scale: 1.08,
              yPercent: -3,
            },
            {
              scale: 1.08,
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      });
    }, gridRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section className="portfolio-section w-full py-12 md:py-16 lg:py-20">
      <div
        ref={gridRef}
        className="
          mx-auto
          w-full
          max-w-[1800px]
          px-5
          sm:px-7
          lg:px-10
          xl:px-12
        "
      >
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <PortfolioCard
              key={project.id || project._id || index}
              project={project}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400 text-lg">
              No projects found.
            </p>
          </div>
        )}
      </div>

      <style>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 28px;
          row-gap: 48px;
          width: 100%;
          align-items: start;
        }

        .portfolio-grid > * {
          width: 100%;
          min-width: 0;
        }

        @media (max-width: 1023px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 22px;
            row-gap: 36px;
          }
        }

        @media (max-width: 639px) {
          .portfolio-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 28px;
          }
        }
      `}</style>
    </section>
  );
}
