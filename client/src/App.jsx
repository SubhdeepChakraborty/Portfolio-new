import React from "react";
import "./app.scss";
import { Hero, Navbar } from "./component";
// import Test from "./Test";

const App = () => {
  return (
    <>
      <div>
        <section id="Homepage" className="">
          <Navbar />
          <Hero/>
        </section>
        <section id="Services" className="">
          Parallex
        </section>
        <section id="Portfolio" className="">
          Services
        </section>
        <section id="About" className="">
          Parallex
        </section>
        <section id="Contact" className="">contact</section>
      </div>
    </>
  );
};

export default App;
