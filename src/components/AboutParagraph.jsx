const AboutParagraph = ({ heading, content }) => {
    return (
        <section className="bg-black py-3 px-6">
            <div className="mx-auto max-w-6xl rounded-2xl bg-[#252525] px-8 py-10">
                <h2 className="text-[20px] font-semibold text-white">
                    {heading}
                </h2>

                <p className="mt-10 text-[16px] leading-[1.5] text-[#8f8f8f]">
                    {content.map((item, index) =>
                        item.highlight ? (
                            <span
                                key={index}
                                className="font-semibold text-white"
                            >
                                {item.text}
                            </span>
                        ) : (
                            <span key={index}>{item.text}</span>
                        )
                    )}
                </p>
            </div>
        </section>
    );
};

export default AboutParagraph;