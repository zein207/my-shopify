import React from 'react'
import { BannerSlider } from '../ui/BannerSlider'
import { History } from '../ui/History'
import { MainCover } from '../ui/MainCover'
import { SingleBanner } from '../ui/SingleBanner'

export const HomeScreen = () => {
  return (
    <div>
      
      <MainCover />

      <History />

      <section>
        <BannerSlider />
      </section>

      <SingleBanner />

    </div>
  )
}
