import {
  FaReact,
  FaAngular,
  FaPython,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMicrosoftazure,
  SiCodeigniter,
  SiCsharp,
  SiMysql,
  SiFlutter,
  SiPhp,
  SiMicrosoftsharepoint,
  SiRedux,
  SiPowerbi,
} from "react-icons/si";

export const iconsData = [
  {
    name: "ReactJs",
    component: <FaReact color="#61dafb" />,
    desc:"React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps.",
  },
  {
    name: "Angular",
    component: <FaAngular color="red" />,
    desc:"Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications.",
  },
  {
    name: "NodeJs",
    component: <FaNodeJs color="green" />,
    desc:"Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
  },
  {
    name: "Python",
    component: <FaPython color="#ffdd4d" />,
    desc:"Python is used in data science and machine learning for data gathering and data munging. Python provides easy handling of data to perform data gathering, execute ETL operations, and generate graphs.",
  },
  {
    name: "Redux",
    component: <SiRedux />,
    desc:"Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments.",
  },
  {
    name: "Bootstrap",
    component: <FaBootstrap color="purple" />,
    desc:"A Powerfull and open-source CSS framework directed at responsive, mobile-first front-end web development. It's includes HTML and CSS-based design, typography, buttons, navigation, tables, modals, image carousels.",
  },
  {
    name: "Sharepoint",
    component: <SiMicrosoftsharepoint color="#006c71" />,
    desc:"Microsoft SharePoint is a web-based application used for document sharing, business intelligence, advanced search, content collaboration. It gives companies a way to automate business processes, track progress.",
  },
  {
    name: "Codeigniter",
    component: <SiCodeigniter color="orangered" />,
    desc: "CodeIgniter is open-source software used to develop the web framework that is to be put to use to create dynamic web pages and websites in the PHP language.",
  },
  {
    name: "Azure",
    component: <SiMicrosoftazure color="#0456a0" />,
    desc:"Microsoft Azure, often referred to as Azure is a cloud computing service operated by Microsoft for application management via Microsoft-managed data centers. It provides SaaS, PaaS and IaaS that can be used for services.",
  },
  {
    name: "C#",
    component: <SiCsharp color="#953dac" />,
    desc:"C# is often used to develop professional, dynamic websites on the . NET platform, or open-source software. It has added features to support new workloads and emerging software design practices",
  },
  {
    name: "Mysql",
    component: <SiMysql color="#3465a4" />,
    desc:"MySQL is a RDBMS based on SQL - Structured Query Language. It is used for data warehousing, e-commerce, and logging applications. It is most often associated with web applications and online publishing.",
  },
  {
    name: "Flutter",
    component: <SiFlutter />,
    desc:"Flutter is an open-source software development kit which enables smooth and easy cross-platform mobile app development. It works with existing code, is used by developers and organizations around the world.",
  },
  {
    name: "Php",
    component: <SiPhp color="#4e5c9b" />,
    desc:"PHP is a server side scripting language. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites. It is powerful enough to be at the core of the biggest blogging system on the web. ",
  },
  {
    name: "Power BI ",
    component: <SiPowerbi color="#e6b710" />,
    desc:"Power BI is an interactive data visualization tool by Microsoft that provides the capability to extract meaningful insight from raw data stored in a structured format. ",
  },
];
