export const services = [
  {
    title: "1. Residential Interior Design",
    description:
      "A home is one of the most personal spaces anyone will ever own. It deserves more than a catalogue of furniture and finishes. We design homes around the lifestyle, routines and aspirations of the people living in them. Our goal is simple—to create a house that genuinely feels like home.",
  },
  {
    title: "2. Commercial & Office Design",
    description: `Workspaces influence productivity, creativity and company culture far more than most people realise.
We create offices that not only reflect your brand but also encourage collaboration, focus and efficiency. 
Because a thoughtfully designed office is an investment in people—not just infrastructure.
`,
  },
  {
    title: "3. Retail & Experience Design",
    description: `Retail is no longer just about displaying products.
It is about creating an experience people remember.
We design stores, showrooms and commercial environments that strengthen your brand identity while making customers feel comfortable, engaged and connected to your business.
Every detail is considered—from customer movement and product visibility to lighting, materials and ambience.`,
  },
  {
    title: "4. Space Planning",
    description: `A well-designed space is rarely about having more area.
It is about using every square foot intelligently.
We carefully study circulation, functionality and ergonomics to create layouts that maximise comfort without compromising aesthetics.
The best designs often begin with the smartest plans.`,
  },
  {
    title: "5. Site Coordination & Design Supervision",
    description: `Design doesn't end when the drawings are complete.
The real transformation happens on site.
We work closely with contractors, vendors and craftsmen to ensure the design intent is maintained throughout execution.
Attention to detail, clear communication and timely problem-solving help us achieve results that stay true to the original vision.`,
  },
];

export default function ServicesSection() {
  const projectManagement = services.find((service) => service.fullWidth);

  const regularServices = services.filter((service) => !service.fullWidth);

  return (
    <section className="bg-black py-3 px-6 pb-30">
      <div className="max-w-6xl mx-auto bg-[#242424] rounded-2xl p-8 md:p-10">
        {/* Heading */}
        <h2 className="text-[#C9793B] text-[20px] font-semibold mb-10">
          Good design should improve the way you live, work and feel.
        </h2>

        <p className="text-[#9d9d9d] pb-6 leading-8">
          We don't believe in creating spaces that are beautiful only on the day
          they're photographed. We believe great design should continue to add
          value to your everyday life for years to come.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
          {regularServices.map((service, index) => (
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
              "
            >
              <h3 className="text-[#C9793B] text-[20px] leading-relaxed font-semibold max-w-[90%]">
                {service.title}
              </h3>

              <p className="mt-10 text-[#9d9d9d] text-[16px] leading-8 whitespace-pre-line">
                {service.description}
              </p>
            </div>
          ))}

          {/* Project Management - Full Width */}
          {projectManagement && (
            <div className="md:col-span-2 rounded-xl bg-[#2d2d2d] p-8 transition-all duration-500 hover:bg-[#353535]">
              <h3 className="text-white text-[20px] font-semibold">
                {projectManagement.title}
              </h3>

              <p className="mt-10 text-[#9d9d9d] text-[16px] leading-8">
                {projectManagement.description}
              </p>

              <p className="mt-5 text-[#9d9d9d] text-lg leading-8">
                {projectManagement.description2}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
