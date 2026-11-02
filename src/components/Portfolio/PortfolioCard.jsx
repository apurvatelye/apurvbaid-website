
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

import { resolveProjectImage } from "../../utils/projectImage";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioCard({ project }) {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      const card = cardRef.current;

      if (!card) return;

      const image = card.querySelector(".portfolio-image");
      const blinds = card.querySelectorAll(".blind");

      // IMAGE REVEAL
      if (blinds.length) {
        gsap.to(blinds, {
          scaleY: 0,
          stagger: 0.025,
          duration: 0.9,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });
      }

      // HOVER ZOOM
      if (window.innerWidth > 768 && image) {
        const hoverAnimation = gsap.to(image, {
          scale: 1.07,
          duration: 0.8,
          ease: "power3.out",
          paused: true,
        });

        const handleEnter = () => hoverAnimation.play();
        const handleLeave = () => hoverAnimation.reverse();

        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);

        return () => {
          card.removeEventListener("mouseenter", handleEnter);
          card.removeEventListener("mouseleave", handleLeave);
          hoverAnimation.kill();
        };
      }
    },
    { scope: cardRef }
  );

  // PROJECT IMAGE
  const imageSrc = resolveProjectImage(
    project.image || project.coverImage
  );

  const title =
    project.heading ||
    project.title ||
    project.name ||
    "Untitled Project";

  const location =
    project.location ||
    project.address ||
    "";

  return (
    <Link
      ref={cardRef}
      to={`/project/${project.id || project._id}`}
      className="
        portfolio-card
        group
        relative
        block
        w-full
        min-w-0
        overflow-hidden
        rounded-xl
        md:rounded-2xl
        bg-zinc-900
        isolate
      "
      aria-label={`View ${title}`}
    >
      {/* IMAGE */}
      <div
        className="
          portfolio-image-wrapper
          relative
          w-full
          aspect-[16/9]
          overflow-hidden
          rounded-xl
          md:rounded-2xl
        "
      >
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          className="
            portfolio-image
            absolute
            inset-0
            h-full
            w-full
            object-cover
            scale-100
            will-change-transform
          "
          onError={() => {
            console.error(
              "Project image failed to load:",
              project
            );
          }}
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute
            inset-0
            z-[1]
            bg-gradient-to-b
            from-black/45
            via-transparent
            to-black/45
            pointer-events-none
          "
        />

        {/* PROJECT TITLE */}
        <div
          className="
            absolute
            left-4
            top-3
            sm:left-5
            sm:top-4
            z-[2]
            right-3
            pointer-events-none
          "
        >
          <h3
            className="
              text-white
              uppercase
              font-extrabold
              tracking-tight
              leading-tight
              text-xl
              sm:text-2xl
              lg:text-[26px]
              xl:text-[30px]
              drop-shadow-md
            "
          >
            {title}
          </h3>
        </div>

        {/* LOCATION */}
        <div
          className="
            absolute
            bottom-3
            right-4
            sm:bottom-4
            sm:right-5
            z-[2]
            pointer-events-none
          "
        >
          <p
            className="
              text-white
              uppercase
              text-[8px]
              sm:text-[9px]
              font-semibold
              tracking-[0.25em]
              text-right
              drop-shadow-md
            "
          >
            {location}
          </p>
        </div>

        {/* CURTAIN REVEAL */}
        <div className="curtain absolute inset-0 z-[3] flex pointer-events-none">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="blind h-full flex-1 bg-neutral-900 origin-top"
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
