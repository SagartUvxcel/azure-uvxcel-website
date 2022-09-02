// Icons for current engagement section
import { AiFillDatabase } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import OurValues from "../images/company value vision mission/values.avif";
import OurVision from "../images/company value vision mission/vision.avif";
import OurMission from "../images/company value vision mission/mission.avif";
import CG from "../images/Team_member/Chanchalkumar Ghevade.png";
import AP from "../images/Team_member/aniket Patil.png";
import MK from "../images/Team_member/Monika korde.png";
import DL from "../images/Team_member/Dipak Lokhande.png";
import PK from "../images/Team_member/Priya Kadam.png";
import SS from "../images/Team_member/Sara Sheikh.png";
import AR from "../images/Team_member/Abdul rahim.png";
import SP from "../images/Team_member/Sumit_Patil.png";
import SC from "../images/Team_member/Sadhana Chaudhari.png";
import KP from "../images/Team_member/Kalyani Patil.png";
import MI from "../images/Team_member/Mohd Ibrahim.png";
import PO from "../images/Team_member/Priyanka Oge.png";
import PS from "../images/Team_member/Prashant Shitole.png";
import SY from "../images/Team_member/Sachin Yadav.png";
import SHP from "../images/Team_member/Shubham Parab.png";
import ST from "../images/Team_member/Sagar Tilekar.png";
import GT from "../images/Team_member/Gayatri Tajane.png";
import MD from "../images/Team_member/Mayuri Dudhe.png";
import PG from "../images/Team_member/Prapti Gomekar.png";
import RK from "../images/Team_member/Rasheed Kannan.png";


// Current engagement data
export const engagementData = [
  {
    id: "eng001",
    title: "CUSTOMER OUTREACH",
    icon: <FaHandshake size={45} />,
    desc: "Tracking webpages consumption and user behavior to improve the website for better outreach with new and existing customers. Provided managed services to deliver adhoc database development.",
  },
  {
    id: "eng002",
    title: "DATA SERVICES",
    icon: <AiFillDatabase size={45} />,
    desc: "Built team to perform ongoing standardized framework and configuration based ETL development using SQL Server Integration Services for 35+ clients to track telecom data into a centralized data repository.",
  },
  {
    id: "eng003",
    title: "BI & DW SOLUTIONS",
    icon: <RiFileExcel2Fill size={45} />,
    desc: "Designed hundreds of facts and dimensions including conformed dimensions and built ETL processes to load them from numerous data sources (files - csv, xml etc and Oracle, MySQL,for different source applications).",
  },
];

// Our team data
export const employees = [
  {
    id: "uv001",
    name: "Chanchalkumar Ghevade",
    photo: CG,
    designation: "Founder-Director",
  },
  { id: "uv002", name: "Rasheed Kannan", photo: RK, designation: "Director, Malaysia" },
  { id: "uv003", name: "Monika Korde", photo: MK, designation: "HR Partner" },
  { id: "uv004", name: "Aniket Patil", photo: AP, designation: "Software Engineer" },
  {
    id: "uv005", name: "Ankit Mishra", photo: "", designation: "Software Engineer"
  },
  {
    id: "uv006", name: "Dipak Lokhande", photo: DL, designation: "Junior Software Engineer",
  },
  {
    id: "uv007", name: "Sumit Patil", photo: SP, designation: "UI/UX Developer",
  },
  {
    id: "uv08", name: "Sadhana Chaudhari", photo: SC, designation: "SQL Developer",
  },
  { id: "uv009", name: "Priya Kadam", photo: PK, designation: "Software Engineer" },
  { id: "uv010", name: "Sara Shaikh", photo: SS, designation: "Junior Software Engineer" },
  {
    id: "uv011", name: "Abdul Rahim", photo: AR, designation: "Software Developer",
  },
  {
    id: "uv012", name: "Kalyani Patil", photo: KP, designation: "Junior Software Engineer",
  },
  { id: "uv013", name: "Sagar Tilekar", photo: ST, designation: "Junior Software Engineer" },
  {
    id: "uv014", name: "Mohammad Ibrahim", photo: MI, designation: "Junior Software Engineer",
  },
  { id: "uv0015", name: "Priyanka Oge", photo: PO, designation: "Junior Software Engineer" },
  { id: "uv016", name: "Sachin Yadav", photo: SY, designation: "Junior Software Engineer" },
  { id: "uv017", name: "Prashant Shitole", photo: PS, designation: "Junior Software Engineer" },
  { id: "uv018", name: "Shubham Parab", photo: SHP, designation: "Junior Software Engineer" },
  { id: "uv019", name: "Gayatri Tajane", photo: GT, designation: "Junior Software Engineer" },
  { id: "uv020", name: "Mayuri Dudhe", photo: MD, designation: "Junior Software Engineer" },
  { id: "uv021", name: "Prapti Gomekar", photo: PG, designation: "Junior Software Engineer" },

];

// Vision-mission data
export const visionMissionData = [
  {
    id: "vm001",
    img: OurMission,
    title: "Our Mission",
    desc: "We aim to emerge as the preferred technology partner for our clients, by powering them through innovative focused solutions for their real life problems.",
  },
  {
    id: "vm002",
    img: OurVision,
    title: "Our Vision",
    desc: " Know how to pursue pleasure rationally encounter consequences that are extremely painful nor again is there anyone or  pursues.",
  },
  {
    id: "vm003",
    img: OurValues,
    title: "Our Values",
    desc: "Know how to pursue pleasure rationally encounter consequences that are extremely painful nor again is there anyone or pursues.",
  },
];
