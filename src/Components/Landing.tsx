// imports
import React from 'react';
import '../styles/Landing.css';
import HeroButton from './HeroButton';
import Hero from '../assets/Hero.png';
import Prexsels from '../assets/perxels.png';
import Google from '../assets/Google.png';
import Udemy from '../assets/udemy.png';
import Uplers from '../assets/uplers.png';

// component
const Landing: React.FC = () => {
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
                    <div
                        className='bigText'
                    >
                        Empower your  Business, Skill, Education and Project with professionals
                    </div>
                    {/* small text (lorem ipsum) */}
                    <div
                        className='smallText'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu vitae sit congue venenatis hac viverra imperdiet viverra volutpat. 
                    </div>
                    {/* buttons container */}
                    <div
                        className='Buttons-container'
                    >
                        {/* enroll now button */}
                        <button
                            className='EnrollNow-button'
                        >
                            Enroll Now
                        </button>
                        {/* contact us button */}
                        <button
                            className='ContactUs-button'
                        >
                        Contact Us 
                        </button>
                    </div>
                </div>
                {/* hero container */}
                <div
                    className='Landing-hero-container'
                >
                    {/* hero img */}
                    <img 
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
            <div
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
            </div>
        </div>
    )
}

export default Landing;