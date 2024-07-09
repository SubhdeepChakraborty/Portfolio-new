import React from "react";
import "./app.scss";
import { Navbar } from "./component";
// import Test from "./Test";

const App = () => {
  return (
    <>
      <div>
        <section className="">
          <Navbar />
        </section>
        <section className="">Parallex</section>
        <section className="">Services</section>
        <section className="">Parallex</section>
        <section className="">Portfolio1</section>
        <section className="">Portfolio2</section>
        <section className="">Portfolio3</section>
        <section className="">Portfolio4</section>
        <section className="">contact</section>
      </div>
    </>
  );
};

export default App;
