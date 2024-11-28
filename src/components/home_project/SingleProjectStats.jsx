import React from 'react';
import './SingleProjectStats.css';
import closingBracket from '../../assets/images/closingBracket.png';
import { motion } from 'framer-motion';
import { slideRight, slideRightDelay1, slideRightDelay2, slideLeftDelay } from '../../animations';

function SingleProjectStats({tagList, title, description,stats}) {
    return (
        <div className="singleProjectStats">
           
            <div className="mainContent">
                <div className="leftSection">
                <motion.div variants={slideRight} initial="hidden" whileInView="visible" className="tagContainer">
                    {tagList.map(tag => {
                        return <div className="tag">{tag}</div>
                    })}
            </motion.div>
            <div>
                    <motion.h1 variants={slideRightDelay1} initial="hidden" whileInView="visible" className="mainTitle">{title}</motion.h1>
                    <motion.p variants={slideRightDelay2} initial="hidden" whileInView="visible" className="subtitle">■ {description}</motion.p>
                    </div>
                </div>
                <motion.div variants={slideLeftDelay} initial="hidden" whileInView="visible" className="rightSection !mt-10">
                    <div class="statisticContainer"style={{display:'flex', justifyContent:'space-between', gap:'70px'}}>
                        {stats.map(stat=>{
                            return(
                                <div className="statistic">
                                    <p className="statisticValue">{stat.number}</p>
                                    <p className="statisticLabel">{stat.text}</p>
                                </div>
                            )
                        })}                   
                    </div>
                    <div className="brace">
                        <img src={closingBracket}/>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default SingleProjectStats;
