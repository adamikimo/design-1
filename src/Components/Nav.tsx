// imports
import React from 'react';
import '../styles/Nav.css';

// component
const Nav: React.FC = () => {
    // JSX
    return (
        <>
        <div
            className="nav_menu"
        >
            <img src="/assets/nav.png" alt="" />
        </div>
        {/* nav container */}
        <div
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
        </div>
        </>
    )
}

export default Nav;