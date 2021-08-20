// imports
import React from 'react';
import '../styles/Nav.css';
import nav from '../assets/nav.png';
import {
    motion
} from 'framer-motion';

// component
const Nav: React.FC = () => {
    // JSX
    return (
        <>
        <div
            className="nav_menu"
        >
            <img src={nav} alt="" />
        </div>
        {/* nav container */}
        <motion.div
            initial={{
                y: -10,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            className='Nav'
        >
            {/* links container */}
            <div
                className='links'
            >
                {/* home link */}
                <span
                    className='homeLink'
                >
                    Home
                </span>
                {/* about us link */}
                <span
                    className='link about-usLink'
                >
                    About Us
                </span>
                {/* projects link */}
                <span
                    className='link projectsLink'
                >
                    Projects
                </span>
                {/* contact us link */}
                <span
                    className='link contact-usLink'
                >
                    Contact Us
                </span>
                {/* login link */}
                <span
                    className='link login-Link'
                >
                    Login
                </span>
                {/* Enroll Now Button */}
                <button
                    className='Enroll-Now'
                >
                    Enroll Now
                </button>
            </div>
        </motion.div>
        </>
    )
}

export default Nav;