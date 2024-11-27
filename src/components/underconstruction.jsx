import React from "react";

export const UnderConstruction = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-0 col-md-offset-1 section-title">
          <h2>Sorry, further details are under construction!</h2>
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div> */}
      </div>
    </div>
  );
};
