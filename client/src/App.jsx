import React from "react";
import "./app.scss";
import { Hero, Navbar, Parallex, Services } from "./component";
// import Test from "./Test";

const App = () => {
  return (
    <>
      <div>
        <section id="Homepage" className="">
          <Navbar />
          <Hero />
        </section>
        <section id="Services" className="">
          <Parallex type="Portfolio" />
        </section>
        <section id="Portfolio" className="">
          <Services />
        </section>
        <section id="Services" className="">
          <Parallex type="Services" />
        </section>
        <section id="About" className="">
          Parallex
        </section>
        <section id="Contact" className="">
          contact
        </section>
      </div>
    </>
  );
};

export default App;
