// imports
import React, { useEffect, useRef, useState } from 'react';
import '../styles/Landing.css';
import HeroButton from './HeroButton';
import Hero from '../assets/Hero.png';
import Prexsels from '../assets/perxels.png';
import Google from '../assets/Google.png';
import Udemy from '../assets/udemy.png';
import Uplers from '../assets/uplers.png';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

// component
const Landing: React.FC = () => {
    const { animate, componentRef } = useScrollAnimation();
    // JSX
    return (
        // landing section container
        <div
            className='Landing'
        >
            {/* top section container */}
            <div
                className='Landing-top-container'
            >
                {/* text and buttons container */}
                <div
                    className='Landing-text-container'
                >
                    {/* big text (main text) */}
                    <motion.div
                        initial={{
                            x: -10,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 2.5,
                            duration: 1
                        }}
                        className='bigText'
                    >
                        Empower your  Business, Skill, Education and Project with professionals
                    </motion.div>
                    {/* small text (lorem ipsum) */}
                    <motion.div
                        initial={{
                            x: -10,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 3,
                            duration: 1
                        }}
                        className='smallText'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu vitae sit congue venenatis hac viverra imperdiet viverra volutpat. 
                    </motion.div>
                    {/* buttons container */}
                    <motion.div
                        initial={{
                            x: -10,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 3.5,
                            duration: 1
                        }}
                        className='Buttons-container'
                    >
                        {/* enroll now button */}
                        <motion.button
                            whileHover={{
                                scale: 1.1
                            }}
                            className='EnrollNow-button'
                        >
                            Enroll Now
                        </motion.button>
                        {/* contact us button */}
                        <motion.button
                            whileHover={{
                                scale: 1.1
                            }}
                            className='ContactUs-button'
                        >
                        Contact Us 
                        </motion.button>
                    </motion.div>
                </div>
                {/* hero container */}
                <div
                    className='Landing-hero-container'
                >
                    {/* hero img */}
                    <motion.img 
                        initial={{
                            x: 30,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1,
                            duration: 1
                        }}
                        src={Hero}
                    />
                    {/* management button */}
                    <div
                        className="heroButtonContainer managment"
                    >
                        <HeroButton 
                            text="Management"
                        />
                    </div>
                    {/* learning button */}
                    <div
                        className="heroButtonContainer learning"
                    >
                        <HeroButton 
                            text="Learning"
                        />
                    </div>
                    {/* marketing button */}
                    <div
                        className="heroButtonContainer marketing"
                    >
                        <HeroButton 
                            text="Marketing"
                        />
                    </div>

                    <div
                        className="heroButtonContainer programming"
                    >
                        <HeroButton 
                            text="Programming"
                        />
                    </div>
                </div>
            </div>
            {/* bottom container*/}
            <motion.div
                ref={componentRef as any}
                initial={{
                    y: animate ? 0 : 10,
                    opacity: 0
                }}
                animate={{
                    y: animate ? 0 : 10,
                    opacity: animate ? 1 : 0
                }}
                transition={{
                    duration: 0.5
                }}
                className='Landing-bottom-container'
            >
                <img 
                    src={Prexsels}
                    alt="" 
                />
                <img 
                    src={Udemy} 
                    alt="" 
                />
                <img 
                    src={Google} 
                    alt="" 
                />
                <img 
                    src={Uplers} 
                    alt="" 
                />
            </motion.div>
        </div>
    )
}

export default Landing;