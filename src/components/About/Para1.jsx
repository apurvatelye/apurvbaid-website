import AboutParagraph from "../AboutParagraph";
import ServicesSection from "./ServiceSection";

const Para1 = () => {
  return (
    <>
      <AboutParagraph
        heading="We don't just design spaces. We shape the way people experience them."
        content={[
          [
            { text: "At " },
            { text: "Atel'ye Apurv, ", highlight: true },
            {
              text: "we have always believed that every space has a silent conversation with the people who live in it.",
            },
          ],
          [
            {
              text: "A home can make you feel calm after the longest day. An office can inspire confidence before an important meeting. A café can become someone's favourite place without them ever knowing why. We believe these feelings are never accidental—they are designed.",
            },
          ],
          [{ text: "That belief is what drives us every single day." }],
          [
            {
              text: "Our journey is deeply rooted in tradition. Our family has been associated with the world of interiors since ",
            },
            { text: "1953 ", highlight: true },
            { text: "through " },
            { text: "Amar Pratishthan, ", highlight: true },
            {
              text: "Raipur (C.G) building decades of experience in wall and floor finishes. Growing up around craftsmanship taught us that great design isn't created by expensive materials alone. It is created by understanding people.",
            },
          ],
          [
            {
              text: "Started working on field from 2014 Apurv learned the tips and tricks of design industry. And in 2017, Atel'ye Apurv was founded with a simple vision—to create spaces that are beautiful, meaningful and emotionally connected to the people who use them.",
            },
          ],
        ]}
      />

      <ServicesSection />
    </>
  );
};

export default Para1;
