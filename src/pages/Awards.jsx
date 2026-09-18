import React from 'react'
import AwardsHero from '../components/Awards/AwardsHero'
import VideoSection from '../components/Awards/VideoSection'
import AwardsScrollFillText from '../components/Awards/AwardsScrollFillText'
import PremiumHoverList from '../components/Awards/PremiumHoverList'
import AwardsStretchText from '../components/Awards/AwardsStretchText'

const Awards = () => {
    return (
        <>
            <AwardsHero />
            <VideoSection />
            <AwardsScrollFillText />
            <PremiumHoverList />
            <AwardsStretchText />
        </>
    )
}

export default Awards