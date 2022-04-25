import React, { useRef, useEffect, useState } from "react";

import { VictoryChart, VictoryAxis, VictoryTheme, VictoryLine } from "victory";

import axios from "axios";

import {
  UpperContainer,
  LowerContainer,
  HouseImgContainer,
  UpperClockContainer,
  HouseImg,
  HouseVideo,
  IndexContainer,
  IndexItem,
  PieContainer,
  Pie,
  PieIndex,
  LowerClockContainer,
  ChartContainer,
  ChartInnerContainer,
} from "./style/homeStyle.js";

import houseImg from "../img/A8.png";
import houseVideo from "../img/houseVideo.mp4";

const hydroponicEcUrl = "http://140.128.191.90:8080/avg/hydroponic-ec";
const hydroponicPhUrl = "http://140.128.191.90:8080/avg/hydroponic-ph";
const hydroponicTempUrl = "http://140.128.191.90:8080/avg/hydroponic-temp";

//"http://140.128.191.90/avg/city-CO2"
//"http://140.128.191.90/avg/city-PM25"

//"140.128.191.90:8080/avg/taichung-PM2.5"
//"140.128.191.90:8080/avg/taichung-O3"

const Home = () => {
  //hydroponic
  const [hydroponicEc, setHydroponicEc] = useState();
  const [hydroponicPh, setHydroponicPh] = useState();
  const [hydroponicTemp, setHydroponicTemp] = useState();

  const [isChart, setIsChart] = useState(false);
  const [divSize, setDivSize] = useState({});
  const divRef = useRef();

  // const fetchData = () => {
  //   axios
  //     .get(hydroponicTempUrl)
  //     .then((res) => {
  //       setSensorData({ ...res.data });
  //       console.log({ ...res.data });
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const getSensorData2 = (url) => {
  //   return axios.get(url);
  // };

  const fetchData = () => {
    axios
      .all([
        getSensorData(hydroponicEcUrl),
        getSensorData(hydroponicPhUrl),
        getSensorData(hydroponicTempUrl),
      ])
      .then(
        axios.spread((data1, data2, data3) => {
          console.log("hydroponicEcUrl:", data1);
          console.log("hydroponicPhUrl:", data2);
          console.log("hydroponicTempUrl:", data3);
          setHydroponicEc(data1.data.sensor.reading);
          setHydroponicPh(data2.data.sensor.reading);
          setHydroponicTemp(data3.data.sensor.reading);
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };

  const getSensorData = async (url) => {
    try {
      const get = await axios.get(url);
      return get;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    let interval = setInterval(() => {
      fetchData();
    }, 1000 * 5);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   console.log("hydroponicEc", hydroponicEc);
  //   console.log("hydroponicPh", hydroponicPh);
  //   console.log("hydroponicTemp", hydroponicTemp);
  // }, [hydroponicEc, hydroponicPh, hydroponicTemp]);

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

          <HouseImg>
            <HouseVideo
              src={houseVideo}
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
            />
          </HouseImg>

          {/* <HouseImg style={{ backgroundImage: `url(${houseImg})` }} /> */}
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
              <div>{hydroponicTemp}</div>
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
