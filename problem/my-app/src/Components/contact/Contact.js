import { Col, Row } from 'react-bootstrap';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Contact(){
    return(
        <>
        <div className="contact" id='Contact'>
        <div className="contact-title">
            <span>CONTACT ME</span>
        </div>
        <Row className='contact-part'>
            <Col className='contact-info'>
            <Form>
      <Row className="info">
        
      <Form.Group as={Col}>
          <Form.Label></Form.Label>
          <Form.Control className='name' type="text" placeholder="Name*" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label></Form.Label>
          <Form.Control className='email' type="email" placeholder="Email*" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control  className='subject' placeholder="Subject" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control  className='message'placeholder="Messages" />
      </Form.Group>

      <Button className='submit' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </Col>

            <Col className='contact-infoo'>
            <div className="browny-items">
                <h6>BROWNY STAR</h6>
                <p>UI/UX Designer</p>

                <span>Phone</span>
                <p>987-123-6547</p>

                <span>Email</span>
                <p>browny@info.com</p>

                 <span>Website</span>
                 <p>www.brownsine.com</p>

            </div>
            </Col>
            

        </Row>
        </div>
        </>
    )
}
export default Contact