import React,{useState} from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const Email = () => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
  
   
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const  sendEmail =
    (to, subject, body) =>{

        const msg = {
          to: to,
          from: 'you@yourdomain.com', // replace with your email address
          subject: subject,
          text: body,
        };
        sgMail.send(msg);
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        sendEmail(to, subject, body);
        // display a success message to the user
      };
    

  return (
    <>
     <form onSubmit={handleSubmit}>
      <MDBInput label="To:" type="email" 
      value={to} onChange={(e) => setTo(e.target.value)} />

      <MDBInput label="Subject:" type="text" 
      value={subject} onChange={(e) => setSubject(e.target.value)} />

      <MDBInput label="Body:" type="textarea" 
      value={body} onChange={(e) => setBody(e.target.value)} />

      <MDBBtn color="primary" type="submit">Send</MDBBtn>
    </form>
      
    </>
  )
}

export default Email
