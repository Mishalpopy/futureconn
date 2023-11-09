import CallToAction from '@/src/forms/call-to-action';
import React from 'react';
import { FaHotel,FaVoteYea } from 'react-icons/fa';
import { GrTechnology,GrShieldSecurity,GrDocumentConfig } from 'react-icons/gr';
import { AiOutlineSolution,AiOutlineSync,AiOutlineFileProtect } from 'react-icons/ai';
import { MdAnalytics,MdReviews } from 'react-icons/md';
import { LiaPhotoVideoSolid } from 'react-icons/lia';
import { LuProjector } from 'react-icons/lu';
import { MdNetworkLocked,MdPower,MdBatteryAlert,MdInventory2,MdOutlineWorkspaces,MdComputer,MdVideoStable,MdOutlineSurroundSound } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri';
import { CiParking1 } from 'react-icons/ci';
import { BsFillDisplayFill,BsFingerprint,BsPersonVideo3,BsFillClockFill,BsFillShieldFill,BsFillLightbulbFill } from 'react-icons/bs';
import { BiLinkExternal,BiSolidMobileVibration,BiSolidCctv,BiNetworkChart } from 'react-icons/bi';
import { SiGooglemeet,SiOpenaccess,SiGotomeeting } from 'react-icons/si';

import { FaSatelliteDish } from 'react-icons/fa';
import { GiFilmProjector } from 'react-icons/gi';



const service_details_content = {
    img: "/assets/img/services/service-details-bg.jpg",
    title: "Service Overview",
    info_1: <>At Future Connect, we stand as a premier Audio Visual System integrator dedicated to revolutionizing communication experiences in KSA. Our expertise lies in supplying, installing, and supporting cutting-edge multimedia presentation technology, video and audio conferencing systems, and bespoke communication products tailored to meet the unique needs of our clients.</>,

over_veiw_list: [
    {id: 1,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <SiGotomeeting />,
     title: "Meeting Room AV Solutions",
     info: "Transform your meetings with our Meeting Room AV Solutions. We provide high-definition projection technology, ensuring crystal-clear visuals, and incorporate video conferencing and telepresence systems for seamless remote participation and distance learning experiences."},
    {id: 2,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <GiFilmProjector />,
     title: "Auditoriums and Theaters Solutions",
     info: "Enrich the audio-visual experience in auditoriums and theaters with our specialized solutions. From immersive projection technology to advanced audio systems, we tailor solutions that captivate and engage audiences.",
    },
    {id: 3,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <LuProjector />,
     title: "Conference Room AV Systems",
    info: "Empower your conference rooms with state-of-the-art AV systems. Future Connect delivers solutions that enhance collaboration, ensuring impactful presentations and efficient communication within conference settings."},
    {id: 4,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <LiaPhotoVideoSolid />,
     title: "Video Wall Display Solutions",
    info: "Make a statement with our Video Wall Display Solutions. We craft visually stunning displays that captivate attention and convey information effectively, whether it's for informational purposes or creating a dynamic visual experience."},
    {id: 5,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BsFillDisplayFill />,
     title: "Interactive Display Solutions",
    info:"Foster engagement with our Interactive Display Solutions. From interactive whiteboards to touchscreen displays, we provide innovative solutions that encourage participation and collaboration during presentations and meetings."},
   
],
over_veiw_list_two: [
    {id: 1,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BsFingerprint />,
     title: "BioSecure Access",
     info: "Ensure secure access with BioSecure Access—a range of advanced Biometric Devices."},
    {id: 2,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BiLinkExternal />,
     title: "AccessLink Accessories",
     info: "Enhance access control with AccessLink Accessories, providing additional features for comprehensive security.",
    },
    {id: 3,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BsPersonVideo3 />,
     title: "VisualHarmony AV Systems",
    info: "Elevate communication and collaboration with VisualHarmony AV Systems—offering top-notch Audio-Visual solutions."},
    {id: 4,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <AiOutlineSync />,
     title: "SignaSync Digital Solutions",
    info: "Captivate your audience with SignaSync Digital Solutions—providing Digital Signage, Video Wall, Interactive Screens, and Vertical Signage Kiosks for immersive experiences."},
    {id: 5,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <AiOutlineFileProtect />,
     title: "GateGuard Pro",
    info:"Ensure controlled access with GateGuard Pro—a range of Gate Barriers, Bollards, Speed Gates, and Turnstiles."},
    {id: 7,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BiSolidCctv />,
     title: "CCTV WatchGuard ",
    info:"Enhance security surveillance with CCTV WatchGuard—providing advanced CCTV solutions for comprehensive monitoring."},
    {id: 8,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <SiGooglemeet />,
     title: "MeetMinder Scheduler",
    info:"Optimize your meeting spaces with MeetMinder Scheduler—an intelligent Meeting Room Scheduler/Solution."},
    {id: 9,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BiNetworkChart />,
     title: "ConnectSwitch Solutions",
    info:"Ensure robust network connectivity with ConnectSwitch Solutions—offering high-quality Switches & Access Points for seamless communication."},

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

    bottom_info_title: "IT Infrastructure Solutions",
    bottom_info: <>IT infrastructure forms the backbone of modern enterprises, encompassing the hardware and software components essential for efficient IT environments. Whether deployed within a cloud computing system or within an organization's facilities, IT infrastructure components include servers, storage systems, networking equipment, and software applications.</>,

service: [
    { id: 1, icon: <GrTechnology />, title: "Digital Transformation" },
    { id: 2, icon: <GrShieldSecurity />, title: "IT & Low Current" },
    { id: 3, icon: <GrShieldSecurity />, title: "Safety & Security Systems" },
    { id: 4, icon: <FaHotel />, title: "Data Center & IT Infrastructure" },
    { id: 4, icon: <FaHotel />, title: "Network Security" },
    { id: 4, icon: <FaHotel />, title: "AUDIO VISUAL SYSTEMS" },

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