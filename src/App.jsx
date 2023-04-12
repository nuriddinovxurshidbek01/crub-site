import React from "react";
import { useState } from "react";
import Todo from "./assets/pages/Todo/index";
import Companents from "./assets/pages/Companent/Companent";
import { ToastContainer, toast } from "react-toastify";
import Body from "./assets/pages/Body/Body";
import "react-toastify/dist/ReactToastify.css";
import Saidbar from "./assets/pages/Saidbar/Saidbar";

const App = () => {
  return (
    <>
      <main className="main">
        <aside>
          <Saidbar />
        </aside>
        <div className="companents">
          <Companents /> ,
          <Body />
        </div>
      </main>
    </>
  );
};
export default App;
