import CallToAction from '@/src/forms/call-to-action';
import React from 'react';
import { FaHotel,FaVoteYea } from 'react-icons/fa';
import { GrTechnology,GrShieldSecurity,GrDocumentConfig } from 'react-icons/gr';
import { AiOutlineSolution,AiOutlineSync,AiOutlineFileProtect } from 'react-icons/ai';
import { MdAnalytics,MdReviews } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { PiPresentationChartBold } from 'react-icons/pi';RiCustomerService2Line
import { MdHealthAndSafety,MdOutlineManageAccounts,MdOnlinePrediction,MdInventory2,MdOutlineWorkspaces } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri';
import { CiParking1 } from 'react-icons/ci';
import { BsFillPeopleFill,BsFingerprint,BsPersonVideo3 } from 'react-icons/bs';
import { BiLinkExternal,BiSolidCctv,BiNetworkChart } from 'react-icons/bi';
import { SiGooglemeet } from 'react-icons/si';




const service_details_content = {
    img: "/assets/img/services/service-details-bg.jpg",
    title: "Service Overview",
    info_1: <>Explore a comprehensive suite of business solutions tailored to streamline and enhance your operations. From ERPNext Integration for seamless business management to specialized tools like E-invoicing, Document Management, and Healthcare Information Systems, we offer a diverse range of services. Elevate your digital presence with our Digital Sphere Solutions, and ensure security and efficiency with our innovative hardware solutions, including biometric devices, access control accessories, AV systems, digital signage, gate barriers, CCTV, meeting room schedulers, and network connectivity solutions. Discover a one-stop destination for optimizing processes, improving customer experiences, and ensuring the success of your enterprise.</>,

over_veiw_list: [
    {id: 1,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <PiPresentationChartBold />,
     title: "ERPNext Integration Suite",
     info: "Streamline your business operations with the comprehensive ERPNext Integration Suite, offering modules for E-invoicing, Document Management, Hospital Information System, Asset Management, and more."},
    {id: 2,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <LiaFileInvoiceSolid />,
     title: "E-invoicing Excellence",
     info: "Streamline your business operations with the comprehensive ERPNext Integration Suite, offering modules for E-invoicing, Document Management, Hospital Information System, Asset Management, and more.",
    },
    {id: 3,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdAnalytics />,
     title: "Document Management",
    info: "Transform healthcare operations with HealthFlow Pro—an all-encompassing Hospital Information System designed for comprehensive patient care."},
    {id: 4,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <GrDocumentConfig />,
     title: "DocuHub Pro",
    info: "Manage your documents seamlessly with DocuHub Pro, an advanced Document Management system that enhances organization and accessibility."},
    {id: 5,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdHealthAndSafety />,
     title: "4.	HealthFlow Pro",
    info:"Transform healthcare operations with HealthFlow Pro—an all-encompassing Hospital Information System designed for comprehensive patient care."},
    {id: 7,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdOutlineManageAccounts />,
     title: "VisitShield ",
    info:"Enhance security and guest experience with VisitShield—an advanced Visitor Management System"},
    {id: 8,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdOnlinePrediction />,
     title: "Digital Sphere Solutions",
    info:"Boost your online presence with our Digital Sphere Solutions—offering Website Designing, Mobile App Development, and Digital Marketing services tailored to your needs."},
    {id: 9,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdInventory2 />,
     title: "InventoWave",
    info:"Manage your warehouse with precision using InventoWave—a Warehouse/Inventory Management system that ensures optimal stock control."},
    {id: 10,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <MdOutlineWorkspaces />,
     title: "FieldPro Connect",
    info:"Optimize your field operations with FieldPro Connect—a comprehensive Field Service Management solution."},
    {id: 11,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <RiCustomerService2Line />,
     title: "Veriloop CX Suite",
    info:"Elevate customer experience with Veriloop CX Suite—a CX solution designed to enhance customer satisfaction and loyalty."},
      {id: 12,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <CiParking1 />,
     title: "ParkEase Pro",
    info:"Streamline parking operations with ParkEase Pro—a Parking Management System designed for efficiency and user convenience."},
    {id: 13,
        img: "/assets/img/services/service-details-bg.jpg",
         icon: <BsFillPeopleFill />,
     title: "HR SyncMaster",
    info:"Simplify HR and Payroll processes with HR SyncMaster—an integrated HR & Payroll Solution."},

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

    bottom_info_title: "Why Choose Future Connect",
    bottom_info: <>In conclusion, our integrated suite of business solutions is designed to empower your organization across various domains. From ERP and financial management to healthcare, property, and field services, we provide tools for seamless operations. Elevate your online presence with our Digital Sphere Solutions and ensure robust security with our advanced hardware offerings. Experience efficiency, customer satisfaction, and operational excellence with our comprehensive range of services. Choose innovation, choose reliability—choose our solutions for a brighter and more streamlined future for your business.</>,

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
                                    <p>{overview}</p>
                                    <div className="row over-veiw-list counter-row">
                                    {over_veiw_list_two.map((item, i) => 
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