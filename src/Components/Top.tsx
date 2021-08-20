import React from 'react';
import '../styles/Top.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

interface TopProps{
    stHeading: string;
    ndHeading: string;
    rdHeading: string;
    variant: "dark" | "light";
}

const Top: React.FC<TopProps> = ({ stHeading, ndHeading, rdHeading, variant }) => {
    const { animate, componentRef } = useScrollAnimation();
    return (
        <motion.div
            className='Top'
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
                duration: 1
            }}
        >
            <div 
                className={`first-heading-top ${variant}`}
            >
                {stHeading}
            </div>
            <div 
                className="second-heading-top"
            >
                {ndHeading}
            </div>
            <div 
                className="third-heading-top"
            >
                {rdHeading}
            </div>
        </motion.div>
    )
}

export default Top;