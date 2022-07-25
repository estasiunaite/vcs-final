import React from "react";
import "./testimonial.css";

import TestimonialProp from "../../Shared/TestimonialProp/TestimonialProp";

const Testimonial = () => {
  return (
    <div className="container testimonialContainer">
      <TestimonialProp
        testimonialSubject="5 stars"
        testimonialText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui odio vero beatae nesciunt aliquid aut sunt minima explicabo nulla tenetur, asperiores nobis et dolorem voluptatem possimus? Voluptate at voluptatum error! Nihil officia ipsum natus ratione labore cupiditate. Ratione temporibus odit nulla exercitationem autem eligendi consequuntur animi ut corrupti tempora!"
        signature="- Suzan, Vilnius"
      />
    </div>
  );
};

export default Testimonial;
