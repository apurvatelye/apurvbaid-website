export const services = [
  {
    title: "More Than Designers",
    description: `We don't see ourselves as consultants who simply prepare drawings and leave.

We become a part of the journey.

From planning layouts and selecting materials to guiding contractors, solving site challenges and refining every little detail, we stay involved because we know that good design is built through hundreds of thoughtful decisions—not one grand idea.

Every project teaches us something new, and that curiosity keeps us growing.`,
  },
  {
    title: "A Personal Note From Apurv",
    description: `I have always believed that success isn't measured by the number of projects we complete, but by the way people feel when they walk into the spaces we've created.

Some of the best compliments I've received were never about luxury or expensive finishes.

They were simple.

"This house finally feels like us."

"I enjoy working here every day."

"It just feels right."

Those moments remind me why I chose this profession.

Design, for me, has never been about creating something that looks different. It has always been about creating something that feels right.

That's the purpose behind every line we draw and every decision we make.

And that's the purpose we'll continue to design for.`,
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
          Design Beyond Aesthetics (Design Philosophy)
        </h2>

        <p className="text-[#9d9d9d] pb-6 leading-8">
          For us, design begins long before choosing colours, furniture or
          finishes. It begins with conversations. <br />
          We spend time understanding how our clients live, work, celebrate,
          relax and dream. Every family has different habits. Every business has
          a different culture. Every individual has a different personality.
          That is why we don't believe in repeating designs. <br />
          Our approach revolves around what we call{" "}
          <span className="text-white font-semibold">Space Psychology</span> the
          understanding that design has the power to influence emotions,
          productivity, relationships and overall well-being. A beautiful space
          catches your attention. A thoughtfully designed space quietly improves
          your life. That difference is everything to us.
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
