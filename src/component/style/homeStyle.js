import { Link } from "react-router-dom";

import styled from "styled-components";

import rwdConfig from "../../config/rwdConfig";

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
  width: 50%;
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
  width: 50%;
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

const IndexItem = styled(Link)`
  position: relative;
  width: 100%;
  color: #fff;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 1rem 2rem 1rem 0rem;
  //border 1px solid green;
  border-radius: 1rem;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    background-color: #38665c;
  }
  > div {
    &:nth-child(2) {
      display: flex;
      margin-top: 0.3rem;
      //border:1px solid red;
      > div {
        margin: 0rem 0rem 0rem 2rem;
        &:nth-child(1) {
          width: 6rem;
        }
        &:nth-child(2) {
          width: 6rem;
        }
        &:nth-child(3) {
          font-size: 1.2rem;
          margin-top: 0.8rem;
          //border:1px solid red;
        }
      }
    }
    &:nth-child(3) {
      display: none;
    }
  }
  @media ${rwdConfig.laptopL} {
    margin: 1rem 2rem 1rem 0rem;
    font-size: 1.5rem;
    > div {
      &:nth-child(2) {
        > div {
          &:nth-child(1) {
            width: 3rem;
          }
          &:nth-child(2) {
            width: 3rem;
          }
          &:nth-child(3) {
            font-size: 1rem;
            margin-top: 0.5rem;
          }
        }
      }
    }
    @media ${rwdConfig.tablet} {
      width: calc(50% - 2.25rem);
      flex-direction: column;
      justify-content: space-around;
      font-size: 1.2rem;
      margin: 0rem 0rem 1.5rem 1.5rem;
      border-radius: 1rem;
      background-color: #3d3834;
      > div {
        // border:1px solid red;
        &:nth-child(2) {
          > div {
            &:nth-child(1) {
              // border:1px solid red;
              font-size: 1.2rem;
              margin: 0.3rem 0rem 0rem 0rem;
            }
            &:nth-child(2) {
              font-size: 1.5rem;
              margin: 0rem 0rem 0rem 1rem;
            }
            &:nth-child(3) {
              font-size: 1.2rem;
              margin: 0.3rem 0rem 0rem 1rem;
            }
          }
        }
        &:nth-child(3) {
          display: block;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

const PieContainer = styled.div`
  position: relative;
  width: 35%;
  height: calc(100% - 2rem);
  //border: 1px solid yellow;
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
  //border: 1px solid #fff;
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
    --w: calc(${(props) => props.width} + 13vw);
    --h: calc(${(props) => props.height} + 13vw);
  }
  @media ${rwdConfig.mobileL} {
    --rw: calc(${(props) => props.ringWidth} - 0.5rem);
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
  @media ${rwdConfig.mobileL} {
    font-size: 1.1rem;
  }
`;

const LowerClockContainer = styled.div`
  position: relative;
  width: 15%;
  height: 100%;
  //border: 1px solid yellow;
  color: #fff;
  > div {
    &:nth-child(1) {
      font-size: 4rem;
      margin: 0rem 0rem 0rem 0rem;
    }
    &:nth-child(2) {
      font-size: 2rem;
      margin: 0rem 0rem 0rem 0rem;
    }
    &:nth-child(3) {
      position: fixed;
      bottom: 0;
      font-size: 2rem;
      margin: 0rem 0rem 2rem 0rem;
    }
  }
  @media ${rwdConfig.laptop} {
    > div {
      &:nth-child(1) {
        font-size: 3.5rem;
      }
      &:nth-child(2) {
        font-size: 1.7rem;
      }
      &:nth-child(3) {
        font-size: 1.7rem;
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
  //border: 1px solid yellow;
  @media ${rwdConfig.tablet} {
    width: 60%;
  }
`;

const ChartInnerContainer = styled.div`
  position: relative;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  top: 0%;
  left: 0%;
  background-color: #3d3834;
  border-radius: 1rem;
  //border: 1px solid yellow;
  @media ${rwdConfig.tablet} {
    left: 0;
    top: 0;
    background-color: #000;
    border: 5px solid #3d3834;
  }
`;

export {
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
  ChartInnerContainer
};
