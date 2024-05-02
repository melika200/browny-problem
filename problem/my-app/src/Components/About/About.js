import './About.css';
import { BsInstagram } from "react-icons/bs";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { LuTwitter } from "react-icons/lu";
function About(){
    return(
        <>
        <div className="about-title" id='About'>
            <p>ABOUT ME</p>
        </div>
        <div className="about-desc container">
            <div className="about-ux">
             <p className='p-ux'>
             I am a Professional UI/UX Designer and Web developer. Consectetur an adipisi elita, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
             </p>
             <span className='span-ux'>
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspi unde omnis iste natus error sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit aut fugit,
             </span>
             <div className="about-contact-item">
             <div className="about-item">
               <p>Phone</p>
                <span>987-123-6547</span>
               </div>
               <div className="about-item">
               <p>Email</p>
                <span>browny@info.com</span>
               </div>
               <div className="about-item">
               <p>Website</p>
                <span>www.brownsine.com</span>
               </div>
             </div>
            </div>
            <div className="about-img">
                 <img src="https://static.vecteezy.com/system/resources/previews/003/152/073/non_2x/cute-attractive-teenage-girl-smiling-on-a-white-background-free-photo.JPG" alt="" />
                   <div className="icon">
                   <a href="#"><BsInstagram /></a>
                   <a href="#"><PiFacebookLogoBold /></a>
                   <a href="#"><FaTelegram /></a>
                   <a href="#"><IoLogoLinkedin /></a>
                   <a href="#"> <LuTwitter /></a>
                   </div>

            </div>
        </div>
        </>
    )
}
export default About