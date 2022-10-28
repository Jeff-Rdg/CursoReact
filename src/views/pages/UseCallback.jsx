import React from "react";

import { useCallback } from "react";

import { useState } from "react";
import SectionTitle from "../../components/layout/SectionTitle";
import Title from "../../components/layout/Title";
import UseCallbackButtons from "../../components/UseCallbackButtons";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  const inc = useCallback(
    function (delta) {
      setCount((curr) => curr + delta);
    },
    [setCount]
  );

  return (
    <div className="UseCallback">
      <Title title={"UseCallback"} subtitle={"Retorna uma função Memoizado!"} />
      <SectionTitle title={"Atividade 01"} />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>

      <SectionTitle title={"Atividade 02"} />
    </div>
  );
};
export default UseCallback;
