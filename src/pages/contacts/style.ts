import styled from 'styled-components';
import { device } from '../../styles/responsive/device';

export const Container = styled.section`
  height: 110vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;

  .contacts-image img {
    height: 350px;
  }

  .text-contacts h2 {
    color: ${(props) => props.theme.colors.colorTextApresentation};
    font-size: 36px;
    width: 40vw;
    margin-bottom: 2vh;
  }

  .text-contacts p {
    color: ${(props) => props.theme.colors.colorTextApresentation};
    font-size: 13px;
    width: 22vw;
    margin-bottom: 15vh;
  }

  .contacts-icons img {
    background-color: ${(props) => props.theme.colors.colorHeader};
    margin-right: 15px;
    height: 50px;
    padding: 12px;
    border-radius: 45%;
  }

  .contacts-icons img:hover {
    box-shadow: 0px 0px 20px 8px ${(props) => props.theme.colors.colorHeader};
    border-radius: 35%;
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
