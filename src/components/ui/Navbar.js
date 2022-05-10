import React from 'react'
import { Logo } from './Logo'

export const Navbar = () => {

  return (
    <header>

      <div className='navbar__wrapper'>

        <div className='navbar__brand'>
          <div className='navbar__logo-wrapper'>
            <Logo />
            <h2 className='navbar__brand-name hide-d'>Tennis</h2>
          </div>
          <img className='navbar__brand-bars hide-d' src='images/bars-solid.svg'></img>
        </div>

        <nav className='navbar__collapse pl-center'>

          <ul className='navbar__list'>

            <li className='navbar__item'>
              <a className='navbar__link navbar__link--active' href='/'>Inicio</a>
            </li>

            <li className='navbar__item'>
              <a className='navbar__link' href='/acerca-de'>Acerca de nosotros</a>
            </li>

            <li className='navbar__item'>
              <a className='navbar__link' href='/historia'>Historia</a>
            </li>

            <li className='navbar__item'>
              <a className='navbar__link' href='/contacto'>Contacto</a>
            </li>

          </ul>

        </nav>

        <ul className='navbar__language'>
          <li className='navbar__language__item navbar__language__item--active'>ES</li>
          <li className='navbar__language__item'>EN</li>
        </ul>

      </div>

    </header>
  )

}
