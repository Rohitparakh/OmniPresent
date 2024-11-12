import React from 'react';
import './SingleProjectStats.css';
import closingBracket from '../../assets/images/closingBracket.png';

function SingleProjectStats() {
    return (
        <div className="singleProjectStats">
           
            <div className="mainContent">
                <div className="leftSection">
                <div className="tagContainer">
                <div className="tag">UX/UI design</div>
                <div className="tag">web development</div>
                <div className="tag">digital strategy</div>
                <div className="tag">digital marketing</div>
            </div>
            <div>
                    <h1 className="mainTitle">Meltwater</h1>
                    <p className="subtitle">■ Unlocking a Competitive Edge</p>
                    </div>
                </div>
                <div className="rightSection">
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', gap:'30px'}}>
                    <div className="statistic">
                        <p className="statisticValue">+32%</p>
                        <p className="statisticLabel">Trading Volume</p>
                    </div>
                    <div className="statistic">
                        <p className="statisticValue">+44%</p>
                        <p className="statisticLabel">Active Users</p>
                    </div>
                    </div>
                    <div className="brace">
                        <img src={closingBracket}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProjectStats;
