import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../components/layout/SectionTitle";
import Title from "../../components/layout/Title";

const merge = (s1, s2) => {
  return [...s1].map((e, i) => `${e}${s2[i] || ""}`).join("");
};

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  const count = useRef(0);

  useEffect(() => {
    count.current++;
    myInput2.current.focus();
  }, [value1]);

  useEffect(() => {
    count.current++;
    myInput1.current.focus();
  }, [value2]);

  return (
    <div className="UseRef">
      <Title
        title={"UseRef"}
        subtitle={"Retorna um objeto mutável com a propriedade .current"}
      />
      <SectionTitle title={"Atividade 01"} />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          value={value1}
          ref={myInput1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <SectionTitle title={"Atividade 02"} />
      <div className="center">
        <input
          type="text"
          className="input"
          value={value2}
          ref={myInput2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};
export default UseRef;
