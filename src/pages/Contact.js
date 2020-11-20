import React from "react";
import AnimateBounce from "../components/AnimateBounce";
import "./Contact.css";

const Contact = () => {
  const copyCodeToClipboard = () => {
    const el = this.textArea;
    el.select();
    document.execCommand("copy");
  };
  return (
    <div className="mt6 centerDiv">
      {/* @TODO logo*/}
      <AnimateBounce y={100}>
        <h1 className="f0 mv6">Lorem ipsum dolor </h1>
      </AnimateBounce>

      <div className="center flex-column pb3 container">
        <h1 className="f3 pt5 fw6">Contact</h1>
        {/* @TODO edit*/}
        <p className="f6 fw1 lh-copy">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit sunt
          rerum in ab. Atque, nobis hic cum ad harum repellendus odio illum
          ullam facere quam qui quis dolores eveniet impedit?
        </p>
        <p className="f6 fw1 lh-copy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          commodi officia magnam. Hic ex, rerum eligendi, quae aperiam fugiat
          commodi beatae cum dolorem eveniet voluptatum. Ad sint mollitia odit
          ratione?
        </p>
        <p className="f6 fw1 lh-copy">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>

        <a
          className="no-underline f5 dark-red"
          href="mailto:ramirezcristian81@live.com"
        >
          ramirezcristian81@live.com
        </a>

        <a
          className="no-underline f5 dark-red"
          href="https://www.linkedin.com/in/ramirezc1/"
        >
          <br />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
