import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './images/acexa-white.png';
import './contact.css';
import location from './images/location.jpg';
import email from './images/email.jpg';
import call from './images/th.jpg';
import Finalpage from './finalPage';

const Contact = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [mailId, setMailId] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    navigate('/finalpage');
    const userData = JSON.stringify({
      username: username,
      mailId: mailId,
      subject: subject,
      message: message,
    });
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: userData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          call()
        } else {
          console.error('Submission failed:', data.error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 sticky-top">
          <div className="logo nav-bar">
            <img src={logo} alt="" />
            <div className="col-9 d-flex justify-content-end">
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-sm-2 form order-md-1">
          <form className="form">
            <div className="mb-3">
              <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="mailId" value={mailId} onChange={(e) => setMailId(e.target.value)} placeholder="Your Mail" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" id="message" value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="5" placeholder="Message" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={submitForm}>
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6 order-sm-1 order-md-2 ">
          <div className="contact-data">
            <div className="row">
              <img src={location} className='location col-2' alt="" />
              <p className='col-7'><h5>Location: </h5>3rd Floor, M S Nilayam, Beretana Agrahara, Bengaluru, Karnataka.560100</p>
            </div>
            <div className="row">
              <img src={email} className='email col-2' alt="" />
              <p className='col-7'><h5>Email: </h5>contact.axexa@gmail.com</p>
            </div>
            <div className="row">
              <img src={call} className='call col-2' alt="" />
              <p className='col-7'><h5>Call: </h5>+91 8675733242</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
