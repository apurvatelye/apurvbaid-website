import React from 'react'
import ServicesSection from '../About/ServiceSection'
import AboutParagraph from '../AboutParagraph'

const ServicesPara1 = () => {
    return (
        <>
            <AboutParagraph
                heading="Designing Spaces with Meaning"
                content={[
                    { text: "Atel'ye Apurv is an award-winning design studio dedicated to creating spaces that Atel'ye Apurv, connect, and endure. We are a high-end interior design studio in India, thoughtfully designing spaces layered in elegance and character. Every project expresses the lifestyle and aspirations of our clients. With our office architecture design India, we build workplaces that inspire creativity, maximize focus, and support modern business processes. " },
                    { text: "As a retail Interior Designing studio in India, at Atel'ye Apurv, we re-invent the customer branding experience. Our contemporary design in India represents our commitment to innovation, sustainability, and contextualism. We are proud to be recognized as one of the best interior design studios in India, continuing to design spaces that embody vision, elegance, and emotion." }
                ]}
            />
            <ServicesSection />
            <AboutParagraph
                heading="Why Atel'ye Apurv"
                content={[
                    { text: "Atel'ye Apurv is an award-winning interior design studio dedicated to creating spaces that inspire, connect, and endure. We are a high-end interior design studio in India, thoughtfully designing spaces layered in elegance and character. Every project expresses You can find confidence in our work, as we have been recognized among the top 5 interior designers in Raipur. Each of our projects balances structure, light, and material to produce spaces that are both functional and sophisticated — and truly memorable. lifestyle and aspirations of our clients. With our office interior design India, we build workplaces that inspire creativity, maximize focus, and support modern business processes. " },
                ]}
            />
        </>
    )
}

export default ServicesPara1