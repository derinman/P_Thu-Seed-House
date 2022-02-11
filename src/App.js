import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import rwdConfig from "./config/rwdConfig";

import houseImg from "./img/A8.png";

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
  //border: 1px solid #f70a0a;
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
  //border: 1px solid blue;
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
  display: none;
  color: #fff;
  //border: 1px solid yellow;
  > div {
    &:nth-child(1) {
      font-size: 3rem;
      margin: 1rem 0rem 0rem 1.2rem;
    }
    &:nth-child(2) {
      font-size: 1.3rem;
      margin: 0.2rem 0rem 0rem 1.2rem;
    }
    &:nth-child(3) {
      font-size: 1.3rem;
      margin: 0.2rem 0rem 0rem 1.2rem;
    }
  }
  @media ${rwdConfig.tablet} {
    display: block;
  }
`;

const HouseImg = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url(${houseImg});
  background-repeat: no-repeat; 
  background-size: contain;
  background-position: center;
  // border: 1px solid yellow;
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
  //border: 1px solid yellow;
  @media ${rwdConfig.tablet} {
    width: 100%;
    height: 50%;
  }
`;

const IndexItem = styled.div`
  position:relative;
  width:100%;
  color:#fff;
  font-size:2rem;
  display:flex;
  flex-direction:row;
  justify-content:start;
  align-items:center;
  margin: 0rem 0rem 0rem 8rem;
  // border 1px solid green;
  > div {
    &:nth-child(2) {
      display:flex;
      margin-top:0.3rem;
      // border:1px solid red;
      >div {
        margin:0rem 0rem 0rem 2rem;
        &:nth-child(3) {
          font-size:1.2rem;
          margin-top: 0.8rem;
          // border:1px solid red;
        }
      }
    }
    &:nth-child(3) {display:none;}
  }
  @media ${rwdConfig.laptopL} {
    margin: 0rem 0rem 0rem 1rem;
  }
  @media ${rwdConfig.tablet} {
    width: calc(50% - 2.25rem);
    flex-direction:column;
    justify-content:space-around;
    font-size:1.5rem;
    margin:0rem 0rem 1.5rem 1.5rem;
    border-radius:1rem;
    background-color:#3d3834;
    > div {
      &:nth-child(2) {
        >div {
          &:nth-child(1) {
            font-size:1.2rem;
            margin-top: 0.8rem;
          }
          &:nth-child(2) {
            font-size:2rem;
          }
          &:nth-child(3) {
            font-size:1.2rem;
            margin-top: 0.8rem;
          }
        }
      }
      &:nth-child(3) {
        display:block;
        font-size:1.2rem;
        }
      }
    }
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
          <UpperClockContainer>
            <div>THU</div>
            <div>12:24PM</div>
            <div>MON.</div>
          </UpperClockContainer>
          <HouseImg></HouseImg>
        </HouseImgContainer>
        <IndexContainer>
          <IndexItem>
            <div>太陽能發電率</div>
            <div>
              <div>PV</div>
              <div>90.2</div>
              <div>w</div>
            </div>
            <div>周平均 93 W</div>
          </IndexItem>
          <IndexItem>
            <div>綠藻淨化指數</div>
            <div>
              <div>O₂</div>
              <div>545</div>
              <div>PPM</div>
            </div>
            <div>周平均 550 PPM</div>
          </IndexItem>
          <IndexItem>
            <div>空氣環境品質</div>
            <div>
              <div>CO₂</div>
              <div>729</div>
              <div>PPM</div>
            </div>
            <div>周平均 793 PPM</div>
          </IndexItem>
          <IndexItem>
            <div>水耕循環系統</div>
            <div>
              <div>TEMP.</div>
              <div>22.0</div>
              <div>°C</div>
            </div>
            <div>周平均 25 °C</div>
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
