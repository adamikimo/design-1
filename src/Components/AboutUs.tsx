// imports
import React from 'react';
import about_us_img from '../assets/about-us-img.png';
import '../styles/AboutUs.css';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

// component
const AboutUs: React.FC = () => {
    const { animate, componentRef } = useScrollAnimation();
    // JSX
    return (
        // about us container
        <div
            className='AboutUs'
        >
            {/* the container of the about us img */}
            <div 
                className="img-container-about-us"
            >
                {/* the yellow transparent box */}
                <motion.div
                    ref={componentRef as any}
                    initial={{
                        x: animate ? 0 : -10,
                        opacity: animate ? 0 : 1
                    }}
                    animate={{
                        x: animate ? -10 : 0,
                        opacity: animate ? 1 : 0
                    }}
                    className="yellow-box"
                >

                </motion.div>
                {/* the about us img */}
                <motion.img
                    ref={componentRef as any}
                    initial={{
                        x: animate ? 0 : -10,
                        opacity: animate ? 0 : 1
                    }}
                    animate={{
                        x: animate ? -10 : 0,
                        opacity: animate ? 1 : 0
                    }} 
                    src={about_us_img}
                    alt="" 
                />
                {/* the red transparent box */}
                <motion.div
                ref={componentRef as any}
                    initial={{
                        x: animate ? 0 : -10,
                        opacity: animate ? 0 : 1
                    }}
                    animate={{
                        x: animate ? -10 : 0,
                        opacity: animate ? 1 : 0
                    }}
                    className="red-box"
                >

                </motion.div>
            </div>
            {/* about us text section */}
            <motion.div 
                className="about-us-text-section"
                ref={componentRef as any}
                initial={{
                    y: animate ? 0 : -10,
                    opacity: animate ? 0 : 1 
                }}
                animate={{
                    y: animate ? -10 : 0,
                    opacity: animate ? 1 : 0
                }}
            >
                    {/* about us title */}
                    <div 
                        className="about-us-title"
                    >
                        About Us
                    </div>
                    {/* about us heading */}
                    <div 
                        className="heading-about-us"
                    >
                        Who are we and why we are?
                    </div>
                    {/* about us text */}
                    <div 
                        className="about-us-text"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut egestas ac blandit.
                    </div>
                    {/* about us button */}
                    <motion.button
                        whileHover={{
                            scale: 1.1
                        }} 
                        transition={{
                            duration: 0.2
                        }}
                        className="about-us-btn"
                    >
                        Read more
                    </motion.button>
                </motion.div>
            </div>
    )
}

export default AboutUs;