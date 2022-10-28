import React, { useContext } from "react";
import { useEffect } from "react";

import SectionTitle from "../../components/layout/SectionTitle";
import Title from "../../components/layout/Title";
import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {
  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta,
    });
  }

  const { number, text, setNumber, setText } = useContext(AppContext);

  useEffect(function () {
    if (number > 1250) {
      setText("Eita!");
    }
  });
  
  return (
    <div className="UseContext">
      <Title
        title={"UseContext"}
        subtitle={
          "Aceita um objeto de contexto e retorna o valor atual do contexto!"
        }
      />
      <SectionTitle title={"Atividade 01"} />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>
      </div>
      <div className="center">
        <button className="btn" onClick={() => addNumber(+1)}>
          +1
        </button>
      </div>

      <SectionTitle title={"Atividade 02"} />
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
      </div>
      <div className="center">
        <button className="btn" onClick={() => setNumber(number + 1)}>
          +1
        </button>
      </div>
    </div>
  );
};
export default UseContext;
