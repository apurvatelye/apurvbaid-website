export default function ProjectCard({ project }) {
  return (
    <article className="group w-full">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-[260px]
            sm:h-[360px]
            md:h-[480px]
            lg:h-[560px]
            xl:h-[650px]
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="mt-4 sm:mt-5">
        <h2
          className="
            uppercase
            leading-tight
            font-medium
            tracking-tight

            text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            xl:text-5xl
          "
        >
          {project.title}
        </h2>

        <p
          className="
            mt-2
            text-zinc-400

            text-xs
            sm:text-sm
            md:text-base
          "
        >
          {project.year} • {project.category}
        </p>
      </div>
    </article>
  );
}