const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    
  },

  {
    id: 3,
    mega_menu: true,
    has_dropdown: true,
    title: "Solutions",
    link: "/service",
    sub_menus: [
      { link: "/service-details", title: "Digital Transformation" }, 
      { link: "/itandlow", title: "IT & Low Current" },
      { link: "/safety", title: "Safety & Security Systems" }, 
      { link: "/datait", title: "Data Center & IT Infrastructure" },
      { link: "/network", title: "Network Security" },
      { link: "/av", title: "AUDIO VISUAL SYSTEMS" },



    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Hospitality Hub",
    link: "/",
    
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/",
    
  },


  
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
  
];
export default menu_data;
