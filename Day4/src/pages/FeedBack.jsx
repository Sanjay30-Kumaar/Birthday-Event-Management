import React, { useState } from 'react';
import "../assets/css/FeedBack.css"
import Nav_Bar from '../components/Nav_Bar';
import Footer from '../components/Footer';
const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
  };

  return (
<>
    <Nav_Bar/>
<br></br>
<br></br>
    <div className='feed-con'>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your Feedback:
          <br></br>
          <br></br>
          <textarea
          
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Footer/>
    </>
  );
};

export default FeedbackForm;
