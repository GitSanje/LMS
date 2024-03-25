import React, { useRef, useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBBtn,
  MDBCol,
} from "mdb-react-ui-kit";
import emailjs from "emailjs-com";
import "./form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
const EmailForm = () => {
  const [showMessage, setShowMessage] = useState(false); // state to control the message box visibility
  const [messageText, setMessageText] = useState(""); // state to store the message text
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5uqyphw",
        "template_hglxp6t",
        form.current,
        "D_aEMyE98RvNizMH7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowMessage(true); // show the message box when email is sent successfully
          setMessageText("Message sent successfully!"); // set the message text to display
        },
        (error) => {
          console.log(error.text);
          setShowMessage(true); // show the message box when email sending fails
          setMessageText("Failed to send message. Please try again."); // set the message text to display
        }
      );
  };

  const handleCloseMessage = () => {
    setShowMessage(false); // hide the message box when the X button is clicked
  };

  return (
    <>
      <MDBContainer>
        <MDBRow>
        <div className="Welcome mt-3">
        Compose E-mail to...
                </div>
                <div className="D_bord">
                
                  <span className="Das_index"> Dashboard</span>/
                  <span className="index">Message</span>
                </div>
       
          <MDBCol md="6">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <label>Your name </label>
              <input type="text" name="user_name" />
              <label>To E-mail</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {showMessage && (
        <div className="message-box">
          <div className="message-text">{messageText}</div>
          <div className="close-button" 
          onClick={handleCloseMessage}>
            <FontAwesomeIcon icon={faXmark} size="sm" ></FontAwesomeIcon>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailForm;
