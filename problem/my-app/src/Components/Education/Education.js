import { Col, Row } from 'react-bootstrap';
import { FaCircle } from "react-icons/fa";
import './Education.css';
function Education(){
    return(
        <>
        <div className="education-part" id='Education'>
            <p className="title">EDUCATION</p>
            <Row className='educate-item'>
             <Col>
              <span className="num">2008 - 2010</span>
              <p className="job">Master of Computer Science</p> 
              <div className="icon-educate">
              <FaCircle fontSize='10px' color='#d92cf9' />
              <span className='border-educate'></span>
              </div>
              <p className="uni">UNIVERSITY OF NORTH CAROLINA</p>
              <div className="uni-part">
             <span className='uni-name'>North Carolina, USA</span>
              <span className='uni-desc'>Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.</span></div>
        </Col>

        <Col>
              <span className="num">2004 - 2008</span>
              <p className="job">Bachelor of Computer Science</p>
              <div className="icon-educate">
              <FaCircle fontSize='10px' color='#d92cf9' />
              <span className='border-educate'></span>
              </div>
              <p className="uni">UNIVERSITY OF NORTH CAROLINA</p>
              <div className="uni-part">
             <span className='uni-name'>North Carolina, USA</span>
              <span className='uni-desc'>Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.</span></div>
        </Col>


        <Col>
              <span className="num">2004 - 2008</span>
              <p className="job">Bachelor of Creative Design</p>
              <div className="icon-educate">
              <FaCircle fontSize='10px' color='#d92cf9' />
              <span className='border-educate-bolton'></span>
              </div>
              <p className="uni">UNIVERSITY OF BOLTON</p>
              <div className="uni-part">
             <span className='uni-name'>Bolton, United Kingdome</span>
              <span className='uni-desc'>Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.</span></div>
        </Col>

        </Row>
        </div>
      
        </>
    )
}
export default Education