import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { resolveProjectImage } from "../../../utils/projectImage";

export default function Hero({ project }) {
  const images = (project?.images?.length ? project.images : [project?.coverImage]).map(resolveProjectImage).filter(Boolean);
  const [active, setActive] = useState(0);

  const go = (direction) => setActive((current) => (current + direction + images.length) % images.length);

  return (
    <section className="relative bg-black text-white pt-24 md:pt-28">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-14">
        <div className="mb-7 md:mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <Link to="/portfolio" className="mb-5 inline-block text-xs uppercase tracking-[0.25em] text-white/50 hover:text-white transition">← All Projects</Link>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">{project?.category} · {project?.location}</p>
            <h1 className="mt-3 max-w-5xl text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">{project?.title}</h1>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/60">
            <span className="tabular-nums">{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
            <button aria-label="Previous image" onClick={() => go(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/30 hover:bg-white hover:text-black transition"><ChevronLeft size={20} /></button>
            <button aria-label="Next image" onClick={() => go(1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/30 hover:bg-white hover:text-black transition"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="relative h-[48vh] min-h-[320px] overflow-hidden rounded-xl bg-neutral-900 sm:h-[62vh] lg:h-[78vh]">
          {images.map((image, index) => (
            <img key={`${project.id}-${index}`} src={image} alt={`${project.title} view ${index + 1}`} loading={index === active ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`} />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button key={`${project.id}-thumb-${index}`} onClick={() => setActive(index)} aria-label={`Show image ${index + 1}`}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md sm:h-20 sm:w-32 ${active === index ? "ring-2 ring-white" : "opacity-55 hover:opacity-100"}`}>
              <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
