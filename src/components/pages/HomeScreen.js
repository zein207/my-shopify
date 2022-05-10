import React from 'react'
import { BannerSlider } from '../ui/BannerSlider'
import { History } from '../ui/History'
import { MainCover } from '../ui/MainCover'
import { ProductSlider } from '../ui/ProductSlider'
import { SingleBanner } from '../ui/SingleBanner'

export const HomeScreen = () => {
  return (
    <div>
      
      <MainCover />

      <History />

      <section className='product-slider__wrapper'>

        <BannerSlider />

        <ProductSlider />

      </section>

      <SingleBanner />

    </div>
  )
}
