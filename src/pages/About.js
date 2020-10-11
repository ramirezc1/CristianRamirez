import React from "react";

const About = () => {
  return (
    <div className="fl w-100 mt7 pl6">
      {/* @TODO logo*/}
      {/* @TODO img*/}
      <h1 className="f0 mb7">Lorem ipsum dolor sit amet </h1>
      <div className="mt5 mb6">
        <img className="twic" data-src="placeholder:auto"></img>
      </div>
      <div className="w-70 center flex-column pb3">
        <h1 className="f1 self-start">About</h1>
        {/* @TODO edit*/}
        <p className="f3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          maiores, autem voluptatibus hic animi dolores nobis ullam excepturi
          aliquid. Quibusdam assumenda nihil.
        </p>

        <p className="f4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptas omnis iusto, esse, perspiciatis expedita amet nisi deserunt
          eaque, magnam non. Minima architecto atque iste non quia laudantium
          magni modi.
        </p>

        <p className="f4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptas omnis iusto, esse, perspiciatis expedita amet nisi deserunt
          eaque, magnam non. Minima architecto atque iste non quia laudantium
          magni modi.
        </p>
        {/* @TODO link to download*/}
        {/* <a href="">Resume</a> */}
        <p className="red self-start f4">Resume</p>
      </div>
    </div>
  );
};

export default About;
