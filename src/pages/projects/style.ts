import styled from 'styled-components';

export const Container = styled.section`
:root {
  --primary: #6a59ff;
  --white: #ffffff;
  --bg: #f5f5f5;
}
  height: 120vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondBackground};

  .heading {
    color: #8EB219;
  }

  .container-project {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 700px;
    width: 500px;
    padding: 40px 32px 44px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.colorCarousel};
  }

  .project-image-frame {
    width: 100%;
    height: 390px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .container-project h3 {
    color: ${(props) => props.theme.colors.colorTextApresentation};
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    width: 350px;
  }

  .container-project a {
    text-decoration: none;
    padding: 20px 40px;
    background-color: #8EB219;
    color: white;
    font-family: "Roboto Serif", sans-serif;
    font-weight: 600;
    cursor: pointer;
  }

.swiper-wrapper {
  position: relative;
  width: 97.5%;
  z-index: 100;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
  height: 700px;
  transform: translate3d(97px, 0px, 0px);
}

.swiper-3d {
  perspective: 2193px;
}

.swiper_container {
  width: 97.5vw;
  height: 800px;
  position: relative;
}

.swiper-slide {
  margin-top: 5vh;
  width: 480px;
  /* height: 400px; */
  position: relative;
}

.swiper-slide .swiper-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
}

.slider-controler {
  position: relative;
  bottom: 20px;
  display: flex;
  z-index: 20000;
  align-items: center;
  justify-content: center;
}

.slider-controler .swiper-button-next {
  left: 58% !important;
  transform: translateX(-58%) !important;
}

.slider-controler .slider-arrow {
  left: 42%;
  transform: translateX(-42%);
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.slider-controler .slider-arrow::after {
  content: '';
}

.swiper-pagination {
  position: relative;
  width: 20rem !important;
  bottom: 1rem;
}

.swiper-pagination .swiper-pagination-bullet {
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.swiper-pagination .swiper-pagination-bullet-active {
  background: ${(props) => props.theme.colors.colorHeader};
}

.container-icons {
  display: flex;
  justify-content: space-between;
  width: 300px;
  position: absolute;
  bottom: -10px;
}

.container-icons a img {
  height: 25px;
  width: 25px;
  z-index: 300;
}

@media (min-width: 481px) and (max-width: 769px) {
  .swiper-wrapper {
    height: 700px;
  }

  .container-project {
    height: 700px;
    width: 425px;
    padding: 36px 24px 40px;
  }

  .swiper-slide {
    width: 420px;
  }

  .swiper_container {
    height: 800px;
  }

  .project-image-frame {
    height: 360px;
  }
  .slider-controler {
    bottom: 55px;
  }

  .slider-controler .swiper-button-next {
    left: 70% !important;
    transform: translateX(-70%) !important;
  }

  .slider-controler .swiper-button-prev {
    left: 30% !important;
    transform: translateX(-30%) !important;
  }

  .container-icons {
    width: 280px;
  }

  .container-icons a img {
    height: 20px;
    width: 20px;
  }
}

@media (max-width: 480px) {
  justify-content: center;
  height: 100vh;
  .container-project h3 {
    font-size: 18px;
    font-weight: 400;
    width: 250px;
  }

  .container-project a {
    font-weight: 500;
  }

  .swiper-wrapper {
    height: 650px;
  }

  .container-project {
    height: 500px;
    width: 355px;
    padding: 20px 16px 28px;
  }

  .swiper_container {
    height: 750px;
  }
  .swiper-slide {
    height: 550px;
    width: 357px;
  }
  .project-image-frame {
    height: 240px;
  }
  .slider-controler {
    bottom: 55px;
  }
  .slider-controler .swiper-button-next {
    left: 70% !important;
    transform: translateX(-70%) !important;
  }
  .slider-controler .swiper-button-prev {
    left: 30% !important;
    transform: translateX(-30%) !important;
  }
  .container-icons {
    width: 280px;
  }
  .container-icons a img {
    height: 20px;
    width: 20px;
  }
}
`;
