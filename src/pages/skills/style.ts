import styled from 'styled-components';
import { device } from '../../styles/responsive/device';

export const Container = styled.section`
  height: 110vh;
  width: 97.5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    color: #8EB219;
  }

  .container-skills {
    display: flex;
    width: 90vw;
    justify-content: center;

    h3 {
      color: ${(props) => props.theme.colors.colorTextApresentation};
    }
  }

  .container-softwares {
    /* width: 20vw; */
    margin-right: 50px;
    .line-botton {
      background-color: #979797;
      height: 2px;
      width: 280px;
      margin: 5vh 0;
    }
  }

  .container-knowledge {
    width: 35vw;
    .line-botton {
      background-color: #979797;
      height: 2px;
      width: 600px;
      margin: 5vh 0;
    }

    .container-progress-bar {
      width: 320px;
      display: flex;
      
    }
  }

  @media (min-width: 1024px) and (max-width: 1249px) {
    .container-skills {
      width: 90vw;
      flex-direction: column-reverse;
    }

    .container-softwares {
      margin-top: 50px;
      margin-right: 50px;
      .line-botton {
        width: 90vw;
      }
    }

    .container-knowledge {
      width: 90vw;
      .line-botton {
        width: 90vw;
      }
    }
  }


  @media ${device.laptopMin} and (max-width: 1024px) {
    .container-skills {
      width: 90vw;
      flex-direction: column-reverse;
    }

    .container-softwares {
      margin-top: 50px;
      margin-right: 50px;
      .line-botton {
        width: 90vw;
      }
    }

    .container-knowledge {
      width: 90vw;
      .line-botton {
        width: 90vw;
      }
    }
  }

  @media ${device.tabletMin} and (max-width: 768px) {
    .container-skills {
      width: 90vw;
      flex-direction: column-reverse;
    }

    .container-softwares {
      margin-top: 50px;
      margin-right: 50px;
      .line-botton {
        width: 90vw;
      }
    }

    .container-knowledge {
      overflow-x: auto;
      width: 90vw;
      .line-botton {
        width: 90vw;
      }
    }
  }

  @media ${device.mobileMax} {
    .container-skills {
      width: 90vw;
      flex-direction: column-reverse;
    }

    .container-softwares {
      margin-top: 50px;
      margin-right: 50px;
      .line-botton {
        width: 90vw;
      }
    }

    .container-knowledge {
      overflow-x: auto;
      width: 90vw;
      .line-botton {
        width: 90vw;
      }
    }

  }
`;
