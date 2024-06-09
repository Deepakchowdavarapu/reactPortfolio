import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiCplusplus } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    return (
        <div id="Total">
            <h1>Skills</h1>
            <div id="icons">
                <div id="icon1">
                    <FaHtml5 size={48} color="#E34F26" />
                    <p>HTML</p>
                </div>
                <div id="icon2">
                <FaCss3Alt size={48} color="#1572B6" />
                <p>CSS</p>
                </div>
                <div id="icon3">
                    <FaJs size={48} color="#F7DF1E" />
                    <p>JavaScript</p>
                </div>
                <div id="icon4">
                    <FaReact size={48} color="#61DAFB" />
                    <p>React</p>
                </div>
                <div id="icon5">
                    <FaNodeJs size={48} color="#339933" />
                    <p>Node.js</p>
                </div>
                <div id="icon6">
                    <SiMongodb size={48} color="#47A248" />
                    <p>MongoDB</p>
                </div>
                <div id="icon7">
                    <SiCplusplus size={48} color="#00599C" />
                    <p>C++</p>
                </div>
                <div id="icon8">
                    <FaGitAlt size={48} color="#F05032" />
                    <p>Git</p>
                </div>
                <div id="icon9">
                    <FaGithub size={48} color="#181717" />
                    <p>GitHub</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
