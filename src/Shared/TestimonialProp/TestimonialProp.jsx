import React from "react";
import "./TestimonialProp.css";

const TestimonialProp = ({
  testimonialSubject,
  testimonialText,
  signature,
}) => {
  return (
    <div className="testimonialProp">
      <p classNane="quote">“</p>
      <h2 className="testimonialSubject">{testimonialSubject}</h2>
      <p className="testimonialText">{testimonialText}</p>
      <p className="signature">{signature}</p>
    </div>
  );
};

export default TestimonialProp;
