import React, { useState } from 'react'
import "./Value.css"
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
    Accordion
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from "react-icons/md"
import data from "../utils/accordian"

function Value() {
    const [claasname,setClassName] = useState(null)

  return (
    <section className='v-wrapper'>
        <div className='paddings innerWidth flexCenter v-container'>
            <div className='v-left'>
                <div className='image-container'>
                    <img src='./value.png' alt='not found' />
                </div>
            </div>
            <div className='flexColStart v-right'>
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We give to you</span>
                <span className='secondaryText'>We always ready to help by providing best services
                    <br />
                    we believe a good place to live can make your life better
                </span>
                <Accordion
                className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {
                        data.map((accordian,i)=>{
                            return(
                                <AccordionItem className={`accordionItem ${claasname}`}key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>
                                            <AccordionItemState>
                                                {
                                                    ({expanded})=>
                                                    expanded?setClassName("expanded"):setClassName("Collapsed")
                                                }
                                            </AccordionItemState>
                                            <div className='flexCenter icon'>{accordian.icon}
                                            </div>
                                            <span className='primaryText'>
                                                {accordian.heading}
                                            </span>
                                            <div className='flexCenter icon'>
                                                <MdOutlineArrowDropDown size={26} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{accordian.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }

                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value