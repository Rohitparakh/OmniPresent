import React from 'react';
import './LetsTalkFooter.css';
import lightningIcon from '../../assets/images/iconamoon_lightning-1-bold.png';
import telegramIcon from '../../assets/images/hugeicons_telegram.png';
import twitterIcon from '../../assets/images/hugeicons_twitter.png';
import instagramIcon from '../../assets/images/hugeicons_instagram.png';
// import lineImage from '../../assets/images/line-34.png';

function LetsTalkFooter() {
    return (
        <footer className="letsTalkFooter">
            {/* <img src={lineImage} alt="Line" className="lineImage" /> */}
            <div className="letsTalkFooterContent">
                <img src={lightningIcon} alt="Lightning Icon" className="lightningIcon" />
                <div className="socialIcons">
                    <img src={telegramIcon} alt="Telegram Icon" className="socialIcon" />
                    <div className="circleIcon">
                        <img src={twitterIcon} alt="Close Icon" className="icon" />
                    </div>
                    <div className="circleIcon">
                        <img src={instagramIcon} alt="Instagram Icon" className="icon" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default LetsTalkFooter;
