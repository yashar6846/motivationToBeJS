import React from "react";
import Navbar from "../../Navbar/Navbar";
import styled from "./aboutUs.module.css";
const AboutUs = () => {
  return (
    <>
      <Navbar title="yashar" />
      <div className={styled.aboutPage}>
        <div className="container">
          <h2>Abou tUs</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            nemo facilis, voluptatum perferendis provident quasi voluptatem quo
            fuga recusandae totam ullam sed fugiat velit, suscipit eligendi
            mollitia atque maxime minima.
          </p>
          <h3> city </h3>
          <img src="" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
