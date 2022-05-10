import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const ProductSlider = () => {

    const sliderOptions = {
        type: 'loop',
        perPage: 3,
        arrows: false,
        pagination: false,
        autoplay: true,
        rewind: true,
        gap: '36px'
    }

  return (

    <Splide aria-label="Tennis images" options={ sliderOptions } className="product-slider">

        <SplideSlide>
            <div className='product-item'>

                <img className='product-item__img' src="images/raqueta.jpg" alt="Raqueta"/>

                <span className='product-item__index'>1</span>

            </div>
        </SplideSlide>

        <SplideSlide>
            <div className='product-item'>

                <img className='product-item__img' src="images/raqueta.jpg" alt="Raqueta"/>

                <span className='product-item__index'>2</span>

            </div>
        </SplideSlide>

        <SplideSlide>
            <div className='product-item'>

                <img className='product-item__img' src="images/raqueta.jpg" alt="Raqueta"/>

                <span className='product-item__index'>3</span>

            </div>
        </SplideSlide>

        <SplideSlide>
            <div className='product-item'>

                <img className='product-item__img' src="images/raqueta.jpg" alt="Raqueta"/>

                <span className='product-item__index'>4</span>

            </div>
        </SplideSlide>

    </Splide>
  )
}
