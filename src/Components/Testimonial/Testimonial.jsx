import React from "react";
import "./testimonial.css";

import TestimonialProp from "../../Shared/TestimonialProp/TestimonialProp";

const Testimonial = () => {
  return (
    <div>
      <TestimonialProp
        testimonialSubject="5 stars"
        testimonialText="Wow, I can't praise this experience enough! I loved the freedom of doing
    your own thing in the beautiful nature, but also the opportunity to meet
    some fantastic new friends and participating in great yoga classes
    suitable for all levels. I literally can't rate my time here highly
    enough, don't hesitate to go - it's a special place!"
        signature="- Suzan, Vilnius"
      />
    </div>
  );
};

export default Testimonial;
