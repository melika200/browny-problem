import { Link } from 'react-scroll';
import './Navbar.css';



function Navbar(){

    

     return(
      
  <div className="navbar">
      <div className="nav-container container">
      <div className="brand">
      <p>BROWNY</p>
      </div>
        </div>
      <ul className="navbar-nav">
      <li className="nav-item">
      <Link    
      to="Education" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      >EDUCATION
      </Link>
      </li>
      <li className="nav-item">
            <Link 
               to="Skills" 
               spy={true} 
               smooth={true} 
               offset={50} 
               duration={500} 
            >SKILLS</Link>
      </li>
      <li className="nav-item">
            <Link
               to="About" 
               spy={true} 
               smooth={true} 
               offset={50} 
               duration={500} 
            >ABOUT</Link>
      </li>
      <li className="nav-item">
            <Link 
               to="Profile" 
               spy={true} 
               smooth={true} 
               offset={50} 
               duration={500} 
            >PROFILE</Link>
      </li>
      <li className="nav-item">
            <Link 
               to="Portfolio" 
               spy={true} 
               smooth={true} 
               offset={50} 
               duration={500} 
               >PORTFOLIO</Link>
      </li>
      <li className="nav-item">
            <Link
               to="Contact" 
               spy={true} 
               smooth={true} 
               offset={50} 
               duration={500} 
                >CONTACT</Link>
      </li>
</ul>
      </div>

  
     )
    

  
}
export default Navbar
