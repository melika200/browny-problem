import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/Navbar';
import Designer from './Components/Designer/Designer';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Skill from './Components/Skill/Skill';
import Profile from './Components/Profile/Profile';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Navbar />
<Designer />
<About />
<Education />
<Skill />
<Profile />
<Portfolio />
<Contact />
</>
);
