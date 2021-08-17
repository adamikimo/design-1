// imports
import React from 'react';
import '../styles/Item.css';

// props interface
interface ItemProps{
    title: string;
    text: string;
    id: string;
}

// component
const Item: React.FC<ItemProps> = ({ id, text, title }) => {
    // JSX
    return (
        // item container
        <div
            className={`Item ${id}`}
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
        </div>
    )
}

export default Item;