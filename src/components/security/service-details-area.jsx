import CallToAction from '@/src/forms/call-to-action';
import React from 'react';
import { FaHotel,FaVoteYea,FaNetworkWired } from 'react-icons/fa';
import { GrTechnology,GrShieldSecurity,GrDocumentConfig } from 'react-icons/gr';
import { AiOutlineSolution,AiOutlineSync,AiOutlineFileProtect } from 'react-icons/ai';
import { MdAnalytics,MdReviews } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { PiPresentationChartBold } from 'react-icons/pi';RiCustomerService2Line
import { MdSecurity,MdOutlineNetworkPing,MdOutlineAlarmAdd,MdOutlineManageAccounts,MdFireplace,MdOutlineAccessibilityNew,MdOnlinePrediction,MdInventory2,MdOutlineWorkspaces } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri';
import { CiParking1 } from 'react-icons/ci';
import { BsFillPeopleFill,BsFingerprint,BsFillHddNetworkFill,BsWatch } from 'react-icons/bs';
import { BiLinkExternal,BiSolidCctv,BiNetworkChart } from 'react-icons/bi';
import { SiGooglemeet,SiFireflyiii,SiFirewalla } from 'react-icons/si';
import { GiCctvCamera,GiSecurityGate,GiRoad,GiTyre,GiStarGate } from 'react-icons/gi';
import { ImRoad } from 'react-icons/im';
import { CgWebsite } from 'react-icons/cg';






const service_details_content = {
    img: "/assets/img/services/service-details-bg.jpg",
    title: "Service Overview",
    info_1: <>In an era where digital threats are ever-present, fortify your network with a comprehensive suite of security solutions. Safeguard your digital assets and ensure uninterrupted connectivity with cutting-edge technologies tailored for robust protection.</>,

over_veiw_list: [
    {id: 1,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <SiFirewalla />,
     title: "FirewallGuard Network Security",
     info: "Implement robust network security with FirewallGuard—an advanced firewall solution. Our expertise spans platform-to-platform migrations, with proficiency in PaloAlto, Check Point, and Fortinet, ensuring seamless and secure transitions."},
    {id: 2,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <CgWebsite />,
     title: "WebShield Secure Gateway",
     info: "Ensure secure internet usage with WebShield Secure Gateway. This solution provides a protective barrier against online threats, ensuring safe browsing experiences for users while safeguarding sensitive data.",
    },
    {id: 3,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdSecurity />,
     title: "DDoS Defend Protection Services",
    info: "Fortify your network against DDoS attacks with DDoS Defend Protection Services. Mitigate the impact of distributed denial-of-service attacks, ensuring uninterrupted access to your digital assets."},
    {id: 4,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BsFillHddNetworkFill />,
     title: "LoadMaster Balancer Services",
    info: "Optimize your network performance with LoadMaster Balancer Services. Achieve efficient distribution of network traffic, enhancing reliability and scalability for seamless user experiences."},
    {id: 5,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdOutlineNetworkPing />,
     title: "SecureLink Private Access",
    info:"Elevate network security with SecureLink Private Access. This solution ensures a secure and private connection for users, minimizing vulnerabilities and providing controlled access to critical resources."},
    {id: 7,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BiNetworkChart />,
     title: "AccessSentry Network Control",
    info:"Regulate network access effectively with AccessSentry Network Control. This Network Access Control solution enhances security by managing and monitoring user access, preventing unauthorized entry."},
    {id: 8,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <FaNetworkWired />,
     title: "IntrusionShield Prevention Services",
    info:"Bolster network defense with IntrusionShield Prevention Services. This solution employs advanced techniques to detect and prevent unauthorized access, ensuring proactive security against potential threats."},

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
    bottom_info: <>In conclusion, navigate the complexities of the digital landscape confidently with our Holistic Network Security Solutions—a comprehensive suite designed to fortify your network against ever-evolving threats. From the implementation of robust FirewallGuard Network Security for seamless platform-to-platform migrations to the WebShield Secure Gateway ensuring secure internet usage and protection against online threats, our solutions are tailored for robust defense. Mitigate the impact of DDoS attacks with our Defend Protection Services, optimize network performance with LoadMaster Balancer Services, and elevate security with SecureLink Private Access. AccessSentry Network Control regulates network access effectively, and IntrusionShield Prevention Services employ advanced techniques for proactive defense against unauthorized access. Embrace cutting-edge technologies tailored to safeguard your digital assets and ensure uninterrupted connectivity in this era of persistent digital threats.</>,

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