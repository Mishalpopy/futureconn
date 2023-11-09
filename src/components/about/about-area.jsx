import Link from 'next/link';
import React from 'react';


const about_content = {
    img: "/assets/img/about/ab-hm-4.jpg",
    title: <>Experience <br /> In Industry</>,
    year_count: "6",
    year: "Years",
    about: "About Us",
    about_title: " Who We Are",
    post_img: "/assets/img/about/ab-sm-4-4.jpg",
    post : <>At Future Connect, we're more than a technology solutions provider; we're architects of the future. Our mission is to empower businesses and organizations with cutting-edge technology that fuels growth, enhances security, and connects them to their fullest potential. We envision leading businesses into a seamless digital future where they can thrive, adapt, and innovate. Passionate about innovation and committed to excellence, we consistently deliver on our promises. With a team of experts and strategic partnerships with industry leaders, we bring the expertise and vision to shape your digital tomorrow. Connect with Future Connect and embark on a journey to a connected future, together.
    </>,
    author: <><b>Alonso D. Dowson</b> <i>-Head Of Idea</i></>,
    fetoure_1: "New Business Ideas create",
    fetoure_2: "Grow corporate financial system",


}  
const {img, title, year_count, year, about, about_title, post_img, post, author, fetoure_1, fetoure_2}  = about_content


const AboutArea = () => {
    return (
        <>
           <div className="tp-about-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                        <div className="ab-wrapper-4 p-relative">
                            <div className="ab-right-img">
                                <img src={img} alt="theme-pure" />
                            </div>
                         
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                        <div className="tp-about-info-wrapper pl-0">
                            <div className="tp-section-box tp-section-box-2  p-relative">
                                <span className="tp-section-subtitle right d-inline-block">{about}</span>
                                <h2 className="tp-section-title mb-15">
                                   {about_title}
                                </h2>
                            </div>
                            <hr className="mt-25 mb-30" />
                            <div className="tp-ab-meta">
                                <div className="about-meta-img d-flex">
                                   
                                    <div className="tp-ab-meta-text pl-0">
                                    <p>{post}</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-30 mb-25" />
     
                            <Link className="tp-btn-border" href="/contact">Get Started Now</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default AboutArea;