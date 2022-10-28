import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../components/layout/SectionTitle";
import Title from "../../components/layout/Title";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

function isPar(n) {
  let result;
  n % 2 === 0 ? (result = "Par") : (result = "Ímpar");
  return result;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [par, setPar] = useState("Ímpar");

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      setPar(isPar(number));
    },
    [number]
  );

  return (
    <div className="UseEffect">
      <Title
        title={"UseEffect"}
        subtitle={
          "Permite executar efeitos colaterais em componentes funcionais."
        }
      />
      <SectionTitle title={"Atividade 01"} />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title={"Desafio"} />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="red">{par}</span>
        </div>
      </div>
    </div>
  );
};
export default UseEffect;
