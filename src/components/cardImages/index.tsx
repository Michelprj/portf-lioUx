type CardImagesProps = {
  imgProject: string,
  altProject: string,
  nameProject: string,
  linkBehance: string,
};

function CardImages({ imgProject,
  altProject,
  nameProject,
  linkBehance }: CardImagesProps) {
  return (
    <div className="container-project">
      <img
        src={ imgProject }
        alt={ altProject }
        className="swiper-img"
      />
      <h3>{nameProject}</h3>
      <a
        href={ linkBehance }
        target="_blank"
        rel="noreferrer"
      >
        Visualizar
      </a>
    </div>
  );
}

export default CardImages;
