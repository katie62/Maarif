import React from 'react'
import './Navbar.css';
import Logo from '../../assets/LogoYazı.svg'
import {NavLink} from 'react-router-dom';

const Navbar=() => {
  return (
      <nav className='navbarım'>
        <img className='logo' src={Logo} alt="logo" />
      <div className="desktopMenu">
        <NavLink className="desktopMenuListItem" to='/'>Anasayfa</NavLink>
        <NavLink className="desktopMenuListItem" to='/hakkimizda'>Hakkımızda</NavLink>

      </div>
        <NavLink to='/iletisim' className="desktopMenuBtn">
            İletişim
        </NavLink>
    </nav>
   
  )
}

export default Navbar