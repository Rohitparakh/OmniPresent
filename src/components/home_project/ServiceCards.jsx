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
        { title: 'GTM Strategy and launch', description: 'Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations—every time.' },
        { title: 'Growth Strategy and hacking', description: 'Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations—every time.' },
        { title: 'KOL Management\nand hacking', description: 'Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations—every time.' },
        { title: 'Social Media content strategy and management', description: 'Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations—every time.' },
        { title: 'Collabs and alpha Calls', description: 'Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations—every time.' },
        { title: 'Partnerships', description: 'Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations—every time.' },
        { title: 'Merchandising', description: 'Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations—every time.' },
        { title: 'Fundraising', description: 'Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations—every time.' },
        { title: 'Advisory', description: 'Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations—every time.' },
        { title: 'Branding & Design', description: 'Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations—every time.' }
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
