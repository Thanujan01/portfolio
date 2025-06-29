// import images
import Hero_person from "./assets/images/Hero/person.png";

import iot from "./assets/images/Skills/iot.png";
import arduino from "./assets/images/Skills/arduino.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import pcb from "./assets/images/Skills/pcbdesign.png";
import python from "./assets/images/Skills/python.png";
import threeD from "./assets/images/Skills/3dmodel.png";
import c from "./assets/images/Skills/c.png";

import services_logo1 from "./assets/images/Services/iot.png";
import services_logo2 from "./assets/images/Services/embedded.png";
import services_logo3 from "./assets/images/Services/electronics.png";
import services_logo4 from "./assets/images/Services/robotics.png";
import services_logo5 from "./assets/images/Services/pcb.png";
import services_logo6 from "./assets/images/Services/3d.png";

import project1 from "./assets/images/projects/GPS_Blynk.jpg";
import project2 from "./assets/images/projects/Noma.png";
import project3 from "./assets/images/projects/AMP.jpg";
import project4 from "./assets/images/projects/Battel_robot.png";
import project5 from "./assets/images/projects/lora_based_smart_garden.png";
import project6 from "./assets/images/projects/smart_fan.png";
import project7 from "./assets/images/projects/smart_garden_blynk.png";
import project8 from "./assets/images/projects/VLC_2.jpg";
import project9 from "./assets/images/projects/basic_linefollowing_robot.png";
import project10 from "./assets/images/projects/gps.png";
import project11 from "./assets/images/projects/smart_fan_2.png";
import project12 from "./assets/images/projects/garden_protection_system.png";
import project13 from "./assets/images/projects/VLC.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/school_1.jpg";
import avatar2 from "./assets/images/Testimonials/school_1_2.jpg";
import avatar3 from "./assets/images/Testimonials/school_1_3.jpg";
import avatar4 from "./assets/images/Testimonials/school_2.jpg";
import avatar5 from "./assets/images/Testimonials/school_2_1.jpg";
import avatar6 from "./assets/images/Testimonials/school_2_2.jpg";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaFacebook, FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "IoT & Embedded System Developer",
    firstName: "THANU",
    LastName: "JAN",
    btnText: "Download My CV",
    image: Hero_person,
    hero_content: [
      {
        count: "5+",
        text: "Years of Experinse in IoT, Embedded System & Electronics field",
      },
      {
        count: "25+",
        text: "Significant Projects Worked in my career",
      },
    ],
  },
  skills: {
  title: "Skills",
  subtitle: "MY TECHNICAL EXPERTISE",
  skills_content: [
    {
      name: "IoT Development",
      logo: iot,
      para: "Building connected devices and smart systems",
      details: [
        "5+ years experience in IoT projects",
        "Expertise with ESP32, NodeMCU, and Raspberry Pi",
        "Implemented Blynk, Firebase, and AWS IoT integrations",
        "Developed many systems based IoT"
      ]
    },
    {
      name: "Embedded Systems",
      logo: arduino,
      para: "Microcontroller programming and system design",
      details: [
        "Proficient with Arduino, ESP32, and Raspberry Pi Pico",
        "Developed Real world problems solution using Embedded",
        "Experience with ATtiny , PIC16F877A and Seeeduino XIAO microcontrollers",
        "Built battle bots with nRF24L01 wireless control",
        "Created induction coupling data transfer systems"
        
      ]
    },
    {
      name: "PCB Design",
      logo: pcb,
      para: "Circuit design and fabrication",
      details: [
        "Learned in PCB Fabrication & Designing (LMES Academy)",
        "Proficient with EasyEDA and Proteus Pro",
        "Experience with multi-layer board design",
        "Designed circuits for custom embedded systems",
        "Knowledge of DFM and DFA principles"
      ]
    },
    {
      name: "3D Modeling",
      logo: threeD,
      para: "CAD design for mechanical components",
      details: [
        "Designed enclosures for electronics projects",
        "Proficient with Fusion 360 and TinkerCAD",
        "Created models for 3D printing",
        "Developed mechanical parts for robotics projects",
        "Experience with Blender for advanced modeling"
      ]
    },
    {
      name: "C/C++ Programming",
      logo: c,
      para: "Embedded systems development",
      details: [
        "5+ years of embedded C/C++ experience",
        "Developed firmware for microcontrollers",
        "Implemented RTOS in embedded projects",
        "Created low-power IoT applications",
        "Experience with peripheral interfacing (I2C, SPI, UART)"
      ]
    },
    {
      name: "Python",
      logo: python,
      para: "Scripting and automation",
      details: [
        "Certified in Python programming (LMES Academy)",
        "Developed MicroPython applications for Raspberry Pi Pico",
        "Created data analysis scripts",
        "Built automation tools for IoT systems",
        "Experience with REST API development"
      ]
    },
    {
      name: "Web Development",
      logo: reactjs,
      para: "IoT dashboards and web interfaces",
      details: [
        "Proficient in React.js for frontend development",
        "Built IoT control dashboards with Blynk",
        "Experience with HTML, CSS, and PHP",
        "Created responsive UI designs",
        "Integrated APIs for IoT applications"
      ]
    },
    {
      name: "Technical Repair",
      logo: ps,
      para: "Hardware troubleshooting and maintenance",
      details: [
        "3+ years professional repair experience",
        "Mobile and PC hardware troubleshooting",
        "Electronics device repair",
        "Component-level diagnosis",
        "Preventive maintenance expertise"
      ]
    }
  ],
  icon: MdArrowForward,
},
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "IoT Development",
        para: "I provide expert IoT solutions that connect devices, sensors, and systems for seamless automation and real-time data management. From home automation to industrial IoT, I deliver reliable services that optimize and enhance efficiency.",
        logo: services_logo1,
      },
      {
        title: "Embedded System",
        para: "I specialize in efficient embedded systems using microcontrollers like Arduino, ESP32, Raspberry Pi, and PIC, delivering optimized solutions for automation, control systems, and custom firmware.",
        logo: services_logo2,
      },
      {
        title: "Electronics Projects",
        para: "From concept to working prototype, I develop innovative electronics projects that solve real-world problems. I handle circuit design, soldering, testing, and troubleshooting to ensure fully functional and durable results.",
        logo: services_logo3,
      },   
      {
        title: "Custom PCB Design",
        para: "I provide expert Custom PCB design services focused on clean, compact, and high-performance layouts. Each design is customized to meet specific project requirements.",
        logo: services_logo5,
      },
      {
        title: "3D Modeling ",
        para: "I offer precision 3D modeling for custom enclosures and mechanical components, tailored to fit your electronic systems seamlessly. From functional prototypes to final product housings.",
        logo: services_logo6,
      },
      {
        title: "Robotics",
        para: "I create custom robotics solutions for various applications including competitions, automation, and education. My projects combine sensors, motors, and intelligent control to bring smart robotic systems to life.",
        logo: services_logo4,
      },
    ],
  },
  Projects: {
  title: "My Projects",
  subtitle: "Here are some of my major works",
  image: person_project,
  project_content: [
    {
      title: "IoT-Enabled GPS Tracking",
      image: project1,
      desc: "An IoT-based system that tracks real-time GPS location and sends data to the cloud for remote monitoring, ideal for vehicle and asset tracking.",
      link: "https://www.linkedin.com/in/thanujan01"
    },
    {
      title: "NOMA Based VLC",
      image: project2,
      desc: "A high-speed communication system using Visible Light Communication (VLC) integrated with Non-Orthogonal Multiple Access (NOMA) to support multiple users with efficient bandwidth and improved data rates.",
      link: "https://www.linkedin.com/in/thanujan01"
    },
    {
      title: "Common Emitter 200W Amplifier",
      image: project3,
      desc: "A high-gain audio amplifier circuit using a common emitter configuration, capable of delivering up to 200W output power for loudspeaker or audio system applications.",
      link: "https://www.linkedin.com/in/thanujan01"
    },
    {
      title: "Battle Bot",
      image: project4,
      desc: "A remote-controlled combat robot designed for competitive robot battles, equipped with armor, weapons, and high-torque motors for powerful movement and attack.",
      link: "https://www.linkedin.com/in/thanujan01"
    },
    {
      title: "LoRa-Based Smart Garden System",
      image: project5,
      desc: "An IoT system using LoRa for long-range, low-power communication to monitor soil moisture, temperature, and automate watering in remote garden areas.",
      link: "https://www.linkedin.com/in/thanujan01"
    },
    {
      title: "Smart Fan with IoT Monitoring",
      image: project6,
      desc: "An IoT-enabled fan system that allows remote speed control and status monitoring via Blynk",
      link: "https://www.linkedin.com/in/thanujan01"
    },
    {
      title: "Smart Gardening System with IoT",
      image: project7,
      desc: "An IoT-based solution for automating garden care, including real-time monitoring of soil, temperature, and humidity with automatic watering and cloud updates.",
      link: "https://www.linkedin.com/in/thanujan01"
    },
    {
      title: "Laser-Based VLC System",
      image: project8,
      desc: "A Visible Light Communication (VLC) system that uses laser light for high-speed, point-to-point data transmission in a secure and interference-free channel.",
      link: "https://www.linkedin.com/in/thanujan01"
    },
    {
      title: "Basic Line Following Robot",
      image: project9,
      desc: "A simple autonomous robot that uses infrared sensors to detect and follow a line path for navigation in robotics applications.",
      link: "https://www.linkedin.com/in/thanujan01"
    },
    {
      title: "GPS Tracker",
      image: project10,
      desc: "A device that uses GPS technology to determine and transmit real-time location data for tracking vehicles.",
      link: "https://www.linkedin.com/in/thanujan01"
    },
    {
      title: "Smart Fan Fixing Common Fan Issues",
      image: project11,
      desc: "smart fan designed to solve common problems like inefficient turn speed control, uncontrolled turn degree, improving user comfort.",
      link: "https://www.linkedin.com/in/thanujan01"
    },
    {
      title: "Visible Light Communication",
      image: project13,
      desc: "A wireless communication technology that uses visible light waves to transmit data at high speeds with enhanced security and minimal interference.",
      link: "https://www.linkedin.com/in/thanujan01"
    },
    {
      title: "IoT-Based Garden Protection System",
      image: project12,
      desc: "An IoT system that monitors garden conditions and detects threats like pests or intruders, sending alerts and activating protective measures remotely.",
      link: "https://www.linkedin.com/in/thanujan01"
    }
    
  ]
},
Testimonials: {
  title: "My Workshop's",
  subtitle: "Here is Workshops I Have Conducted",
  testimonials_content: [
    {
      description:
        "I conducted an Arduino and IoT workshop at Jaffna College, focusing on providing students with basic knowledge of Arduino programming and Internet of Things (IoT) concepts. The session included hands-on activities, real-world project examples, and interactive learning to help participants build a simple Project.",
      images: [avatar1, avatar2, avatar3],
      readMoreLink: "https://yourwebsite.com/work1",
    },
    {
      description:
        "I conducted an Arduino and IoT workshop at Saraswathi Maha Vidyalayam, where students were introduced to the fundamentals of Arduino programming and IoT. The workshop included practical sessions and simple IoT applications to help students gain experience and spark interest in electronics and IoT.",
      images: [avatar4, avatar5,avatar6],
      readMoreLink: "https://yourwebsite.com/work2",
    },
    
    // Add more...
  ],
},

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I specialize in IoT, embedded systems, electronics projects, and web development. With a strong background in hardware and software integration, I turn ideas into smart, real-world solutions. I’m ready to take on your next tech challenge. Let’s work together to create something innovative and impactful!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "Thanujan052@gmail.com",
        icon: GrMail,
        link: "mailto:thanujan052@gmail.com",
      },
      {
        text: "+94 769823735",
        icon: MdCall,
        link: "https://wa.me/+94769823735",
      },
      {
        text: "Linkdin",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/thanujan01/",
      },
      {
        text: "Facebook",
        icon: FaFacebookSquare,
        link: "https://www.facebook.com/thanujan.thanu.98892615?",
      },
      {
        text: "Github",
        icon: FaGithubSquare,
        link: "https://github.com/thanujan01",
      }
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
