import React from "react";
import "../css/Section.css";

function Section() {
  return (
    <section className="newsletter">
      <div className="newsletter_wrapper">
        <h1 className="heading-1">Sign Up For Our Newsletter</h1>
        <div className="newsletter_form">
          <input placeholder="Enter your e-mail here" />
          <button className="btn paragraph">Subscribe Now</button>
        </div>
      </div>
    </section>
  );
}

export default Section;
