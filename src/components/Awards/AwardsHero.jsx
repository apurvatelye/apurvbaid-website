import React from 'react'
import Hero from '../Hero'

const AwardsHero = () => {
    return (
        <>
            <Hero
                firstLine="Our Studio"
                paragraph={
                    <>
                        We are a design studio specializing in architecture and interiors, redifining the art of  <br />  spatial storytelling with bold ideas and creative exploration.
                    </>
                }
                leftBottomText="Scroll to explore"
                leftBottomIcon="⌄"
                rightBottomText="Our Short Story"

            />
        </>
    )
}

export default AwardsHero