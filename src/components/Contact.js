import React from 'react';

const Contact = () => {
  return (
    <div className="contact" id='contact'>
      <h2>Contact me</h2>
      <form>
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="E-mail" />
        <br />
        <textarea placeholder='Type your message here'/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
