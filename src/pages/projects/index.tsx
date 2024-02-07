import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Container } from './style';
import { i18n } from '../../translate/i18n';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CardImages from '../../components/cardImages';
import { projects } from '../../helpers/projects';

function Projects() {
  return (
    <Container id="projects">
      <h2 className="heading">{i18n.t('projectText.subtitle')}</h2>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={ {
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 7.5,
        } }
        pagination={ { el: '.swiper-pagination', clickable: true } }
        navigation={ {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true,
        } }
        modules={ [EffectCoverflow, Pagination, Navigation] }
        className="swiper_container"
      >
        { projects.map((project) => (
          <SwiperSlide key={ project.id }>
            <CardImages
              imgProject={ project.imgProject }
              altProject={ project.altProject }
              nameProject={ project.nameProject }
              linkBehance={ project.linkBehance }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Projects;
