import styled, { createGlobalStyle } from 'styled-components';

const theme = localStorage.getItem('themeLight');

console.log('theme', theme);


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s linear;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  z-index: 1;
  width: 65px;
  height: 30px;
  cursor: pointer;

  &:checked + label .ball {
    transform: translateX(23px);
  }

  @media(min-width: 769px) and (max-width: 1024px) {
    width: 37px;
    height: 18px;

    &:checked + label .ball {
      transform: translateX(15px);
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 37px;
    height: 18px;

    &:checked + label .ball {
      transform: translateX(12px);
    }
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 32px;

    &:checked + label .ball {
      transform: translateX(19px);
    }
  }
`;

export const Label = styled.label`
background-color: ${(props) => (props.theme.colors.themeMode ? '#8EB219' : '#04131A')};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.9s ease;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 1.4em;
  width: 2.8em;
  transform: scale(1.5);

  .ball {
    background-color: ${(props) => (props.theme.colors.themeMode ? '#04131A' : '#8EB219')};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  @media(min-width: 769px) and (max-width: 1024px) {
    height: 17px;
    width: 33px;
    padding: 4px;

    .ball {
      height: 15px;
      width: 15px;
      top: 1.4px;
      left: 2.4px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 0.8em;
    width: 1.6em;
    padding: 3px;

    .ball {
      height: 11px;
      width: 11px;
      top: 0.8px;
      left: 1.5px;
    }
  }

  @media (max-width: 480px) {
    height: 22px;
    width: 43px;
    padding: 7px;

    .ball {
      height: 18px;
      width: 18px;
      top: 2px;
      left: 3px;
    }
  }
`;