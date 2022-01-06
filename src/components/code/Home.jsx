import React from 'react'
import '../css/Home.css'
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
                <button className='btn-km'>  <a href='#about'>Know-More </a> </button></div>
        </div>
    )
}
