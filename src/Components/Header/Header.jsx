import React, { useState } from 'react'
import './Header.css'
// import Logo from '../../asset/Logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {

const [toggle, setToggle] = useState(false)

// const [onmouseover, setOnMouseOver] = useState(false)

const handleToggle = () => {
  return setToggle(prevToggle =>!prevToggle)
}

// const handleMouse =() => {
//   return setOnMouseOver(prevMouse => !prevMouse)
// }



  return (
    <div>
        <header>
        {/* LOGO */}
        <div>

          <Link to='/' className="logo">JOHNSON</Link>
          <p className='subLogo'>Portfolio website</p>
        </div>

        <div className="hamburger" id="hamburger" onClick={handleToggle}>
        {toggle ? <span>&times;</span> : <span>&#9776;</span>}
        </div>

        {/* <div className='close' id="close" onclick={eventClose}>  </div> */}

        {/* NaVIGATION BAR */}
        <nav className='navBar'>
        <ul className={toggle ? 'menu-drop': 'menu'}>
        {/* // {toggle ? 'menu': 'deactive'} */}
        <li><Link to='/' className='menu-list'>Home</Link></li>
        <li><Link to='./' className='menu-list'>Work</Link></li>
        <li><Link to='./' className='menu-list'>About</Link></li>
        <li><Link to='/AboutUs' className='menu-list'>Contact</Link></li>

        <Link to='./'>

        <button className='btn1' type='submit'>HIRE ME</button>
        </Link>

    
    
        </ul>
        </nav>
        </header>
    </div>
  )
}

export default Header