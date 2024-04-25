import React from 'react'
import "./ContactUs.css"
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottom, HiChatBubbleBottomCenter } from "react-icons/hi2"

function ContactUs() {
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        <div className='flexColStart c-left'>
          <span className='orangeText'>Our Contact</span>
          <span className='primaryText'>Easy to ContactUs</span>
          <span className='secondaryText'>we believe our customer feedback is good only place good to leave your life</span>
          <div className='flexColStart contactmodes'>
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdCall size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span>call</span>
                    <span>000228091 </span>
                  </div>
                </div>
                <div className='flexCenter button'>Call Now</div>
              </div>

              {/* second mode */}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span>Chat</span>
                    <span>000228091 </span>
                  </div>
                </div>
                <div className='flexCenter button'>Chat Now</div>
              </div>
            </div>
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span>Video</span>
                    <span>000228091 </span>
                  </div>
                </div>
                <div className='flexCenter button'>Video Now</div>
              </div>

              {/* second mode */}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span>Message</span>
                    <span>000228091 </span>
                  </div>
                </div>
                <div className='flexCenter button'>Message Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className='c-right'>
          <div className='image-container'>
            <img src='./contact.jpg' alt='not found !' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs