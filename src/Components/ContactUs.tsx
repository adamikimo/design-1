// imports
import React from 'react';
import '../styles/ContactUs.css';
import Contact_Us_Img from '../assets/contact-us-img.png';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

// component
const ContactUs: React.FC = () => {
    const { animate: boxAnimationVal, componentRef: boxRef } = useScrollAnimation();
    const { animate: imgAnimationVal, componentRef: imgRef } = useScrollAnimation();
    // JSX
    return (
        // contact us container
        <div
            className='ContactUs'
        >
            {/* contact us form */}
            <motion.div 
                ref={boxRef as any}
                className="contact-us-form"
                initial={{
                    x: boxAnimationVal ? 0 : 10,
                    opacity: boxAnimationVal ? 0 : 1
                }}
                animate={{
                    x: boxAnimationVal ? 10 : 0,
                    opacity: boxAnimationVal ? 1 : 0
                }}
                transition={{
                    delay: 1,
                    duration: 0.5
                }}
            >
                {/* contact us title */}
                <div 
                    className="contact-us-title"
                >
                    Contact form
                </div>
                <label 
                    htmlFor="name"
                >
                    Name
                </label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                />
                <label 
                    htmlFor="email"
                >
                    Email address
                </label>
                <input 
                    type="email" 
                    name="email"
                    id="email"
                />
                <label 
                    htmlFor="message"
                >
                    Message
                </label>
                <textarea 
                    name="message" 
                    id="message" 
                />
                <button>
                    Envoyez
                </button>
            </motion.div>
            {/* contact us img container */}
            <motion.div 
                ref={imgRef as any}
                className="contact-us-img"
                initial={{
                    x: boxAnimationVal ? 0 : -10,
                    opacity: boxAnimationVal ? 0 : 1
                }}
                animate={{
                    x: boxAnimationVal ? -10 : 0,
                    opacity: boxAnimationVal ? 1 : 0
                }}
                transition={{
                    delay: 1.5,
                    duration: 0.5
                }}
            >
                {/* contact us img */}
                <img 
                    src={Contact_Us_Img} 
                    alt="" 
                    width={200}
                    height={270}
                />
            </motion.div>
        </div>
    )
}

export default ContactUs;