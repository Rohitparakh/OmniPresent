import React from 'react';
import './SingleProjectIntroduction.css';

function SingleProjectIntroduction({industry, deliverables, about}) {
    return (
        <div className="singleProjectIntroduction">
            <div>
            <div className="topSection">
                <div className="verticalFrame">
                    <h3 className="sectionTitle">Industry</h3>
                    <p className="sectionContent">{industry}</p>
                </div>
                <div className="verticalFrame">
                    <h3 className="sectionTitle">Deliverables</h3>
                    <p className="sectionContent">{deliverables}</p>
                </div>
            </div>
            <div className="middleSection">
                <p className="mainContent">
                    {about}
                </p>
            </div>
            </div>
            <div className="bottomSection">
                <div className="bigNumber">01</div>
                <h2 className="sectionTitleLarge">About</h2>
            </div>
        </div>
    );
}

export default SingleProjectIntroduction;
