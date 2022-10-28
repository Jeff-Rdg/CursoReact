import React from "react";
import { useState } from "react";
import SectionTitle from "../../components/layout/SectionTitle";
import Title from "../../components/layout/Title";

const UseState = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="UseState">
      <Title title={"UseState"} subtitle={"Estado em componentes funcionais"} />
      <SectionTitle title={"Atividade 01"} />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>
            -1
          </button>{" "}
          <button className="btn" onClick={() => setCount(count + 1)}>
            +1
          </button>
          <button
            className="btn"
            onClick={() => setCount((current) => current + 1000)}
          >
            +1000
          </button>
        </div>
      </div>
      <SectionTitle title={"Atividade 02"} />
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </div>
  );
};
export default UseState;
