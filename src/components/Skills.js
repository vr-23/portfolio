import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faAngular, faNodeJs, faAws, faGit } from '@fortawesome/free-brands-svg-icons';
import { faServer, faProjectDiagram, faLayerGroup, faDatabase } from '@fortawesome/free-solid-svg-icons';
import './skills.css';

const skills = [
  { name: 'JavaScript ES6', icon: faJs, color: '#F7DF1E' },
  { name: 'TypeScript', icon: faJs, color: '#007ACC' },
  { name: 'React', icon: faReact, color: '#61DAFB' },
  { name: 'Angular', icon: faAngular, color: '#DD0031' },
  { name: 'Node.js', icon: faNodeJs, color: '#339933' },
  { name: 'Nest.js', icon: faNodeJs, color: '#E0234E' },
  { name: 'REST APIs', icon: faServer, color: '#00A8E8' },
  { name: 'Relational Databases', icon: faDatabase, color: '#4479A1' },
  { name: 'Multi-tier Architectures', icon: faLayerGroup, color: '#FFA500' },
  { name: 'Message-oriented Architectures', icon: faProjectDiagram, color: '#8A2BE2' },
  { name: 'Git', icon: faGit, color: '#F05032' },
  { name: 'AWS', icon: faAws, color: '#FF9900' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="text-6xl mb-4 icon-animate"
                style={{ color: skill.color }}
              >
                <FontAwesomeIcon icon={skill.icon} />
              </div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
