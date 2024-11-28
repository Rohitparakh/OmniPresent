import React from 'react';
import './WhyUsThird.css';
import imgFast from '../../assets/images/imgFast.png';
import { motion } from 'framer-motion';
import { slideUp, slideUpDelay } from '../../animations';

function WhyUsThird() {
    return (
        <div className="why-us-third">
            <motion.div variants={slideUp} initial="hidden" whileInView="visible" className="why-us-third-content">
                <div className="why-us-third-description">
                    <p>We’re everywhere your audience is. Our communities amplify your message, making sure you’re seen far and wide.</p>                
                </div>
               
            </motion.div>
<motion.div variants={slideUpDelay} initial="hidden" whileInView="visible" className='why-us-third-right'>
            <h1 className="why-us-third-title">
                    we are<br/> omnipresent <span className="fast-outlined"></span>
                </h1>
                {/* <img src={imgFast} className='fast'/> */}
     </motion.div>
        </div>
    );
}

export default WhyUsThird;
