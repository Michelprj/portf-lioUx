import styled from 'styled-components';
import { device } from '../../styles/responsive/device';

export const Container = styled.section`
  display: flex;
  align-items: center;
  width: 98vw;
  height: calc(100vh + 55px);
  flex-direction: row-reverse;
  justify-content: space-evenly;
  position: relative;

  .geometric-image {
    width: 100vw;
    height: auto;
    z-index: 0;
    position: absolute;
    top: 48px;
  }

  .profile {
    z-index: 1;
  }

  .profile img {
    width: 35vh;
    }

  .container-text {
    position: relative;
    width: 450px;
    z-index: 20;

    .first-child {
      font-size: 25px;
      font-weight: 500;
    }

    .change-color {
      color: #8EB219;
      font-size: 40px;
      font-weight: 500;
    }

    p {
      color: ${(props) => props.theme.colors.colorTextApresentation};
      transition: all 0.6s ease;
      font-size: 26px;
      font-family: "Roboto Serif";
      font-weight: 400;
    }

  }

  p {
    font-size: 30px;
  }

  @media ${device.laptopMin} and (max-width: 1024px) {
    height: calc(100vh + 55px);

    .geometric-image {
      top: 40px;
      width: 102vw;
    }

    .profile img {
      width: 35vh;
      margin: 0vh 8vw 0 5vw; 
    }

    .container-text {
    position: relative;
    margin: 15vh 0 0; 


    .change-color {
      font-size: 32px;
      font-weight: 500;
    }

    p {
      color: ${(props) => props.theme.colors.colorTextApresentation};
      transition: all 0.6s ease;
      font-size: 24px;
    }
  }

  p {
    font-size: 18px;
    padding-left: 30px;
  }

  }

  @media ${device.tabletMin} and (max-width: 768px) {
    flex-direction: column;
    height: calc(100vh + 50px);

    .geometric-image {
      top: 34px;
      width: 102vw;
    }

    .profile img {
      width: 35vh;
      margin: 15vh 0 0;
    }

    .container-text {
    position: relative;
    margin: 8vh 0 0 6vw;
    width: 65vw;

    .change-color {
      font-size: 32px;
      font-weight: 500;
    }

    p {
      color: ${(props) => props.theme.colors.colorTextApresentation};
      transition: all 0.6s ease;
      font-size: 24px;
    }
  }

  p {
    font-size: 20px;
    padding-left: 15px;
  }

  }
  @media ${device.mobileMax} {
    flex-direction: column;
    width: 95vw;
    height: calc(100vh + 56px);

    .geometric-image {
      top: 34px;
      width: 105vw;
    }

    .profile img {
    width: 70vw;
    margin: 15vh 0 0;
    }

    .container-text {
    position: relative;
    margin: 15vw 0 0;
    width: 80vw;

    .change-color {
      font-size: 30px;
      font-weight: 500;
    }

    p {
      color: ${(props) => props.theme.colors.colorTextApresentation};
      transition: all 0.6s ease;
      font-size: 19px;
    }
  }

  p {
    font-size: 5vw;
    padding-left: 15px;
  }

  }
`;

export const BlurFilter = styled.div<{ blur?: boolean }>`
  ${(props) => props.blur && 'filter: blur(5px);'}
`;
