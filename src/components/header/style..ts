import styled from 'styled-components';
import { device } from '../../styles/responsive/device';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.colorHeader};
  display: flex;
  justify-content: space-around;
  height: 3em;
  left: 0;
  top: 0;
  transition: all 0.6s ease;
  position: fixed;
  width: 100%;
  z-index: 10000;
  box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.1);

  .container-textHeader-and-buttons {
    display: flex;
    width: 100vw;
    justify-content: end;
    margin-right: 40px;
    height: 3em;
    align-items: center;
  }
  a.active {
    color: ${(props) => props.theme.colors.hoverLinkHeader};
  }
  .btn-hamburger {
    display: none;
  }
  .logo {
    width: 2.7em;
    height: 2.7em;
    margin-left: 40px;
  }
  @media ${device.laptopMin} and (max-width: 1024px) {
    height: 2.5em;
    .logo {
      width: 2em;
      height: 2em;
      margin-left: 2vw;
  }
  }
  @media ${device.tabletMin} and (max-width: 768px) {
  height: 2.1em;
    .logo {
      width: 2em;
      height: 2em;
      margin-left: 2vw;
  }
  }
  @media ${device.mobileMax} {
    justify-content: space-around;
    position: fixed;
    z-index: 10000;
    height: 3.5em;
    .btn-hamburger {
      display: flex;
      background-color: transparent;
      cursor: pointer;
      position: absolute;
      top: 80px;
      right: calc(100% - 95%);
      z-index: 1000;
    }
    .actived {
      display: flex;
      flex-direction: column;
      opacity: 1;
      transition: 0.7s;
      visibility: visible;
    }
    .hamburger {
      width: 35px;
      border-top: 3px solid;
      color: ${(props) => props.theme.colors.hoverLinkHeader};
      transition: .5s;

    }
    .hamburger::after, .hamburger::before {
      content: '';
      display: block;
      width: 35px;
      height: 3px;
      background: currentColor;
      margin-top: 5px;
      transition: .5s;
    }
    .hamburgerOpen {
      width: 35px;
      border-top: 3px solid;
      border-top-color: transparent;
      color: ${(props) => props.theme.colors.colorHeader};
      
    }
    .hamburgerOpen::after {
      content: '';
      display: block;
      width: 35px;
      height: 3px;
      background: ${(props) => props.theme.colors.colorTextApresentation};
      margin-top: 5px;
      transition: 0.4s;
      transform: rotate(-135deg);
      position: absolute;
      bottom: 0px;
    }
    .hamburgerOpen::before {
      content: '';
      display: block;
      width: 35px;
      height: 3px;
      background: ${(props) => props.theme.colors.colorTextApresentation};
      margin-top: 5px;
      transition: 0.4s;
      transform: rotate(135deg);
    }
    .logo {
      width: 3em;
      height: 3em;
      margin-right: 30vw;
    }

    .actived a.active {
      color: ${(props) => props.theme.colors.hoverLinkHeader};
    }
  }
`;

export const TextsHeader = styled.div`
  display: flex;
  margin-right: 30px;
  a {
    color: #FFF;
    padding: 0 10px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
  a:hover {
    color: ${(props) => props.theme.colors.hoverLinkHeader};
    transition: all 0.5s ease;
  }
  @media ${device.laptopMin} and (max-width: 1024px) {
    a {
      padding: 0 22px;
      font-size: 16px;
      font-weight: 500;
    }
  }
  @media ${device.tabletMin} and (max-width: 768px) {
  margin-right: 5px;
    a {
      padding: 0 1vw;
      font-size: 14px;
      font-weight: 500;
    }
  }
  @media ${device.mobileMax} {
    position: absolute;
    top: 130px;
    right: calc(100% - 95%);
    opacity: 0;
    z-index: 1001;
    visibility: hidden;
    
    a {
      background-color: ${(props) => props.theme.colors.colorHeader};
      width: 100%;
      margin-bottom: 17px;
      font-weight: 400;
    }
  }
`;

export const Select = styled.select`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 3px;
  color: white;
  padding: 4.5px 6px 4.5px 35px;
  cursor: pointer;
  font-family: Roboto Slab;
  font-weight: 700;

  margin-right: 30px;

  option {
    border: 4px solid white;
    background-color: ${(props) => props.theme.colors.optionSelectColor};
  }
  @media ${device.laptopMin} and (max-width: 1024px) {
    border: 1px solid white;
    border-radius: 3px;
    color: white;
    padding: 4px 5px 4px 25px;
    font-weight: 500;
    font-size: 9px;
  }
  @media ${device.tabletMin} and (max-width: 768px) {
    border: 1px solid white;
    border-radius: 3px;
    color: white;
    padding: 3px 4px 3px 15px;
    font-weight: 500;
    font-size: 7px;
  }
  @media ${device.mobileMax} {
    border: 1px solid white;
    border-radius: 3px;
    color: white;
    padding: 5px 10px 5px 35px;
    font-weight: 500;
    font-size: 12px;
  }
`;
export const ContainerSelector = styled.div`
  position: relative;
  .languageIcon {
    position: absolute;
    left: 7px;
    top: 3px;
    height: 22px;
  }
  @media ${device.laptopMin} and (max-width: 1024px){
    .languageIcon {
      position: absolute;
      left: 4px;
      top: 5px;
      height: 16px;
    }
  }
  @media ${device.tabletMin} and (max-width: 768px) {
    .languageIcon {
      position: absolute;
      left: 4.5px;
      top: 8px;
      height: 12px;
    }
  }
  @media ${device.mobileMax} {
    .languageIcon {
      position: absolute;
      left: 6px;
      top: 4.4px;
      height: 22px;
    }
  }
`;
