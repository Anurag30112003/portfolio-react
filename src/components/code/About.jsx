import React from 'react'
import '../css/About.css'
import profile from'../img/profile.png'
export const About = () => {
    return (
        <section id='#about'>
        <div className='about'>
            <h1 className='about-title'>About</h1>
            <div className="about-text">
                <p className='about-p'>
                Hey there I am Anurag from India.
                I am a full stack developer.</p>
                <img src={profile} alt="" className='profile' />
            </div>
        </div></section>
    )
}
