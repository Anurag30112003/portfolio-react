import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
export const Home = () => {
    return (
        <div className='home'>
            <div className="home-subheading">
                Hello
            </div>
            <div className="home-heading">
                I'm <span className="home-name">Anurag</span>
                </div>
                <div className="desc">
                    Full Stack Developer | SaaS Developer 
                </div>
                <div className="Km">
                 < Link className='km-more' to='/about'>Know-More </Link> </div>
        </div>
    )
}