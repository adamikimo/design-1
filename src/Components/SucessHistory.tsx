// imports
import React, { useState } from 'react';
import '../styles/SuccessHistory.css';
import Top from './Top';
import Man from '../assets/man.png';
import Bag from '../assets/bag.png';
import ImgFrame from '../assets/imgFrame.png';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

// component
const SucessHistory: React.FC = () => {
    const { animate, componentRef } = useScrollAnimation();
    // JSX
    return (
        // success history section container
        <div
            className='SucessHistory'
        >
            {/* Headings */}
            <Top 
                stHeading="Success History"
                ndHeading="Do you know why we are the Best?"
                rdHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque tortor. Est, vitae volutpat ullamcorper enim."
                variant="dark"
            />
            {/* success history section bottom container part */}
            <div 
                className="successHistory-bottom"
            >
                {/* success history item container */}
                <div 
                    className="successHistory-item"
                >
                    {/* success history item title */}
                    <div 
                        className="successHistory-item-title"
                    >
                        We are trusted by
                    </div>
                    {/* success history item body */}
                    <div 
                        className="successHistory-item-body"
                    >
                        {/* success history icon */}
                        <img 
                            src={Man} 
                            alt="" 
                        />
                        {/* success history item body amount */}
                        <motion.span 
                            className="successHistory-item-body-amount"
                            ref={componentRef as any}
                            initial={{
                                y: animate ? 0 : 50
                            }}
                            animate={{
                                y: animate ? 0 : 50
                            }}
                            transition={{
                                duration: 0.5    
                            }
                            }
                        >
                            5K+
                        </motion.span>
                    </div>
                </div>
                {/* success history item container */}
                <div 
                    className="successHistory-item"
                >
                    {/* success history item title */}
                    <div 
                        className="successHistory-item-title"
                    >
                        Project realized
                    </div>
                    {/* success history item body */}
                    <div 
                        className="successHistory-item-body"
                    >
                        {/* success history icon */}
                        <img 
                            src={Bag} 
                            alt="" 
                        />
                        {/* success history item body amount */}
                        <motion.span 
                            className="successHistory-item-body-amount"
                            ref={componentRef as any}
                            initial={{
                                y: animate ? 0 : 50
                            }}
                            animate={{
                                y: animate ? 0 : 50
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5
                            }}
                        >
                            200+
                        </motion.span>
                    </div>
                </div>
                {/* success history item container */}
                <div 
                    className="successHistory-item"
                >
                    {/* success history item title */}
                    <div 
                        className="successHistory-item-title"
                    >
                        Happy Clients
                    </div>
                    {/* success history item body */}
                    <div 
                        className="successHistory-item-body"
                    >
                        {/* success history icon */}
                        <img 
                            src={ImgFrame} 
                            alt="" 
                        />
                        {/* success history item body amount */}
                        <motion.span 
                            className="successHistory-item-body-amount"
                            ref={componentRef as any}
                            initial={{
                                y: animate ? 0 : 50
                            }}
                            animate={{
                                y: animate ? 0 : 50
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 1
                            }}
                        >
                            600+
                        </motion.span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SucessHistory;