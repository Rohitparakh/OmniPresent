import React from 'react';
import './SingleProjectIntroduction.css';

function SingleProjectIntroduction() {
    return (
        <div className="singleProjectIntroduction">
            <div>
            <div className="topSection">
                <div className="verticalFrame">
                    <h3 className="sectionTitle">Industry</h3>
                    <p className="sectionContent">Retail banking, Finance</p>
                </div>
                <div className="verticalFrame">
                    <h3 className="sectionTitle">Deliverables</h3>
                    <p className="sectionContent">Web design, creative strategy, web development</p>
                </div>
            </div>
            <div className="middleSection">
                <p className="mainContent">
                    Meltwater offers a suite of media, social, and customer intelligence solutions to global brands that are making an impact. They approached us for a website redesign that would improve their user experience, and reinvigorate their product solutions to achieve a higher performance and conversion volume.
                </p>
            </div>
            </div>
            <div className="bottomSection">
                <div className="bigNumber">01</div>
                <h2 className="sectionTitleLarge">Introduction</h2>
            </div>
        </div>
    );
}

export default SingleProjectIntroduction;
