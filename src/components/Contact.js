import React from 'react';


const Contact = () => {
  return (
    <div className="contact" id='contact'>
      <h1>Contact me</h1>
      <form>
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="E-mail" />
        <br />
        <textarea placeholder='Type your message here'/>
        <br/>
        <button className='contact__button' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
