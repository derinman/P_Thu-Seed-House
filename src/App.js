import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import rwdConfig from "./config/rwdConfig";

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

const UpperContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  display:flex;
  flex-direction:row;
  border: 1px solid #f70a0a;
  @media ${rwdConfig.tablet} {
      height:75%;
      flex-direction:column;
    }
  }
`;

const LowerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  border: 1px solid #f70a0a;
  @media ${rwdConfig.tablet} {
    height: 25%;
  }
`;

const HouseImgContainer = styled.div`
  position: relative;
  height: 100%;
  width: 40%;
  display:flex;
  flex-direction:row;
  border: 1px solid blue;
  @media ${rwdConfig.tablet} {
    width:100%;
    height:50%;
  }
}
`;

const UpperClockContainer = styled.div`
  position: relative;
  width: 25%;
  height: 100%;
  display:none;
  border: 1px solid yellow;
  @media ${rwdConfig.tablet} {
    display: block;
  }
`;

const HouseImg = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border: 1px solid yellow;
  @media ${rwdConfig.tablet} {
    width:75%;
    height:100%;
  }
}
`;

const IndexContainer = styled.div`
  position: relative;
  height: 100%;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid yellow;
  @media ${rwdConfig.tablet} {
    width: 100%;
    height: 50%;
  }
`;

const IndexItem = styled.div`
  position:relative;
  width:100%;
  color:#fff;
  border 1px solid green;
  @media ${rwdConfig.tablet} {
    width: 49%; //可能要再改
  }
`;

const PieContainer = styled.div`
  position: relative;
  width: 25%;
  height: 100%;
  border: 1px solid yellow;
  @media ${rwdConfig.tablet} {
    width: 40%;
  }
`;

const LowerClockContainer = styled.div`
  position: relative;
  width: 25%;
  height: 100%;
  border: 1px solid yellow;
  @media ${rwdConfig.tablet} {
    display: none;
  }
`;

const ChartContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  border: 1px solid yellow;
  @media ${rwdConfig.tablet} {
    width: 60%;
  }
`;

const Home = () => {
  return (
    <>
      <UpperContainer>
        <HouseImgContainer>
          <UpperClockContainer></UpperClockContainer>
          <HouseImg></HouseImg>
        </HouseImgContainer>
        <IndexContainer>
          <IndexItem>
            <div>123</div>
          </IndexItem>
          <IndexItem>
            <div>123</div>
          </IndexItem>
          <IndexItem>
            <div>123</div>
          </IndexItem>
          <IndexItem>
            <div>123</div>
          </IndexItem>
        </IndexContainer>
      </UpperContainer>
      <LowerContainer>
        <PieContainer></PieContainer>
        <LowerClockContainer></LowerClockContainer>
        <ChartContainer></ChartContainer>
      </LowerContainer>
    </>
  );
};

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
