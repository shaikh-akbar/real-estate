import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from "swiper/react"
import data from '../utils/slider.json'
import "swiper/css"
import "./Residencies.css"
import { sliderSettings } from '../utils/Common'
import {AiFillCaretLeft} from "react-icons/ai"
import {AiFillCaretRight} from "react-icons/ai"
function Residencies() {
    const swiper = useSwiper()
  return (
    <section className='r-wrapper'>
        <div className='paddings innerWidth r-container'>
            <div className='r-head flexColStart'>
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButtons />
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className='flexColStart r-card'>
                                <img src={card.image}alt='not found!'/>
                                <span className='secondaryText r-price'>
                                    <span style={{color:"orange"}}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                            </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies
const SliderButtons = () => {
    const swiper = useSwiper()
    return(
        <div className="r-button flexCenter">
        <button onClick={()=>swiper.slidePrev()}><AiFillCaretLeft /></button>
        <button onClick={()=>swiper.slideNext()}><AiFillCaretRight/></button>
        </div>
    )
}