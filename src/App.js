import React from "react";

import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import Home from "./component/Home.js";
import Hydroponics from "./component/Hydroponics.js";
import Algae from "./component/Algae.js";
import Solar from "./component/Solar.js";
import Air from "./component/Air.js";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  overflow: hidden;
  background-color: #000;
  transition: all 0.3s ease-in-out;
  //border: 10px solid #f70a0a;
`;

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="air" element={<Air/>}/>
        <Route path="hydroponics" element={<Hydroponics/>}/>
        <Route path="algae" element={<Algae/>}/>
        <Route path="solar" element={<Solar/>}/>
      </Routes>
    </Wrapper>
  );
}

export default App;
