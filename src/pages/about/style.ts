import styled from 'styled-components';
import { device } from '../../styles/responsive/device';

export const Container = styled.section`
  height: 110vh;
  background-color: ${(props) => props.theme.colors.secondBackground};
  transition: all 0.6s ease;
  display: flex;
  align-items: center;
  justify-content: center;

    .about-text {
      width: 80%;

      h2 {
        margin-bottom: 3vw;
        color: #8EB219;
        font-size: 30px;
      }

      p {
        font-size: 21px;
        color: ${(props) => props.theme.colors.colorTextApresentation};
        line-height: 1.4;
      }
    }

  @media ${device.laptopMin} and (max-width: 1024px) {
    .about-text {
        width: 80%;
        margin: 0 5% 5%;

        p {
          font-size: 18px;
        }
      }
  }

  @media ${device.tabletMin} and (max-width: 768px) {
      .about-text {
        width: 80%;
        margin: 0 5% 5%;

        p {
          font-size: 17px;
        }
      }
  }

  @media ${device.mobileMax} {
      .about-text {
        width: 90%;
        margin: 0 5% 5%;

        p {
          font-size: 16px;
        }
      }

  }
`;
