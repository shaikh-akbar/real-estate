import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import {BiMenuAltRight} from "react-icons/bi"
import OutsideClickHandler from "react-outside-click-handler"

function Navbar() {
    const [menuOpen,setMenuOpen] = useState(false);
    // const headerRef = useRef()
    const getMenuStyles = (menuOpen) => {
        if(document.documentElement.clientWidth<=800){
            return {
                right: !menuOpen && "-100%"
            }
        }
    }
    // useEffect(()=>{
    //     window.addEventListener('scroll',()=>{
    //       if(document.body.scrollTop>80||document.documentElement.scrollTop>80){
    //         headerRef.current.classList.add('header__shrink')
    
    //       }else{
    //         headerRef.current.classList.remove('header__shrink')
            
    //       }
    //     return ()=> window.removeEventListener('scroll')
    
    //     })
    
    //   },[])
  return (
    
        <section className='h-wrapper' >
            <div className='flexCenter paddings innerWidth h-container'>
                <img src='./logo2.png' alt='not found!' width={100}/>
                <OutsideClickHandler 
                onOutsideClick={()=>{
                    setMenuOpen(false)
                }}
                >
                <div className='flexCenter h-menu' style={getMenuStyles(menuOpen)}>
                    <a href=''>Residencies</a>
                    <a href=''>Our Value</a>
                    <a href=''>Contact Us</a>
                    <a href=''>Get Started</a>
                    <button className='button'>
                        <a href="">Contact Us</a>
                    </button>
                </div>
                </OutsideClickHandler>
                <div className='menu-icon' onClick={()=>setMenuOpen((prev)=>!prev)}>
                <BiMenuAltRight size={30} />
            </div>
            </div>
            
        </section>
   
  )
}

export default Navbar