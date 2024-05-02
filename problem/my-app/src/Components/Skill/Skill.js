import { Col, Row } from 'react-bootstrap';
import './Skill.css';
function Skill(){
    return(
        <>
        <div className="skill-part" id='Skills'>
            <h6 className="title-skill">SKILLS</h6>
              
             <Row className='skills'>
                <Col className='skill-item'>
                <div className="progress-item">
                    <span className='bar-header'>ADOBE PHOTOSHOP</span>
                    <div className="bar">
                        <span className="bar-line">
                        <div className="progress"style={{width:'90%'}}></div>
                        </span>
                        <h6 className="bar-num">90%</h6>
                    </div>
                </div>
                <div className="progress-item">
                    <span className='bar-header'>ADOBE ILLUSTRATOR</span>
                    <div className="bar">
                        <span className="bar-line">
                        <div className="progress"style={{width:'85%'}}></div>
                        </span>
                        <h6 className="bar-num">85%</h6>
                    </div>
                </div>
                <div className="progress-item">
                    <span className='bar-header'>ADOBE AFTER EFFECTS</span>
                    <div className="bar">
                        <span className="bar-line">
                            <div className="progress"style={{width:'97%'}}></div>
                        </span>
                        <h6 className="bar-num">97%</h6>
                    </div>
                </div>
                <div className="progress-item">
                    <span className='bar-header'>SKETCH</span>
                    <div className="bar">
                        <span className="bar-line">
                        <div className="progress"style={{width:'90%'}}></div>
                        </span>
                        <h6 className="bar-num">90%</h6>
                    </div>
                </div>
                </Col>
                <Col className='skill-item'>
                <div className="progress-item">
                    <span className='bar-header'>HTML 5</span>
                    <div className="bar">
                        <span className="bar-line">
                        <div className="progress"style={{width:'90%'}}></div>
                        </span>
                        <h6 className="bar-num">90%</h6>
                    </div>
                </div>
                <div className="progress-item">
                    <span className='bar-header'>CSS 3 ANIMATION</span>
                    <div className="bar">
                        <span className="bar-line">
                        <div className="progress"style={{width:'85%'}}></div>
                        </span>
                        <h6 className="bar-num">85%</h6>
                    </div>
                </div>
                <div className="progress-item">
                    <span className='bar-header'>COMMUNICATION</span>
                    <div className="bar">
                        <span className="bar-line">
                            <div className="progress"style={{width:'97%'}}></div>
                        </span>
                        <h6 className="bar-num">97%</h6>
                    </div>
                </div>
                <div className="progress-item">
                    <span className='bar-header'>CREATIVITY</span>
                    <div className="bar">
                        <span className="bar-line">
                        <div className="progress"style={{width:'90%'}}></div>
                        </span>
                        <h6 className="bar-num">90%</h6>
                    </div>
                </div>
                </Col>
             </Row>


        </div>
        </>
    )
}
export default Skill 