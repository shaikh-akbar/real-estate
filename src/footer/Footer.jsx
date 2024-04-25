import React from 'react'
import "./Footer.css"

function Footer() {
  return (
   <section className='f-wrapper'>
    <div className='f-container paddings innerWidth flexCenter'>
        <div className='flexColStart f-left'>
            <img src='./logo2.png' alt='not found!' />
            <span className='secondaryText' >
                Our Vision is to make all people 
                <br />
                the best place to live for them
            </span>
        </div>
        <div className='flexColStart f-right'>
            <span className='primaaryText'>Information</span>
            <span className='secondaryText'>63/A peerbhoy Mansion Mumbai-Central</span>

            <div className='flexCenter f-menu'>
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>AboutUs</span>
                
            </div>
        </div>
    </div>
   </section>
  )
}

export default Footer