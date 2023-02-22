import React from "react";
import "../css/Section2.css";

function Section2(props) {
  return (
    <section className="cards">
      <div className="img"></div>
      <div className="content">
        <div className="name">{props.children.name}</div>
        <div className="info">
          <div className="infos">
            <img src="/icons/clock_yellow.png" alt="clock" />
            {props.children.duration}
          </div>
          <div className="infos">
            <img src="/icons/people.png" alt="clock" />
            {props.children.numberOfVisitor}
          </div>
          <div className="infos">
            <img src="/icons/star.png" alt="clock" />
            {props.children.marks}
          </div>
        </div>
        <div className="infos">
          <img src="/icons/address_yellow.png" alt="clock" />
          {props.children.location}
        </div>
      </div>
    </section>
  );
}

export default Section2;
