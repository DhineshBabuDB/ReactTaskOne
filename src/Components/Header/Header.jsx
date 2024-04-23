import React from 'react'
import Logo from './Assets/Icons/Logo.png'
import './Header.css'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div className='Header'>
        <div className='Header_Left'>
            <Link to='/'>
                <img src={Logo} alt="Logo" />
            </Link>
        </div>
        <div className='Header_right'>
            <ul>
                <li><Link to='/' className='Links'>Home</Link></li>
                <li><Link to='/cart' className='Links'>Cart</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default HeaderComponent