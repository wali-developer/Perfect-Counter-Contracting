import useTranslation from "next-translate/useTranslation";

export const services = () => {
  const { t } = useTranslation("home");

  return [
    {
      id: 1,
      title: t("service3_title"),
      desc: t("service3_desc"),
      img: "/img/engineers.jpg",
    },
    {
      id: 2,
      title: t("service4_title"),
      desc: t("service4_desc"),
      img: "/img/ser2.jpg",
    },

    {
      id: 5,
      title: t("service2_title"),
      desc: t("service2_desc"),
      img: "/img/service2.png",
    },
    {
      id: 6,
      title: t("service1_title"),
      desc: t("service1_desc"),
      img: "/img/electronics-ser.jpg",
    },
  ];
};

// export const services = [
//     {
//         id: 1,
//         title: "Electronics equipments",
//         desc: "High-quality electronics equipments from Perfect Counter Contracting for a range of applications. Our products offer durability and reliability, making them ideal for use in a variety of industries.",
//         img: "/img/service1.png"
//     },
//     {
//         id: 2,
//         title: "CCTV Cameras",
//         desc: "CCTV products offer top-quality security for businesses. Features include HD cameras, remote viewing, and motion detection.",
//         img: "/img/service2.png"
//     },
//     {
//         id: 3,
//         title: "Steel",
//         desc: "We provide best quality steel. Use of steel is obvious in columns, window frames, and decorative features. The types of metals used include cast iron, steel, and aluminum etc.",
//         img: "/img/service3.jpg"
//     },
//     {
//         id: 2,
//         title: "Excavator",
//         desc: "We provide best of excavator for heavy excavation task. These machines are used mainly for digging purposes as well as various lifting and carrying tasks in various applications.",
//         img: '/img/excavator.jpg'
//     },
//     {
//         id: 3,
//         title: "Cement",
//         desc: "The applications of cement over various fields of construction have made it an unavoidable construction component. It presents great resistance to cracking and shrinkage.",
//         img: '/img/prod8.png'
//     },
// ]

export const products = [
  {
    id: "1",
    title: "Dumper",
    desc: "Dumpers are provide if  you need to transport gravel, dirt, sand, waste and other materials on construction and maintenance projects, there are loads of earthmoving equipment options",
    img: "/img/prod1.jpg",
  },
  {
    id: "2",
    title: "Steel",
    desc: "We provide best quality steel. Use of steel is obvious in columns, window frames, and decorative features. The types of metals used include cast iron, steel, and aluminum etc. Metals should therefore be retained and repaired, wherever this is possible.",
    img: "/img/prod7.jpg",
  },
  {
    id: "3",
    title: "Cement",
    desc: "The applications of cement over various fields of construction have made it an unavoidable construction component and important civil engineering material. It presents great resistance to cracking and shrinkage but, provides lesser resistance to chemical attacks.",
    img: "/img/prod8.png",
  },
  {
    id: "4",
    title: "Excavator",
    desc: "We provide Bulldozers which are used for shallow digging and ditching, short-range transportation of material, spreading soil dumped from trucks, rough grading, removing trees, stumps, and boulders; and cleaning and leveling around loading equipment.",
    img: "/img/excavator.jpg",
  },
  {
    id: "5",
    title: "Wheel tractor scraper",
    desc: "We also provide Wheel tractor scraper machine used to remove or move gravel, dust, coal, mud, and other unwanted material from the ground surface.",
    img: "/img/tractor.jpg",
  },
  {
    id: "6",
    title: "Gloves",
    desc: "Protective Gloves protect our hands from infection and contamination or any possible harm to our hands.",
    img: "/img/prod2.jpg",
  },
  {
    id: "7",
    title: "Safety glasses",
    desc: "Protective Glass Protect eyes from dust, chemical, and other harmful  radiations.",
    img: "/img/glasses.jpg",
  },
  {
    id: "8",
    title: "Safety Shoes",
    desc: "Foot Protection is essential for any work environment to protect foot from concrete, chemical, mud, or any possible danger etc. ",
    img: "/img/shows.jpg",
  },
  {
    id: "9",
    title: "Earplugs",
    desc: "Hearing Protection decrease the risk of hearing damage from excessive noise that exist in any working environment.",
    img: "/img/helmet.jpg",
  },
  {
    id: "10",
    title: "Hard hats",
    desc: "Construction Helmet Protect the head from injury due to falling materials.",
    img: "/img/helmet2.jpg",
  },
  {
    id: "12",
    title: "Coveralls, vests and full body suits",
    desc: "Protective clothes Protects the wearer from injury due to blunt impacts, electrical hazards, heat and chemicals.",
    img: "/img/safety_suit.jpg",
  },
  {
    id: "13",
    title: "CCTV camera",
    desc: "CCTV products offer top-quality security for businesses. Features include HD cameras, remote viewing, and motion detection.",
    img: "/img/prod5.png",
  },
  {
    id: "14",
    title: "radio",
    desc: "Stay connected with two-way radios from Perfect Counter Contracting. Our high-quality products offer long range, clear audio, and user-friendly controls. Contact us to learn more.",
    img: "/img/walki_talki.jpg",
  },
  {
    id: "15",
    title: "PCB circuit",
    desc: "High-quality PCB circuits from Perfect Counter Contracting for a range of applications. Our products offer durability and reliability, making them ideal for use in a variety of industries.",
    img: "/img/pcb-circuit.jpg",
  },
  {
    id: "16",
    title: "Mitsubishi drive",
    desc: "Superior performance with Mitsubishi drives from Perfect Counter Contracting. Our high-quality products offer control and energy efficiency for a range of applications. Contact us to get understand more about this.",
    img: "/img/mitsubishi.jpg",
  },
  {
    id: "17",
    title: "Siemens drive",
    desc: "Get the best in control and energy efficiency with Siemens drives from Perfect Counter Contracting. Our high-quality products are known for their advanced technology and reliability, and are suitable for use in a variety of applications.",
    img: "/img/siemens.jpg",
  },
  {
    id: "18",
    title: "temperature cards ",
    desc: "Ensure the right temperature for your business with temperature cards from Perfect Counter Contracting. Contact us to learn more and see how our cards can help you maintain comfort and safety for your employees and customers.",
    img: "/img/temprature-card.jpg",
  },
  {
    id: "19",
    title: "solar equipment",
    desc: "Sustainable solar energy solutions from Perfect Counter Contracting. Our high-quality products offer efficiency, durability, and a range of benefits. Contact us to learn more and see how our equipment can benefit your business",
    img: "/img/solar-equipment.jpg",
  },
  {
    id: "20",
    title: "medical equipment",
    desc: "To provide the client with high-quality labour force, tools, and trading resources wherever in the Kingdom of Saudi Arabia.By providing them with meaningful work, Our Services enable people to lead fuller lives and contribute to healthier communities and organisations..",
    img: "/img/medical.jpg",
  },
];


export const partners = [
  {
    id: 1,
    title: "Company 1",
    desc: "",
    img: "/img/icon1.png",
  },
  {
    id: 2,
    title: "Company 2",
    desc: "",
    img: "/img/icon2.svg",
  },
  {
    id: 3,
    title: "Company 3",
    desc: "",
    img: "/img/icon3.svg",
  },
  {
    id: 4,
    title: "Company 4",
    desc: "",
    img: "/img/icon3.svg",
  },
  {
    id: 5,
    title: "Company 5",
    desc: "",
    img: "/img/icon2.svg",
  },
  {
    id: 6,
    title: "Company 6",
    desc: "",
    img: "/img/icon1.png",
  },
];

export const customers = [
  {
    title: "SERAAT EL ENJAZ PRODUCTION",
    desc: "",
    img: "/img/clients/client13.jpeg",
  },
  {
    title: "Design Architectrue Workshop",
    desc: "",
    img: "/img/clients/client3.jpeg",
  },
  {
    title: "AlIMTIAZ",
    desc: "",
    img: "/img/clients/client11.jpeg",
  },
  {
    title: "Riyadh Metro",
    desc: "",
    img: "/img/clients/client2.jpeg",
  },
  {
    title: "Abeer",
    desc: "",
    img: "/img/clients/client8.jpeg",
  },
  {
    title: "XP",
    desc: "",
    img: "/img/clients/client1.jpeg",
  },
  {
    title: "Panda",
    desc: "",
    img: "/img/clients/client15.jpeg",
  },
  {
    title: "NESTO",
    desc: "",
    img: "/img/clients/client17.jpeg",
  },
  {
    title: "Othaim",
    desc: "",
    img: "/img/clients/client18.jpeg",
  },
  {
    title: "KHALDIA TOWERS CO.",
    desc: "",
    img: "/img/clients/client19.jpeg",
  },
  {
    title: "Soudi Authority for IC and TZ",
    desc: "",
    img: "/img/clients/client4.jpeg",
  },
  {
    title: "Khaldoon Furniture Factory",
    desc: "",
    img: "/img/clients/client5.jpeg",
  },
  {
    title: "NCB",
    desc: "",
    img: "/img/clients/client16.jpeg",
  },

  {
    title: "NWS",
    desc: "",
    img: "/img/clients/client6.jpeg",
  },
  {
    title: "The Red See",
    desc: "",
    img: "/img/clients/client7.jpeg",
  },
  {
    title: "Flamingo Beach",
    desc: "",
    img: "/img/clients/client9.jpeg",
  },
  {
    title: "KAFD",
    desc: "",
    img: "/img/clients/client10.jpeg",
  },
  {
    title: "Riyadh Art",
    desc: "",
    img: "/img/clients/client12.jpeg",
  },

  {
    title: "Jeddah Season",
    desc: "",
    img: "/img/clients/client14.jpeg",
  },

];
export const clientsLogos = [
  { img: "/img/clients/client13.jpeg" },
  { img: "/img/clients/client3.jpeg" },
  { img: "/img/clients/client11.jpeg" },
  { img: "/img/clients/client2.jpeg" },
  { img: "/img/clients/client8.jpeg" },
  { img: "/img/clients/client1.jpeg" },
  { img: "/img/clients/client15.jpeg" },
];

export const projects = () => {
  const { t } = useTranslation("home");
  return [
    {
      id: "1",
      title: t("project1_title"),
      desc: t("project1_desc"),
      desc1: t("project1_desc1"),
      img: "/img/project2.jpeg",
    },
    {
      id: "2",
      title: t("project2_title"),
      desc: t("project2_desc"),
      img: "/img/project4.jpeg",
    },
    {
      id: "3",
      title: t("project3_title"),
      desc: t("project3_desc"),
      desc1: t("project3_desc1"),
      img: "/img/project3.jpeg",
    },
    {
      id: "4",
      title: t("project4_title"),
      desc: t("project4_desc"),
      desc1: t("project4_desc1"),
      img: "/img/project1.jpeg",
    },
    {
      id: "5",
      title: t("project5_title"),
      desc: t("project5_desc"),
      desc1: t("project5_desc1"),
      img: "/img/project11.jpeg",
    },
    {
      id: "6",
      title: t("project6_title"),
      desc: t("project6_desc"),
      desc1: t("project6_desc1"),
      img: "/img/project7.jpeg",
    },
    {
      id: "7",
      title: t("project7_title"),
      desc: t("project7_desc"),
      desc1: t("project7_desc1"),
      img: "/img/electronic-project.jpeg",
    },
    {
      id: "8",
      title: t("project8_title"),
      desc: t("project8_desc"),
      desc1: t("project8_desc1"),
      img: "/img/electrical-project.png",
    },
    {
      id: "9",
      title: t("project9_title"),
      desc: t("project9_desc"),
      desc1: t("project9_desc1"),
      img: "/img/khaldon-project.png",
    },
  ];
}

export const constructionServices = () => {
  const { t } = useTranslation("services");
  return {
    title: t("construction_side"),
    desc: t("construction_para"),
    data: [
      {
        id: 1,
        title: "Provide skillful engineers and unskills workers",
        desc: "skillful engineers are responsible for designing and overseeing the building, planning or construction of various structures, such as roads, bridges, and buildings. Unskilled workers in construction responsible for performing physical tasks on construction sites",
        img: "/img/ser1.jpg",
      },
      {
        id: 2,
        title: "Provide machinery for construction",
        desc: "Our Machinery service for construction includes maintenance, repair, and upkeep of the various types of equipment and machinery used in the construction industry. It also include bulldozers, excavators, cranes, backhoes, and other heavy machinery.",
        img: "/img/ser2.jpg",
      },
      {
        id: 3,
        title: "Your another service",
        desc: "Lorem Ipsum is simply dummy text of the printing and an typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and an typesetting industry.",
        img: "/img/ser3.jpg",
      },
    ],
  };
};

export const safetyServices = () => {
  const { t } = useTranslation("services");
  return {
    title: t("safety_side"),
    desc: t("safety_para"),
    data: [
      {
        id: 1,
        title: "HSE consultancy",
        desc: "We provide best of excavator for heavy excavation task. These machines are used mainly for digging purposes as well as various lifting and carrying tasks in various applications ",
        img: "/img/ser1.jpg",
      },
      {
        id: 2,
        title: "All safety are provide for every side",
        desc: "Protective Gloves protect our hands from infection and contamination or any possible harm to our hands. To use gloves during work is the most important safety material in order to done work easily",
        img: "/img/ser2.jpg",
      },
      {
        id: 3,
        title: "Organize the Events industrial  all management",
        desc: "Protective Glass Protect eyes from dust, chemical, and other harmful radiations. Safety glasses requirements are every labour needs for personal protective equipment",
        img: "/img/ser3.jpg",
      },
    ],
  };
};

export const technicalServices = () => {
  const { t } = useTranslation("services");
  return {
    title: t("technical_side"),
    desc: t("technical_para1"),
    desc2: t("technical_para2"),
    data: [
      {
        id: 1,
        title: "Provide Engineers to Technician",
        desc: "The relationship between engineers and technicians involve collaboration and communication in order to successfully complete projects. Engineers provide direction and guidance to technicians, and technicians provide feedback and input to engineers.",
        img: "/img/ser1.jpg",
      },
      {
        id: 2,
        title: "Availability of electronic components",
        desc: "We provide different electronic components in the various systems and structures that we build or maintain. These components include things like sensors, controllers, and other types of electronic equipment.",
        img: "/img/ser2.jpg",
      },
      {
        id: 3,
        title: "Your another service",
        desc: "Lorem Ipsum is simply dummy text of the printing and an typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and an typesetting industry.",
        img: "/img/ser3.jpg",
      },
    ],
  };
};


export const specializations = () => {
  const { t } = useTranslation("home");
  return (
    [
      {
        title: t("workforce"),
        desc: t('workforce_para'),
        icon: "fa-solid fa-users",
      },
      {
        title: t("trading"),
        desc: t('trading'),
        icon: "fas fa-cogs",
      },
      {
        title: t("equipments"),
        desc: t('equipments'),
        icon: "fas fa-bus-alt",
      },
    ]
  )
} 
