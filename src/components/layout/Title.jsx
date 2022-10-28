import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <div className="Title">
      <h1>Hook {props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};
export default Title;
