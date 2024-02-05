import styled from 'styled-components';

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
    width: 80vw;
    justify-content: space-evenly;

    h3 {
      color: ${(props) => props.theme.colors.colorTextApresentation};
    }
  }

  .container-softwares {
    width: 50vw;
    .line-botton {
      background-color: #979797;
      height: 2px;
      width: 280px;
      margin: 5vh 0;
    }
  }

  .container-knowledge {
    width: 50vw;
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
`;
