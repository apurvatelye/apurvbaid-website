import React from 'react'
import AboutParagraph from '../AboutParagraph'
import GridParagraph from './ServiceSection'
import ServicesSection from './ServiceSection'

const Para1 = () => {
    return (
        <>
            <AboutParagraph
                heading="Atel'ye Apurv – Your Trusted Interior Design Studio Raipur"
                content={[
                    { text: "Atel'ye Apurv is an " },
                    { text: "Interior Design Studio Raipur ", highlight: true },
                    { text: "that believes every space tells a story. The studio is based in Raipur and provides services in residential and commercial projects. It aims to create designs that are heavy in emotion, proportionate, and long-lasting. Each project is crafted with sensitivity from the conceptual stage to delivery so that customers get spaces that are both functional and aesthetic." },
                ]}
            />
            <AboutParagraph
                heading="Who we are"
                content={[
                    { text: "Atel'ye Apurv ", highlight: true },
                    { text: "is not just an interior designing company; it is a team of designers marrying imagination with simplicity. The brief is not only to make a room look great but also to make the room feel good for the people who dwell or operate within it. Our approach to " },
                    { text: "Residential Interior Design India", highlight: true },
                    { text: "  goes beyond aesthetics, focusing on emotion, memory, and everyday functionality. The team understands that design deeply influences how people experience spaces, interact, and live. For this reason, we treat every project as a unique odyssey—carefully crafted to reflect individuality, purpose, and comfort while creating timeless, meaningful interiors." },
                ]}
            />
            <AboutParagraph
                heading="Design Philosophy"
                content={[
                    { text: "Atel'ye Apurv ", highlight: true },
                    { text: "is not just a design company; it is a team of designers marrying imagination with simplicity. The brief is not only to make a room look great but also to make the room feel good for the people who dwell or operate within it. Our approach to " },
                    { text: "Residential Interior Design India", highlight: true },
                    { text: "  goes beyond aesthetics, focusing on emotion, memory, and everyday functionality. The team understands that design deeply influences how people experience spaces, interact, and live. For this reason, we treat every project as a unique odyssey—carefully crafted to reflect individuality, purpose, and comfort while creating timeless, meaningful interiors." },
                ]}
            />

            <ServicesSection />

        </>
    )
}

export default Para1