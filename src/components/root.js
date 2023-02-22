import React from "react";
import "../css/root.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section from "../components/Section";
import Section2 from "./Section2";
import Footer from "./Footer";
function Root() {
  const places = [
    {
      id: 1,
      name: "Enjoy Beauty place in Bali City",
      duration: "10 Day’s",
      numberOfVisitor: "8 person",
      marks: "4.8 (2.5k Review)",
      location: "Bali, indonesha",
    },
    {
      id: 2,
      name: "Enjoy Beauty place in Rom City",
      duration: "10 Day’s",
      numberOfVisitor: "8 person",
      marks: "4.8 (2.5k Review)",
      location: "Bali, indonesha",
    },
    {
      id: 3,
      name: "Enjoy Beauty place japan City",
      duration: "10 Day’s",
      numberOfVisitor: "8 person",
      marks: "4.8 (2.5k Review)",
      location: "Bali, indonesha",
    },
    {
      id: 4,
      name: "Enjoy Beauty place japan City",
      duration: "10 Day’s",
      numberOfVisitor: "8 person",
      marks: "4.8 (2.5k Review)",
      location: "Bali, indonesha",
    },
    {
      id: 5,
      name: "Enjoy Beauty place Paris City",
      duration: "10 Day’s",
      numberOfVisitor: "8 person",
      marks: "4.8 (2.5k Review)",
      location: "Bali, indonesha",
    },

    {
      id: 6,
      name: "Enjoy Beauty place in Bali City",
      duration: "10 Day’s",
      numberOfVisitor: "8 person",
      marks: "4.8 (2.5k Review)",
      location: "Bali, indonesha",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header />
      <div
        className="section_2"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        {places.map((place) => (
          <Section2 key={place.id}>{place}</Section2>
        ))}
      </div>
      <div className="conrolballs">
        <div className="conrolball prev">Prev</div>
        <div className="conrolball">01</div>
        <div className="conrolball">02</div>
        <div className="conrolball">03</div>
        <div className="conrolball">04</div>
        <div className="conrolball next">Next</div>
      </div>
      <Section />
      <Footer />
    </div>
  );
}

export default Root;
