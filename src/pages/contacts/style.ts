import styled from 'styled-components';
import { device } from '../../styles/responsive/device';

export const Container = styled.section`
  height: 110vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .contacts-image img {
    height: 350px;
  }

  .text-contacts h2 {
    color: ${(props) => props.theme.colors.colorTextApresentation};
    font-size: 40px;
    width: 40vw;
    margin-bottom: 3vh;
    font-family: "Roboto Serif", sans-serif;
    font-weight: 500;
  }

  .text-contacts p {
    color: ${(props) => props.theme.colors.colorTextApresentation};
    font-size: 24px;
    width: 30vw;
    margin-bottom: 15vh;
    font-family: "Roboto Serif", sans-serif;
    font-weight: 500;
  }

  .contacts-icons img {
    background-color: ${(props) => props.theme.colors.colorHeader};
    margin-right: 15px;
    height: 50px;
    padding: 12px;
    border-radius: 10px;
  }

  .contacts-icons img:hover {
    box-shadow: 0px 0px 10px 5px ${(props) => props.theme.colors.colorHeader};
    border-radius: 5px;
  }

  @media ${device.tabletMin} and (max-width: 768px) {
    flex-direction: column-reverse;

    .contacts-text {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .contacts-image img {
      height: 250px;
    }

    .text-contacts {
      width: 80vw;
    }

    .text-contacts h2 {
      font-size: 34px;
      width: 80vw;
    }

    .text-contacts p {
      font-size: 12px;
      width: 80vw;
      margin-bottom: 2vh;
    }
  }

  @media ${device.mobileMax} {
    justify-content: space-evenly;
    flex-direction: column-reverse;
    
      .contacts-text {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      .contacts-image img {
        height: 250px;
      }

      .text-contacts h2 {
        font-size: 30px;
        width: 90vw;
      }

      .text-contacts p {
        font-size: 12px;
        width: 90vw;
        margin-bottom: 5vh;
      }
  }

`;
