import React, { useRef, useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryLine,
} from "victory";

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
  // border: 1px solid #f70a0a;
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
  width: 35%;
  height: 100%;
  // border: 1px solid yellow;
  @media ${rwdConfig.tablet} {
    width: 40%;
  }
`;

const Pie = styled.div`
  --w: ${(props) => props.width};
  --h: ${(props) => props.height};
  --rw: ${(props) => props.ringWidth};
  --arcl: ${(props) => props.arcLength};
  --c: ${(props) => props.color};

  position: absolute;
  top: calc(50% - var(--h) / 2);
  left: calc(50% - var(--w) / 2);
  width: var(--w);
  height: var(--h);
  // border: 1px solid #fff;
  &:after,
  &:before {
    content: "";
    position: absolute;
    border-radius: 50%;
  }
  &:before {
    inset: 0;
    background: radial-gradient(farthest-side, var(--c) 98%, #0000)
        top/var(--rw) var(--rw) no-repeat,
      conic-gradient(var(--c) calc(var(--arcl) * 1%), #0000 0);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--rw)),
      #000 calc(100% - var(--rw))
    );
    mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--rw)),
      #000 calc(100% - var(--rw))
    );
  }
  &:after {
    inset: calc(50% - var(--rw) / 2);
    background: var(--c);
    transform: rotate(calc(var(--arcl) * 3.6deg))
      translateY(calc(50% - var(--w) / 2));
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-play-state: ${(props) => (props.spin ? "running" : "paused")};
  @media ${rwdConfig.desktop} {
    --w: calc(${(props) => props.width} + 4vw);
    --h: calc(${(props) => props.height} + 4vw);
  }
  @media ${rwdConfig.laptopL} {
    --w: calc(${(props) => props.width} + 6vw);
    --h: calc(${(props) => props.height} + 6vw);
  }
  @media ${rwdConfig.laptop} {
    --w: calc(${(props) => props.width} + 10vw);
    --h: calc(${(props) => props.height} + 10vw);
  }
  @media ${rwdConfig.tablet} {
    --w: calc(${(props) => props.width} + 14vw);
    --h: calc(${(props) => props.height} + 14vw);
  }
`;

const PieIndex = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 3.5rem;
  transform: translate(-50%, -50%);
  // border:1px solid red;
  > div {
    &:nth-child(1) {
      color: #fff;
    }
    &:nth-child(2) {
      color: #70c3b2;
    }
  }
  @media ${rwdConfig.desktop} {
    font-size: 3rem;
  }
  @media ${rwdConfig.laptopL} {
    font-size: 2.5rem;
  }
  @media ${rwdConfig.laptop} {
    font-size: 2rem;
  }
  @media ${rwdConfig.tablet} {
    font-size: 1.5rem;
  }
`;

const LowerClockContainer = styled.div`
  position: relative;
  width: 15%;
  height: 100%;
  // border: 1px solid yellow;
  color: #fff;
  > div {
    &:nth-child(1) {
      font-size: 4rem;
      margin: 1rem 0rem 0rem 1rem;
    }
    &:nth-child(2) {
      font-size: 2rem;
      margin: 0.2rem 0rem 0rem 1rem;
    }
    &:nth-child(3) {
      position: fixed;
      bottom: 0;
      font-size: 2rem;
      margin: 0rem 0rem 2rem 1rem;
    }
  }
  @media ${rwdConfig.laptop} {
    > div {
      &:nth-child(1) {
        font-size: 3.5rem;
        margin: 1rem 0rem 0rem 0rem;
      }
      &:nth-child(2) {
        font-size: 1.7rem;
        margin: 0.2rem 0rem 0rem 0rem;
      }
      &:nth-child(3) {
        font-size: 1.7rem;
        margin: 0rem 0rem 1.7rem 0rem;
      }
    }
  }
  @media ${rwdConfig.tablet} {
    display: none;
  }
`;

const ChartContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  // border: 1px solid yellow;
  @media ${rwdConfig.tablet} {
    width: 60%;
  }
`;

const ChartInnerContainer = styled.div`
  position: relative;
  width: 95%;
  height: 95%;
  top: 2.5%;
  left: 2.5%;
  background-color: #3d3834;
  border-radius: 1rem;
  // border: 1px solid yellow;
`;

const Home = () => {
  const [isChart, setIsChart] = useState(false);
  const [divSize, setDivSize] = useState({});
  const divRef = useRef();

  useEffect(() => {
    setDivSize({
      width: divRef.current.clientWidth,
      height: divRef.current.clientHeight,
    });
  }, []);

  useEffect(() => {
    console.log(divRef);
    setIsChart(true);
  }, []);

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
        <PieContainer>
          <Pie
            color={"#3d3834"}
            width={"20vw"}
            height={"20vw"}
            ringWidth={"1.5rem"}
            arcLength={100}
            spin={false}
          />
          <Pie
            color={"#fff"}
            width={"20vw"}
            height={"20vw"}
            ringWidth={"1.5rem"}
            arcLength={30}
            spin={true}
          />
          <Pie
            color={"#738077"}
            width={"calc(20vw - 3rem)"}
            height={"calc(20vw - 3rem)"}
            ringWidth={"1.5rem"}
            arcLength={100}
            spin={false}
          />
          <Pie
            color={"#70c3b2"}
            width={"calc(20vw - 3rem)"}
            height={"calc(20vw - 3rem)"}
            ringWidth={"1.5rem"}
            arcLength={50}
            spin={true}
          />
          <PieIndex>
            <div>25 %</div>
            <div>15 °C</div>
          </PieIndex>
        </PieContainer>
        <LowerClockContainer>
          <div>THU</div>
          <div>12:24PM</div>
          <div>MON.</div>
        </LowerClockContainer>
        <ChartContainer ref={divRef}>
          <ChartInnerContainer>
            <VictoryChart
              theme={VictoryTheme.material}
              width={divSize["width"]}
              height={divSize["height"]}
              minDomain={{ y: 0 }}
              maxDomain={{ y: 10 }}
            >
              <VictoryAxis
                style={{
                  axis: { stroke: "#fff" },
                  axisLabel: { fontSize: 20, padding: 30 },
                  grid: { stroke: "#fff" },
                  ticks: { stroke: "#fff", size: 5 },
                  tickLabels: { fontSize: 20, padding: 5, fill: "#fff" },
                }}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  axis: { stroke: "#fff" },
                  axisLabel: { fontSize: 20, padding: 30 },
                  grid: { stroke: "#fff" },
                  ticks: { stroke: "#fff", size: 5 },
                  tickLabels: { fontSize: 20, padding: 5, fill: "#fff" },
                }}
              />
              <VictoryLine
                interpolation="natural"
                style={{
                  data: {
                    stroke: "#fff",
                  },
                }}
                data={[
                  { x: "前6", y: 2 },
                  { x: "5", y: 3 },
                  { x: "4", y: 5 },
                  { x: "3", y: 4 },
                  { x: "2", y: 8 },
                  { x: "1", y: 7 },
                  { x: "今日", y: 5 },
                ]}
              />
            </VictoryChart>
          </ChartInnerContainer>
        </ChartContainer>
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
