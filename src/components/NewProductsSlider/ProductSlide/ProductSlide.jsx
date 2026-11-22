import css from './ProductSlide.module.css';

export default function ProductSlide({
  image,
  image2x,
  imageTablet,
  imageTablet2x,
  imageMobile,
  alt,
}) {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet={`${image} 1x, ${image2x} 2x`}
      />

      <source
        media="(min-width: 744px)"
        srcSet={`${imageTablet} 1x, ${imageTablet2x} 2x`}
      />

      <img className={css.image} src={imageMobile} alt={alt} />
    </picture>
  );
}
