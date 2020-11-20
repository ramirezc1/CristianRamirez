import React from "react";
import { Link } from "react-router-dom";
import AnimateBounce from "../components/AnimateBounce";
import AnimatedLink from "../components/AnimatedLink";

const About = () => {
  return (
    <div className="mt6 centerDiv">
      {/* @TODO logo*/}
      {/* @TODO img*/}
      <AnimateBounce y={100}>
        <h1 className="f1 mv7">Lorem ipsum dolor sit amet </h1>
      </AnimateBounce>

      <div className="mt4 mb2" style={{ width: "100vw", height: "70vh" }}>
        <img alt="" className="twic" data-src="placeholder:auto"></img>
      </div>
      <div className="center flex-column pb3 container">
        <h1 className="f3 pt5 fw6 self-start">About</h1>
        {/* @TODO edit*/}
        <p className="f5 fw1 lh-copy">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          maiores, autem voluptatibus hic animi dolores nobis ullam excepturi
          aliquid. Quibusdam assumenda nihil.
        </p>

        <p className="f6 fw1 lh-copy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptas omnis iusto, esse, perspiciatis expedita amet nisi deserunt
          eaque, magnam non. Minima architecto atque iste non quia laudantium
          magni modi.
        </p>

        <p className="f6 fw1 lh-copy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptas omnis iusto, esse, perspiciatis expedita amet nisi deserunt
          eaque, magnam non. Minima architecto atque iste non quia laudantium
          magni modi.
        </p>
        <AnimatedLink>
          <Link
            to="/files/Resume.pdf"
            className="dark-red self-start f5 no-underline mb3 f-5 lh-solid"
            target="_blank"
            download
          >
            My Resume (pdf)
          </Link>
        </AnimatedLink>
      </div>
    </div>
  );
};

export default About;
