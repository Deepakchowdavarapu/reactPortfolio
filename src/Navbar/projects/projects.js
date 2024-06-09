import "./projects.css";
import Bookmyshow  from './bookmyshow.png'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
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
                    <FaCss3Alt size={48} color="#1572B6" />
                    <p>BookyourShow</p>
                    <a hover></a>
                </div>
                <div className="project-card">
                    <img src = {Bookmyshow} alt ="bookmyshow" className="photo"></img>
                    <FaCss3Alt size={48} color="#1572B6" />
                    <p>BookyourShow</p>
                    <a hover></a>
                </div>
                <div className="project-card">
                    <img src = {Bookmyshow} alt ="bookmyshow" className="photo"></img>
                    <FaCss3Alt size={48} color="#1572B6" />
                    <p>BookyourShow</p>
                    <a hover></a>
                </div>
                <div className="project-card">
                    <img src = {Bookmyshow} alt ="bookmyshow" className="photo"></img>
                    <FaCss3Alt size={48} color="#1572B6" />
                    <p>BookyourShow</p>
                    <a hover></a>
                </div>
            </div>
        </div>
    )
}

export default Project;