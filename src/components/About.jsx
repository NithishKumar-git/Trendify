import React from 'react'
import"./About.css"
import aboutImg from '../assets/about.jpg';
import aboutImg2 from '../assets/aboutImg2.avif';
function About() {
  return (
    <div>
        <div className='about'>
            <div className='about-left'>
                <h1>About Us </h1>
                <p>Welcome to Trendify, your go-to destination for the latest styles and fashion trends.
                We believe fashion is more than just clothing — it’s a way to express yourself confidently every day.</p>
            </div>
             <div className='about-right'>
                    <img 
                      src={aboutImg} 
                      alt="About Trendify" 
                      />
             </div>
        </div>

        <div className='about-2'>
          <div className='about-2-left'>
              <img 
                      src={aboutImg2} 
                      alt="About Trendify" 
                      />
          </div>

          <div className="about-2-right">
            <p><i className="bi bi-check-circle"></i>At Trendify, we believe fashion is more than just clothing — it’s an expression of who you are.</p>
            <p><i className="bi bi-check-circle"></i>We approach every collection with a holistic mindset, balancing aesthetic appeal, comfort, and individual expression.</p>
            <p><i className="bi bi-check-circle"></i>Your personality and preferences are at the heart of our designs.</p>
            <p><i className="bi bi-check-circle"></i>We work passionately to understand what style means to you and translate it into modern, wearable pieces.</p>
            <p><i className="bi bi-check-circle"></i>It’s the attention to detail — the stitch, the fabric, the fit — that transforms an outfit into confidence.</p>
            <p><i className="bi bi-check-circle"></i>In a world where trends evolve rapidly, Trendify embraces innovation, blending timeless fashion with the latest styles to bring you looks that feel both fresh and classic.</p>
          </div>
        </div>
    </div>
  )
}

export default About