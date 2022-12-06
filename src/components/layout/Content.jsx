import React from "react";
import "./Content.css";
import { Route, Routes } from "react-router-dom";
import Home from "../../views/pages/Home";

import UseMyHook from "../../views/pages/UseMyHook";
import NotFound from "../../views/pages/NotFound";
import UseState from "../../views/pages/UseState";
import UseEffect from "../../views/pages/UseEffect";
import UseRef from "../../views/pages/UseRef";
import UseMemo from "../../views/pages/UseMemo";
import UseCallback from "../../views/pages/UseCallback";
import UseContext from "../../views/pages/UseContext";
import UseReducer from "../../views/pages/UseReducer";

const Content = (props) => {
  return (
    <main className="Content">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/usecallback" element={<UseCallback />} />
        <Route path="/usecontext" element={<UseContext />} />
        <Route path="usereducer" element={<UseReducer />} />
        <Route path="usemyhook" element={<UseMyHook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};
export default Content;
