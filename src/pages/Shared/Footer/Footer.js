import React from 'react';
import './Footer.css'
import CallUsNow from './CallUsNow/CallUsNow';
import CreateStories from './CreateStories/CreateStories';
import Help from './Help/Help';
import LocateUs from './LocateUs/LocateUs';
import Services from './Services/Services';
import SocialMedia from './SocialMedia/SocialMedia';

const Footer = () => {
    return (
        <>
            <SocialMedia/>
            <CreateStories/>
            <div className="main-footer-container">
                  <Services/>
                  <LocateUs/>
                  <Help/>
                  <p className="text-white text-center pb-5">© 2023 Hyperlink InfoSystem | All Rights Reserved.</p>
            </div>

            {/* common area every page */}
            <CallUsNow/>
        </>
    );
};

export default Footer;