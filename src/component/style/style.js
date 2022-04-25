import styled from "styled-components";

import rwdConfig from "../../config/rwdConfig";

const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  // border: 1px red solid;
`;

const Title = styled.div`
  margin: 2rem;
  color: #fff;
  font-size: 2rem;
`;

const LowerContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: row;
  // border: 1px red solid;
  @media ${rwdConfig.tablet} {
    flex-direction:column;
  }
}
`;

const HouseImgWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 60%;
  @media ${rwdConfig.tablet} {
    height: 55%;
    width: 100%;
  }
`;

const HouseImg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  animation: imgBlink .2s  ease-in-out alternate infinite;
  animation-play-state: ${props=>props.animation?'running':'paused'};
  @keyframes imgBlink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.1;
    }
  }
  // border: 1px yellow solid;
`;

const IndexOuterContainer = styled.div`
  position: relative;
  height: 100%;
  width: 40%;
  @media ${rwdConfig.tablet} {
    height: 45%;
    width: 100%;
  }
  // border: 1px green solid;
`;

const IndexContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media ${rwdConfig.tablet} {
    width: 100%;
  }
  // border: 1px green solid;
`;

const IndexItem = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  color: #fff;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 2rem 1rem 0rem;
  // border 1px solid green;
  > div {
    &:nth-child(2) {
      display: flex;
      margin-top: 0.3rem;
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
      // border:1px solid red;
    }
    // border:1px solid red;
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
          }
        }
      }
    }
  }
`;

const GobackBtn = styled.div`
  position: fixed;
  width: 4rem;
  padding: 0.4rem 0.8rem;
  bottom: 2rem;
  left: 2rem;
  text-align: center;
  color: #fff;
  background-color: #38665c;
  border-radius: 0.5rem;
  &:hover {
    border: 2px solid #fff;
  }
`;

export {
  TitleContainer,
  Title,
  LowerContainer,
  HouseImgWrapper,
  HouseImg,
  IndexOuterContainer,
  IndexContainer,
  IndexItem,
  GobackBtn,
};
