import React from "react";
import SectionTitle from "../../components/layout/SectionTitle";
import Title from "../../components/layout/Title";
import { useCounter } from "../../hooks/useCounter";

const UseMyHook = (props) => {
  const [count, inc, dec] = useCounter();
  return (
    <div className="UseCustom">
      <Title
        title="useMyHook"
        subtitle="Vamos aprender a criar nosso prórpio Hook."
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <span className="text">{count}</span>
        <button className="btn" onClick={() => inc()}>
          +1
        </button>
        <button className="btn" onClick={() => dec()}>
          -1
        </button>
      </div>
    </div>
  );
};
export default UseMyHook;
