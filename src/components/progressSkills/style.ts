import styled from "styled-components";

export const Container = styled.div`

  height: 90px;
  h4 {
    color: ${(props) => props.theme.colors.colorTextApresentation};
  }

  .container-progress-bar {
    position: relative;
    margin: 20px 0;
  }

  .background-progress-bar {
    position: absolute;
    background-color: #D9D9D9;
    width: 280px;
    height: 30px;
  }

  .progress-bar {
    position: absolute;
    background-color: #8EB219;
    height: 30px;
  }
`;