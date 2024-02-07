import styled from 'styled-components';
import { device } from '../../styles/responsive/device';

export const Container = styled.div`
  height: 4em;
  width: 99vw;
  background-color: ${(props) => props.theme.colors.colorHeader};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -10px;

  p {
    font-size: 10px;
    color: ${(props) => props.theme.colors.colorTextApresentation};
  }

  @media ${device.tabletMin} and (max-width: 768px) {
    p {
      font-size: 9px;
    }
  }

  @media ${device.mobileMax} {
    p {
      font-size: 8px;
      width: 50%;
    }
  }
`;
