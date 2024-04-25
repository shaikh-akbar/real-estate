import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from "react-icons/hi"
import CountUp from "react-countup"
import {motion} from "framer-motion"

function Hero() {
    return (
        <section className=' hero-wrapper'>
            <div className='paddings innerWidth flexCenter hero-container'>
                <div className='flexColStart hero-left'>
                    <div className='hero-title'>
                        <div className='orange-circle' />
                        <motion.h1
                        initial={{y:"2rem",opacity:"0"}}
                        animate={{y:0,opacity:1}}
                        transition={{
                            duration: 2,
                            type:'spring'
                        }}
                        >Discover <br />Most Suitable <br />Property</motion.h1>
                    </div>
                    <div className='flexColStart hero-desc'>
                        <span>Find a Variety of property that suits you easily</span>
                        <span>Find a Variety of property that suits you easily</span>
                    </div>  
                    <div className='flexCenter search-bar'>
                       <HiLocationMarker color="var(--blue)" size={25}/>
                       <input type='text'/>
                       <button className='button'>Search</button>
                    </div>
                    <div className='flexCenter stats'>
                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp start={8500} end={9200} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp start={1250} end={2250} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customer</span>
                        </div>
                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winner</span>
                        </div>
                    </div>
                </div>


                <motion.div
                initial={{x:'7rem',opacity:0}}
                animate={{x:"0",opacity:1}}
                transition={{
                    duration:2,
                    type:'string'
                }}
                className='flexCenter hero-right'>
                    <div className='image-container'>
                        <img src='./hero-image2.png' alt='not found!' />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero