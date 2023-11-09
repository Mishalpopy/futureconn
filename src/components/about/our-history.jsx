import Link from 'next/link';
import React from 'react';


const history_data = {
    history: "WHY US",
    title: "Why Choose Future Connect",
    description: <>Future Connect is your dedicated partner for seamless digital transformation. With a rich history of experience and a dynamic team of experts, we offer innovative solutions that empower your business to thrive in a rapidly evolving digital landscape. We prioritize innovation, ensuring you stay ahead in a fast-paced digital world. Our commitment to excellence guarantees the successful execution of your projects, tailored to your unique needs. We work in close partnership with renowned vendors and strategic allies, ensuring you have access to the latest technologies and unparalleled expertise. Choose Future Connect as your guide to a connected tomorrow.</>,

    yearly_info: [
        {
            id: 1, 
            year: "Our Vission",
            title: "Empowering Success Through Technology",
            info: <>Our vision is to shape a connected tomorrow where technology is an enabler, not a barrier. We aspire to lead businesses into a seamless digital future where they can thrive, adapt, and innovate. Our journey is about pioneering new paths to connectivity.</>,
        },
        {
            id: 1, 
            year: "Our Mission",
            title: "Noman Design Award 2010",
            info: <>Our mission is clear: to empower businesses with cutting-edge technology that fuels growth, enhances security, and connects them to their fullest potential. We believe that the future is about harnessing the power of innovation, and we are committed to leading the way.</>,
        },
        {
            id: 1, 
            year: "Expert Team",
            title: "Best Agency In World 2023",
            info: <>Our team of experts is committed to your success, guaranteeing that your needs are met with professionalism and proficiency.</>,
        },
    ]
}
const {history, title, description, yearly_info} = history_data

const OurHistory = () => {
    return (
        <>
            <div className="tp-history-area pb-85 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-5 col-lg-8 d-flex justify-items-center flex-col">
                        <div className="tp-about-wrapper about-page  ">
                            <div className="tp-section-box tp-section-box-2  p-relative">
                                <span className="tp-section-subtitle right d-inline-block">{history}</span>
                                <h2 className="tp-section-title mb-20">
                                    {title}
                                </h2>
                                <p>{description}</p>
                            </div>
                                <Link className="tp-btn mt-30" href="/contact">Learn More <i className="fal fa-long-arrow-right"></i></Link>
                        </div>
                        </div>
                        <div className="col-xxl-6 col-xl-7 col-lg-12">
                            {yearly_info.map((item, i)  => 
                                <div key={i} className="tp-ab-4-right d-flex align-items-center">
                                    <h4>{item.year}</h4>
                                    <div className="ab-4-content">
                                    
                                        <p>{item.info}</p>
                                    </div>
                                </div>                            
                            )}                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurHistory;