import { Col, Row } from 'react-bootstrap'
import { FaAffiliatetheme } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFlickr } from "react-icons/fa";
import { SiSmugmug } from "react-icons/si";
import { SiSquarespace } from "react-icons/si";
import { LiaBitbucket } from "react-icons/lia";
import './Profile.css'
function Profile(){
    return(
        <>
        <h6 className="profile-title">PROFILE</h6>
        <Row className='pro' id='Profile'>
            <Col className='profile'>
            <div className="profile-item">
            <FaAffiliatetheme />
            <span className="ico">Themeforest</span>
            </div>
            <div className="profile-item">
            <FaDribbble />
            <span className="ico">Dribbble</span>
            </div>
            <div className="profile-item">
            <FaBehance />
            <span className="ico">Behance</span>
            </div>
            <div className="profile-itemmm">
            <FaGithub />
            <span className="ico">Github</span>
            </div>
            </Col>


             <div className="profile-border"></div>


             <Col className='profilee'>
            <div className="profile-itemm">
            <FaFlickr />
            <span className="ico">FlickR</span>
            </div>
            <div className="profile-itemm">
            <SiSmugmug />
            <span className="ico">Dribbble</span>
            </div>
            <div className="profile-itemm">
            <SiSquarespace />
            <span className="ico">SquareSpace</span>
            </div>
            <div className="profile-itemmm">
            <LiaBitbucket />
            <span className="ico">BitBucket</span>
            </div>
            </Col>


        </Row>
        </>
    )
}
export default Profile