export default function ProjectInfo({ project }) {

    return (
        <section className="bg-black text-white py-32">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* =========================
                        LEFT INFO
                    ========================= */}

                    <aside className="lg:col-span-4">

                        <div className="sticky top-32">

                            <Info
                                title="Category"
                                value={project?.category}
                            />

                            <Info
                                title="Location"
                                value={project?.location}
                            />

                            <Info
                                title="Area"
                                value={project?.area}
                            />

                            <Info
                                title="Year"
                                value={project?.year}
                            />

                            <Info
                                title="Status"
                                value={project?.status}
                            />

                            <Info
                                title="Client"
                                value={project?.client}
                            />

                        </div>

                    </aside>

                    {/* =========================
                        RIGHT DESCRIPTION
                    ========================= */}

                    <div className="lg:col-span-8">

                        {project?.description && (
                            <p className="
                                text-2xl
                                lg:text-3xl
                                leading-[1.9]
                                text-neutral-300
                                max-w-4xl
                            ">
                                {project.description}
                            </p>
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
}


// =========================
// INFO COMPONENT
// =========================

function Info({ title, value }) {

    return (
        <div className="mb-12 border-b border-neutral-800 pb-8">

            <p className="
                uppercase
                tracking-[5px]
                text-[11px]
                text-neutral-500
                mb-3
            ">
                {title}
            </p>

            <h3 className="
                text-3xl
                font-light
                text-white
            ">
                {value || "-"}
            </h3>

        </div>
    );
}