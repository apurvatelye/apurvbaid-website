const AboutParagraph = ({ heading, content }) => {
  return (
    <section className="bg-black py-3 px-6">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#252525] px-8 py-10">
        <h2 className="text-[20px] font-semibold text-[#C9793B]">{heading}</h2>

        <div className="mt-10 space-y-5 text-[16px] leading-[1.7] text-[#8f8f8f]">
          {content.map((paragraph, index) => {
            const items = Array.isArray(paragraph) ? paragraph : [paragraph];

            return (
              <p key={index}>
                {items.map((item, itemIndex) =>
                  item.highlight ? (
                    <span key={itemIndex} className="font-semibold text-white">
                      {item.text}
                    </span>
                  ) : (
                    <span key={itemIndex}>{item.text}</span>
                  ),
                )}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutParagraph;
