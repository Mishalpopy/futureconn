import CallToAction from '@/src/forms/call-to-action';
import React from 'react';
import { FaHotel,FaVoteYea,FaAccessibleIcon } from 'react-icons/fa';
import { GrTechnology,GrShieldSecurity,GrDocumentConfig } from 'react-icons/gr';
import { AiOutlineSolution,AiOutlineSync,AiOutlineFileProtect } from 'react-icons/ai';
import { MdAnalytics,MdReviews } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { PiPresentationChartBold } from 'react-icons/pi';RiCustomerService2Line
import { MdHealthAndSafety,MdOutlineAccessibility,MdOutlineAlarmAdd,MdOutlineManageAccounts,MdFireplace,MdOutlineAccessibilityNew,MdOnlinePrediction,MdInventory2,MdOutlineWorkspaces } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri';
import { CiParking1 } from 'react-icons/ci';
import { BsFillPeopleFill,BsFingerprint,BsPersonVideo3,BsWatch } from 'react-icons/bs';
import { BiLinkExternal,BiSolidCctv,BiNetworkChart } from 'react-icons/bi';
import { SiGooglemeet,SiFireflyiii,SiFsecure } from 'react-icons/si';
import { GiCctvCamera,GiSecurityGate,GiRoad,GiTyre,GiStarGate } from 'react-icons/gi';
import { ImRoad } from 'react-icons/im';





const service_details_content = {
    img: "/assets/img/services/service-details-bg.jpg",
    title: "Service Overview",
    info_1: <>Safeguarding a company's assets, encompassing both property and personnel, is paramount for sustained success. Relying on experts with the knowledge and experience to implement effective security and safety measures is crucial. Through collaboration with reputable suppliers and experienced staff, companies can fortify their assets with confidence.</>,

over_veiw_list: [
    {id: 1,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <GiCctvCamera />,
     title: "WatchGuard CCTV Systems",
     info: "Ensure 24/7 surveillance with WatchGuard CCTV Systems—advanced solutions offering real-time monitoring and recording capabilities."},
    {id: 2,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdOutlineAccessibilityNew />,
     title: "Access Sentinel Control Systems",
     info: "Fortify entry points with Access Sentinel Control Systems—state-of-the-art solutions providing secure and efficient access management.",
    },
    {id: 3,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdFireplace />,
     title: "FireGuard Alarm & Detection Systems",
    info: "Prioritize safety with FireGuard Alarm & Detection Systems—comprehensive solutions designed to swiftly detect and alert in case of fire emergencies."},
    {id: 4,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <SiFireflyiii />,
     title: "FireShield Suppression Systems",
    info: "Combat fire effectively with FireShield Suppression Systems—utilizing cutting-edge technologies such as NOVEC, FM200, CO² for rapid fire suppression."},
    {id: 5,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdOutlineAlarmAdd />,
     title: "IntrusionShield Alarm Systems",
    info:"Enhance security with IntrusionShield Alarm Systems—advanced solutions that promptly detect and alert against unauthorized access."},
    {id: 7,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BsWatch />,
     title: "VESDA AirWatch",
    info:"chieve very early smoke detection with VESDA AirWatch—a state-of-the-art aspiration system providing enhanced safety against fire threats."},
    {id: 8,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdOnlinePrediction />,
     title: "AudioAlert Public Address Systems",
    info:"Ensure clear communication with AudioAlert Public Address Systems—an integral part of emergency communication systems."},
    {id: 9,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <ImRoad />,
     title: "RoadFortress Blockers",
    info:"Enhance physical security with RoadFortress Blockers—roadway barriers designed to control and prevent unauthorized vehicle access."},
    {id: 10,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdOutlineAccessibility />,
     title: "BollardDefender Systems",
    info:"Bolster perimeter security with BollardDefender Systems—deploying sturdy and effective bollards for controlled access."},
    {id: 11,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <GiSecurityGate />,
     title: "GateGuard Barriers",
    info:"Control entry points with GateGuard Barriers—strategically designed barriers for enhanced access management."},
      {id: 12,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <GiRoad />,
     title: "TurnstileGuard Systems",
    info:"Implement TurnstileGuard Systems for controlled pedestrian access—designed for efficiency and security."},
    {id: 13,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <GiTyre />,
     title: "SpikeDefender Tire Killers ",
    info:"Bolster perimeter security with SpikeDefender Tire Killers—deploying tire-puncturing systems to deter unauthorized vehicle access."},
    {id: 13,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <GiStarGate />,
     title: "GateMaster Gates & Operators ",
    info:"Ensure secure entry with GateMaster Gates & Operators—integrated solutions designed for reliability and controlled access."},
    {id: 13,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <FaAccessibleIcon />,
     title: "FenceFortress Systems",
    info:"Establish secure perimeters with FenceFortress Systems—comprehensive fencing solutions for enhanced physical security."},
    {id: 13,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <SiFsecure />,
     title: "ArmoredHaven Guard Houses",
    info:"Fortify entrances with ArmoredHaven Guard Houses—specially designed armored structures for manned security presence."},

],

    
    overview: <>Ensure secure access, enhance control, and elevate communication with our range of hardware solutions, including BioSecure Access, AccessLink Accessories, VisualHarmony AV Systems, SignaSync Digital Solutions, GateGuard Pro, CCTV WatchGuard, MeetMinder Scheduler, and ConnectSwitch Solutions.</>,

    overview_features: [
        {
            id: 1, 
            features: [
                "Enhanced Online Visibility: Stand out in the digital crowd with a strong online presence.",
                "Targeted Advertising: Reach the right audience with precision and efficiency.",
                "Boost brand recognition and customer engagement.",

            ],
        },
        {
            id: 2, 
            features: [
                "Improved User Experience: Create a user-friendly online environment that ensures customer satisfaction.", 
                "Data-Driven Strategies: Benefit from data-backed strategies that provide measurable results.", 
            ],
        },
    ],

    bottom_info_title: "Why Choose Future Connect",
    bottom_info: <>In conclusion, our comprehensive security solutions are tailored to ensure the protection of a company's invaluable assets, encompassing both property and personnel. Collaborating with seasoned experts and leveraging cutting-edge technologies, we offer a robust lineup of security measures. From WatchGuard CCTV Systems providing round-the-clock surveillance to Access Sentinel Control Systems fortifying entry points, and FireGuard Alarm & Detection Systems prioritizing safety, each solution is meticulously designed for effectiveness. The deployment of advanced technologies such as NOVEC, FM200, CO² in FireShield Suppression Systems and the prompt detection capabilities of IntrusionShield Alarm Systems further enhance security. VESDA AirWatch ensures very early smoke detection, while AudioAlert Public Address Systems enable clear communication in emergencies. Our physical security measures, including RoadFortress Blockers, BollardDefender Systems, GateGuard Barriers, TurnstileGuard Systems, SpikeDefender Tire Killers, GateMaster Gates & Operators, FenceFortress Systems, ArmoredHaven Guard Houses, and SecuScan Walkthrough & Metal Detectors, collectively establish a comprehensive defense against unauthorized access. The AlertGuard Fire Alarm System ensures a timely response to fire emergencies. Through this holistic approach, we empower companies to fortify their assets with confidence and resilience.</>,

service: [
    { id: 1, icon: <GrTechnology />, title: "Digital Solutions" },
    { id: 2, icon: <GrShieldSecurity />, title: "Security Solutions" },
    { id: 3, icon: <AiOutlineSolution />, title: "Operations Solutions" },
    { id: 4, icon: <FaHotel />, title: "Hospitality Solutions" },
],


    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Company Profile"},
        {id: 2, icon: "fas fa-file-image", title: "Service Details"},
        
    ]


}
const {img , title, info_1, info_2, over_veiw_list, overview, overview_features, bottom_info_title, bottom_info, service , materials,over_veiw_list_two}  = service_details_content


const ServiceDetailsArea = () => {
    return (
        <>
            <div className="tp-service-details-area pt-115 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                        <div className="tp-service-overveiw-area mr-20">
                            <img className="w-100" src={img} alt="theme-pure" />
                            <div className="tp-overview-details">
                                <h2 className="overview-title">{title}</h2>
                                <p>{info_1}</p>
                                    <p>{info_2}</p>
                                <div className="row over-veiw-list counter-row">
                                    {over_veiw_list.map((item, i) => 
                                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="tp-over-view-item mb-30">
                                            {/* <img className="w-10" src={img} alt="theme-pure" /> */}
                                                {React.cloneElement(item.icon, { className: 'icon-serverlist', size: '50px', color: '#2a8e5c' })}
                                                <h5>{item.title}</h5>
                                                <p>{item.info}</p>
                                            </div>
                                        </div>                                    
                                    )} 
                                </div>
                                <div className="tp-overview-fea-list">
                                    
                            

                                    <div className="tp-bottom-info pt-20">
                                        <h4>{bottom_info_title}</h4>
                                        <p>{bottom_info}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-3">
                        <div className="tp-sidebar-widget">
                            <h4 className="tp-widget-title">Our Services</h4>
                            <div className="tp-widget-item">
                                <ul>
                                    {service.map((item, i) => 
                                        <li key={i}>
                                            <a href="#"><span>
                    {React.cloneElement(item.icon, { className: 'icon-colored' })} {item.title}
                </span></a>
                                        </li>                                    
                                    )} 
                                </ul>
                            </div>
                        </div>
                        <div className="tp-sidebar-widget pt-50">
                            <h4 className="tp-widget-title">Call To Action</h4>
                            <div className="widget-form grey-bg">
                                <CallToAction /> 
                            </div>
                        </div>
                        <div className="tp-sidebar-widget pt-50">
                            <h4 className="tp-widget-title">Our Materials</h4>
                            <div className="tp-widget-item-2">
                                <ul>
                                    {materials.map((item , i) => 
                                        <li key={i}>
                                            <a href="#"><span><i className={item.icon}></i>{item.title}</span></a>
                                        </li>
                                    )} 
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsArea;