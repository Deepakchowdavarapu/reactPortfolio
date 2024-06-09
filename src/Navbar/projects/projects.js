import "./projects.css";
import Bookmyshow  from './bookmyshow.png'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { GiSpring } from "react-icons/gi";
import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import webscraper from './webscraper.png';
import youtube from './youtubeextension.jpeg'
import { DiJsBadge } from "react-icons/di";
const Project = () => {

        const handleRedirect = () => {
            window.location.href = 'https://github.com/Deepakchowdavarapu/productservice';
        };

    return (
        <div id ="total">
            <h1>Projects</h1>
            <div id = "projects">
            <div className="project-card" onClick={handleRedirect} style={{ cursor: 'pointer' }}>
                    <img src = {Bookmyshow} alt ="bookmyshow" className="photo"></img>
                    <GiSpring size={48} color="#333" />
                    <p>BookyourShow-Backend</p>
                    <a hover></a>
                </div>
                <div className="project-card">
                    <img src = "https://marketplace.canva.com/EAFswsvyoPw/1/0/1131w/canva-pastel-colors-modern-minimal-portfolio-cover-page-a4-document-Ina0HeyTFUk.jpg" alt ="bookmyshow" className="photo"></img>
                    <RiReactjsLine  size={48} color="#333" />
                    <p>Portfolio-React</p>
                    <a hover></a>
                </div>
                <div className="project-card">
                    <img src = {webscraper}  alt ="webscrapper" className="photo"></img>
                    < FaPython size={48} color="#333" />
                    <p>webscrapper-Python</p>
                    <a hover></a>
                </div>
                <div className="project-card">
                    <img src = {youtube} alt ="bookmyshow" className="photo"></img>
                    <DiJsBadge size={48} color="#333" />
                    <p>Extension'YT</p>
                    <a hover></a>
                </div>
            </div>
        </div>
    )
}

export default Project;