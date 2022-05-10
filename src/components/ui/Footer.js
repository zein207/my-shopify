import React from 'react'
import { Logo } from './Logo'

export const Footer = () => {
  return (

    <footer className='footer__wrapper'>

      <div>

        <ul className='footer__menu-list'>

          <li>
            <a className='footer__link footer__link--active' href='/'>Inicio</a>
          </li>

          <li>
            <a className='footer__link' href='/acerca-de'>Acerca de nosotros</a>
          </li>

          <li>
            <a className='footer__link' href='/historia'>Historia</a>
          </li>

          <li>
            <a className='footer__link' href='/contacto'>Contacto</a>
          </li>

        </ul>

        <ul className='footer__social-container'>

          <li>
            <a className='footer__social-link' href='www.linkedin.com'>
              <img src='images/linkedin.svg' className='footer__social-img'></img>
            </a>
          </li>

          <li>
            <a className='footer__social-link' href='www.vimeo.com'>
              <img src='images/vimeo.svg' className='footer__social-img'></img>
            </a>
          </li>

          <li>
            <a className='footer__social-link' href='www.instagram.com'>
              <img src='images/instagram.svg' className='footer__social-img'></img>
            </a>
          </li>

          <li>
            <a className='footer__social-link' href='www.twitter.com'>
              <img src='images/twitter.svg' className='footer__social-img'></img>
            </a>
          </li>

          <li>
            <a className='footer__social-link' href='www.facebook.com'>
              <img src='images/facebook.svg' className='footer__social-img'></img>
            </a>
          </li>

        </ul>

      </div>

      <Logo />
    </footer>
  )
}
