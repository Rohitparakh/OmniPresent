import React from 'react';
import './ServiceCards.css';
import arrowLeft from '../../assets/images/arrow-left.png';

// ServiceCard component for each text block
function ServiceCard({ title, description }) {
    return (
        <div className="serviceCard">
            {title && (<h3 className="serviceCard-title"><span className='yellowBoxBullet'></span>{title}</h3>)}
            <p className="serviceCard-description">{description}</p>
        </div>
    );
}

function Arrow({imgSrc}){
    return(
        <div className="serviceCard">

        <img src={imgSrc}/>
        </div>
    )
}

// Main component for the service section
function ServiceCards() {
    const services = [
        { title: 'GTM Strategy and launch', description: "We’ll deliver an end-to-end Go-To-Market strategy that packs a punch and drives results."},
        { title: 'Web 2 to Web 3 \nTransition', description: "We’ll guide your brand into Web3 with a strategy that makes the transition smooth and opens doors."},
        { title: 'Growth Hacking', description: "Our Twitter growth hacks will boost your online presence, putting more eyes on your brand."},
        { title: 'Community Growth Marketing', description: "We’ll make sure your message gets heard, using our connections with over 400 Web3 communities."},
        { title: 'Discord Management', description: "Whether you need to grow your community or create a buzz, we’ll turn your Discord into a lively space."},
        { title: 'Content Strategy and \nManagement', description: "We’ll work with you to craft attention-grabbing stories that align with your audience and brand.'"},
        { title: 'Fundraising, Events and \nPR Support', description: "From token launches to fundraising, we’ll deliver the strategic PR, listings, and event support you need for success."},
        { title: 'Influencer Strategy and \nManagement', description: "We’ll launch a targeted influencer/KOL plan that boosts your reach and engagement."},
        { title: 'Need Something Else?', description: "Let’s connect and discuss a solution made for you."},
        // { title: 'Branding & Design', description: "Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations—every time." }
    ];

    return (
        <div className="serviceCards">
            {services.map((service, index) => (
                <React.Fragment key={index}>
                    <ServiceCard title={service.title} description={service.description} />
                    {index === 7 && (
                        <>
                        <Arrow imgSrc={arrowLeft}/>
                        <ServiceCard/>
                        </>
                    )}
                </React.Fragment>
            ))}
            {/* <img src="https://placeholder.pics/svg/417x195" alt="Arrow" className="serviceCards-arrow" /> */}
        </div>
    );
}

export default ServiceCards;
