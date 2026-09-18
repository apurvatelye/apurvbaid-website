export const services = [
    {
        title: "Architecture & Interior",
        description:
            "Total planning and design of new construction and renovations.",
    },
    {
        title: "Residential Interior Design India",
        description:
            "Homely, cozy, and practical homes, styled according to the daily habits of the people who reside there.",
    },
    {
        title: "Commercial and Office Interiors",
        description:
            "Workplace and business interiors that inspire creativity and effectiveness.",
    },
    {
        title: "Landscape Design",
        description:
            "Outdoor space styled in unity with nature.",
    },
    {
        title: "Adaptive Reuse and Remodelling",
        description:
            "Transforming old spaces into new ones without sacrificing their character.",
    }
];

export default function ServicesSection() {
    return (
        <section className="bg-black py-3 px-6">
            <div className="max-w-6xl mx-auto bg-[#242424] rounded-2xl p-8 md:p-10">

                {/* Heading */}

                <h2 className="text-white text-[20px] font-semibold mb-10">
                    Services We Offer
                </h2>

                {/* Grid */}

                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="
                relative
                rounded-xl
                bg-[#2d2d2d]
                p-8
                min-h-[210px]
                transition-all
                duration-500
                hover:bg-[#353535]
                group
              ">

                            <h3 className="text-white text-[20px] leading-6 font-semibold max-w-[90%]">
                                {service.title}
                            </h3>

                            <p className="mt-10 text-[#9d9d9d] text-[16px] leading-8">
                                {service.description}
                            </p>
                        </div>
                    ))}

                </div>


                {/* Last Block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="mt-6 rounded-xl bg-[#2d2d2d] p-8">
                        <h3 className="text-white text-[20px] font-semibold">
                            Project Management
                        </h3>

                        <p className="mt-10 text-[#9d9d9d] text-[16px] leading-1.5">
                            Where details, timing, and quality are all addressed from start
                            to finish.
                        </p>

                        <p className="mt-5 text-[#9d9d9d] text-lg leading-8">
                            All services are performed with care and coordination. Clients
                            are involved every step of the way, ensuring the process is clear
                            and fun.
                        </p>
                    </div>

                    <div className="mt-6 rounded-xl bg-[#2d2d2d] p-8">
                        <h3 className="text-white text-[20px] font-semibold">
                            Project Management
                        </h3>

                        <p className="mt-10 text-[#9d9d9d] text-[16px] leading-1.5">
                            Where details, timing, and quality are all addressed from start
                            to finish.
                        </p>

                        <p className="mt-5 text-[#9d9d9d] text-lg leading-8">
                            All services are performed with care and coordination. Clients
                            are involved every step of the way, ensuring the process is clear
                            and fun.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}