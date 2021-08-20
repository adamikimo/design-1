// imports
import React from 'react';
import '../styles/Item.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

// props interface
interface ItemProps{
    title: string;
    text: string;
    id: string;
}

// component
const Item: React.FC<ItemProps> = ({ id, text, title }) => {
    const { animate, componentRef } = useScrollAnimation();
    let delay = 0;
    if(id === 'one'){
        delay = 0;
    } else if(id === 'two'){
        delay = 0.5;
    } else {
        delay = 1;
    }
    // JSX
    return (
        // item container
        <motion.div
            className={`Item ${id}`}
            ref={componentRef as any}
            initial={{
                y: animate ? 0 : 20,
                opacity: 0
            }}
            animate={{
                y: animate ? 0 : 20,
                opacity: animate ? 1 : 0
            }}
            transition={{
                duration: 0.75,
                delay
            }}
        >
            {/* item title */}
            <div
                className='item-title'
            >
                {title}
            </div>
            {/* item text */}
            <div
                className='item-text'
            >
                {text}
            </div>
            {/* item button */}
            <button
                className='item-btn'
            >
                Learn more
            </button>
        </motion.div>
    )
}

export default Item;