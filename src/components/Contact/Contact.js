import React from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import './contact.css'

export const Contact = () => {


  const sendEmail = (e) => {
    e.preventDefault();

    return
    emailjs.sendForm('service_widwdr8', 'template_6sflyxk', e.target, 'user_glUQesWLiq5TioBkOF4Zn')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div>
      <Header name="Contact" />
      <Form className="contact-form" onSubmit={sendEmail}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="from_mail" required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" name="from_name" required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Footer />
    </div>
  )
}



