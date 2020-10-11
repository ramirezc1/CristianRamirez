import React from "react";

const Contact = () => {
  return (
    <div className="fl w-100 mt6 pl6">
      {/* @TODO logo*/}

      <h1 className="f0 mb7">Lorem ipsum dolor </h1>

      <div className="w-70 center flex-column pb3">
        <div>
          <h1 className="f3 ">Contact</h1>
          {/* @TODO edit*/}
          <p className="f5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit sunt
            rerum in ab. Atque, nobis hic cum ad harum repellendus odio illum
            ullam facere quam qui quis dolores eveniet impedit?
          </p>
          <p className="f5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            commodi officia magnam. Hic ex, rerum eligendi, quae aperiam fugiat
            commodi beatae cum dolorem eveniet voluptatum. Ad sint mollitia odit
            ratione?
          </p>
          <p className="f5">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          {/* @TODO click to copy */}
          <p className="f5 dark-red">ramirezcristian81@live.com</p>
          {/* @TODO Link */}
          <p className="f5 dark-red">LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
