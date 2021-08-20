// imports
import React from 'react';
import '../styles/OurService.css';
import Item from './Item';
import Top from './Top';

// component
const OurService: React.FC = () => {

    // JSX
    return (
        // OurService container
        <div
            className='OurService'
        >
            {/* Headings */}
            <Top 
                stHeading="Our Services"
                ndHeading="What are the best offers we have for you?"
                rdHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat interdum dolor enim justo."
                variant="light"
            />
            {/* services table */}
            <div
                className='services-table-container'
            >
                {/* the sections container */}
                <div 
                    className="sections-container"
                >
                    {/* services header */}
                    <div 
                        className="services-header"
                    >
                        <span
                            className='navigate-to-service-link marketing-link'
                        >
                            Marketing
                        </span>
                        <span
                            className='navigate-to-service-link'
                        >
                            Education
                        </span>
                        <span
                            className='navigate-to-service-link'
                        >
                            Others
                        </span>
                    </div>
                    {/* items container */}
                    <div 
                        className="items-container"
                    >
                        <img 
                            className="left-arrow"
                            src="/assets/arrow-left.png"
                            alt=""
                        />
                        <Item 
                            id="one"
                            title='SEO'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra neque, augue morbi ullamcorper enim urna nam pharetra. Euismod vivamus sit bibendum accumsan, non at. Vitae vitae leo imperdiet tristique fermentum.'
                        />
                        <Item 
                            id="two"
                            title='Email marketing'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra neque, augue morbi ullamcorper enim urna nam pharetra. Euismod vivamus sit bibendum accumsan, non at. Vitae vitae leo imperdiet tristique fermentum.'
                        />
                        <Item 
                            id="three"
                            title='Media Paid Advertising'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra neque, augue morbi ullamcorper enim urna nam pharetra. Euismod vivamus sit bibendum accumsan, non at. Vitae vitae leo imperdiet tristique fermentum.'
                        />
                        <img 
                            className="right-arrow"
                            src="/assets/arrow-right.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurService;