import AboutParagraph from "../AboutParagraph";
import ServicesSection from "./ServiceSection";

const Para1 = () => {
  return (
    <>
      <AboutParagraph
        heading="Designing Spaces That Feel As Good As They Look

"
        content={[
          { text: "At Atel'ye Apurv, every project begins with one simple belief " },
          
        ]}
      />

      <ServicesSection />
    </>
  );
};

export default Para1;
