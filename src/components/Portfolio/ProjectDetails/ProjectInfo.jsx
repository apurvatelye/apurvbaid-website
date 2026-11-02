export default function ProjectInfo({ project }) {
  return (
    <section className="bg-black text-white py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-20">
        <aside className="lg:col-span-4">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:sticky lg:top-32 lg:grid-cols-1">
            <Info title="Location" value={project?.location} />
            <Info title="Area" value={project?.area} />
            <Info title="Category" value={project?.category} />
            <Info title="Status" value={project?.status} />
          </div>
        </aside>
        <div className="lg:col-span-8">
          {project?.description && <p className="mb-8 text-2xl leading-relaxed text-white md:text-4xl">{project.description}</p>}
          {project?.philosophy && <p className="max-w-3xl whitespace-pre-line text-base leading-[2] text-neutral-400 md:text-lg">{project.philosophy}</p>}
        </div>
      </div>
    </section>
  );
}

function Info({ title, value }) {
  return <div className="border-b border-white/15 pb-5">
    <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-neutral-500">{title}</p>
    <p className="text-lg font-light text-white md:text-2xl">{value || "—"}</p>
  </div>;
}
