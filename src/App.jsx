import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Resume = () => {
  const mail_id = "shiva92637@gmail.com";
  const mob_no = 9263744404;
  const name = "Varun kumar";

  const skills = [
    "Frontend: React, Next.js, Tailwind CSS, HTML, SASS, Redux, Context API, shadcn/ui",
    "Backend: Node.js, Express, Mongoose, MongoDB",
    "Version Control: Github"
  ];

  const projects = {
    "Digital Marketing Website": "A website for digital marketing services.",
    "Smile": "A project aimed at spreading smiles.",
    "Anime": "A website dedicated to anime fans."
  };

  // Add project links
  projects["Digital Marketing Website"] = "https://digitaladsmedia.info";
  projects["Smile"] = "https://smile-tau.vercel.app/";
  projects["Anime"] = "https://anime-world-kappa.vercel.app/";

  const workExperience = [
    "Crafted dynamic websites for businesses in digital marketing, real estate, and restaurants, enhancing their online presence and customer engagement.",
    "Helped our clients to increase their revenue by 40% by our website services and received great feedback from them"
  ];

  const currentlyexploring = [
    "LLMs : trying and learning  to create apps powered by genAI APIs",
    "APIs : Familiar with OPEN AI APIs and its different models also exploring LLAMA models by meta"
  ];

  const long_term_goals = [
    "AI: Go deep into AI and explore the possibilities of AI in different domains"
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
      <p>Email: {mail_id}</p>
      <p>Phone: {mob_no}</p>

      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="mb-1">{skill}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      <ul>
        {Object.entries(projects).map(([project, description]) => (
          <li key={project} className="mb-1">
            <a href={description} className="text-blue-500 hover:underline">{project}</a> - {description}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
      <ul>
        {workExperience.map((experience, index) => (
          <li key={index} className="mb-1">{experience}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Currently Exploring</h2>
      <ul>
        {currentlyexploring.map((exploration, index) => (
          <li key={index} className="mb-1">{exploration}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Long Term Goals</h2>
      <ul>
        {long_term_goals.map((goal, index) => (
          <li key={index} className="mb-1">{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;

 
