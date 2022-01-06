import React from 'react'
// import './logo'
import '../css/Header.css'
export const Header = () => {
    return (
        <nav className='nav'>
                <a className='nav-item' href='/'>
                    Home
                </a>
                <a className='nav-item' href='#about'>
                    About
                </a>
                <a className='nav-item' href='#contact' >
                    Contact
                </a>
        </nav>
    )
}
