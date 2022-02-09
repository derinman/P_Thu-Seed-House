import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  //border: 10px solid #f70a0a;
`;

const Home = () => {
  return <div>134</div>;
};

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </Wrapper>
  );
}

export default App;
