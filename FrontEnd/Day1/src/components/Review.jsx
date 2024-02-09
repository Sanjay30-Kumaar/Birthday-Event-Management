import React from 'react';
import '../assets/css/Review.css'
import Nav_Bar from './Nav_Bar';

const BirthdayEventReview = () => {
  return (
  <>
  <Nav_Bar/>
    <div className="review-container">
      <h1>[Your Name]'s Birthday Celebration Review</h1>

      <div className="event-details">
        <p>
          <strong>Date:</strong> [Date of the birthday event]
        </p>
        <p>
          <strong>Venue:</strong> [Location or venue of the celebration]
        </p>
        <p>
          <strong>Guests:</strong> [Number of guests in attendance]
        </p>
      </div>

      <div className="overall-rating">
        <h2>Overall Rating: ⭐⭐⭐⭐⭐ (5/5)</h2>
      </div>

      <div className="highlights">
        <h3>Highlights:</h3>
        <ul>
          <li>
            <strong>Warm Atmosphere:</strong> The birthday celebration created a warm and inviting atmosphere...
          </li>
          <li>
            <strong>Entertainment:</strong> The entertainment provided during the event was fantastic!...
          </li>
          <li>
            <strong>Delicious Food:</strong> The catering exceeded expectations. The menu was diverse...
          </li>
          <li>
            <strong>Thoughtful Decorations:</strong> The attention to detail in the decorations was evident...
          </li>
          <li>
            <strong>Smooth Coordination:</strong> The organizers did an excellent job coordinating the event...
          </li>
        </ul>
      </div>

      <div className="personal-reflection">
        <h3>Personal Reflection:</h3>
        <p>
          [Include a paragraph or two expressing your personal thoughts and emotions about the event. Highlight specific moments that made the celebration memorable for you.]
        </p>
      </div>

      <div className="thank-you">
        <h3>Thank You!</h3>
        <p>
          I want to extend my heartfelt thanks to everyone who played a part in making this birthday celebration unforgettable...
        </p>
        <p>
          If you're planning an event, I highly recommend considering the team behind this celebration for their professionalism...
        </p>
        <p>
          Thank you once again for making my birthday truly special!
        </p>
        <p>
          [Your Name]
        </p>
      </div>
    </div>
    </>
  );
};

export default BirthdayEventReview;
