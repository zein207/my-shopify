import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const BannerSlider = () => {
  return (

      <div className='banner-slider__wrapper'>

        <Splide aria-label="Tennis images">

            <SplideSlide>
                <div className='banner-container'>

                    <img src="images/ball-cover.jpg" alt="Tennis ball"/>

                    <div className='banner__text-container'>
                        <h2>
                            Nuestras
                            <br />
                            <strong>Raquetas</strong>
                        </h2>
                        <p>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
                    </div>

                </div>
            </SplideSlide>

            <SplideSlide>
                <div className='banner-container'>

                    <img src="images/ball-cover.jpg" alt="Tennis ball"/>

                    <div className='banner__text-container'>
                        <h2>
                            Nuestras
                            <br />
                            <strong>Raquetas</strong>
                        </h2>
                        <p>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
                    </div>

                </div>
            </SplideSlide>

            <SplideSlide>
                <div className='banner-container'>

                    <img src="images/ball-cover.jpg" alt="Tennis ball"/>

                    <div className='banner__text-container'>
                        <h2>
                            Nuestras
                            <br />
                            <strong>Raquetas</strong>
                        </h2>
                        <p>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
                    </div>

                </div>
            </SplideSlide>

            <SplideSlide>
                <div className='banner-container'>

                    <img src="images/ball-cover.jpg" alt="Tennis ball"/>

                    <div className='banner__text-container'>
                        <h2>
                            Nuestras
                            <br />
                            <strong>Raquetas</strong>
                        </h2>
                        <p>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
                    </div>

                </div>
            </SplideSlide>

        </Splide>

      </div>
  )
}
