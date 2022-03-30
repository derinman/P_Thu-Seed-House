import React, { useRef, useEffect, useState } from "react";

import { VictoryChart, VictoryAxis, VictoryTheme, VictoryLine } from "victory";

import houseImg from "../img/A8.png";

import {
  UpperContainer,
  LowerContainer,
  HouseImgContainer,
  UpperClockContainer,
  HouseImg,
  IndexContainer,
  IndexItem,
  PieContainer,
  Pie,
  PieIndex,
  LowerClockContainer,
  ChartContainer,
  ChartInnerContainer,
} from "./style/homeStyle.js";

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
    // console.log(divRef);
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
          <HouseImg style={{ backgroundImage: `url(${houseImg})` }}/>
        </HouseImgContainer>
        <IndexContainer>
          <IndexItem to={"/solar"}>
            <div>⬜️ 太陽能發電率</div>
            <div>
              <div>PV</div>
              <div>90.2</div>
              <div>w</div>
            </div>
            <div>周平均 93 W</div>
          </IndexItem>
          <IndexItem to={"/algae"}>
            <div>⬜️ 綠藻淨化指數</div>
            <div>
              <div>O₂</div>
              <div>545</div>
              <div>PPM</div>
            </div>
            <div>周平均 550 PPM</div>
          </IndexItem>
          <IndexItem to={"/air"}>
            <div>⬜️ 空氣環境品質</div>
            <div>
              <div>CO₂</div>
              <div>729</div>
              <div>PPM</div>
            </div>
            <div>周平均 793 PPM</div>
          </IndexItem>
          <IndexItem to={"/hydroponics"}>
            <div>⬜️ 水耕循環系統</div>
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

export default Home;
