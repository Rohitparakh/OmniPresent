import React from 'react';
import Marquee from "react-fast-marquee";
import longArrow from '../../assets/images/longArrow.png';
import finger from '../../assets/images/fingerHorizontal.png';
import logo from '../../assets/images/heroFooterLogo.png';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
            <Marquee speed={150}>
                <div className='d-flex jcc aic'>
            <p className='d-flex jcc aic px-15'>
            community centred <img className='px-15' src={finger} /> marketing 
            </p>
            <img src={longArrow} className='d-flex jcc aic px-15'/>
            <p className='d-flex jcc aic'>
                 partnered with 
                <img src={logo} alt="icon" className="icon" />
                 developed for 
                ( web3 )
                 for the GROWTH/
                </p>
                <img src={longArrow} className='d-flex jcc aic px-15'/>
            
                </div>
                
                
                <div className='d-flex jcc aic'>
            <p className='d-flex jcc aic px-15'>
            community centred <img className='px-15' src={finger} /> marketing 
            </p>
            <img src={longArrow} className='d-flex jcc aic px-15'/>
            <p className='d-flex jcc aic'>
                 partnered with 
                <img src={logo} alt="icon" className="icon" />
                 developed for 
                ( web3 )
                 for the GROWTH/
                </p>
                <img src={longArrow} className='d-flex jcc aic px-15'/>
            
                </div>
  </Marquee>
            
            </div>
        </footer>
    );
}

export default Footer;
