import * as images from './img';
import productsData from './data/products.json';
import ProductSlide from './ProductSlide/ProductSlide';
import Slider from '../../shared/components/Slider/Slider';
// import css from './NewProductsSlider.module.css';

const products = productsData.map((product) => ({
  ...product,
  image: images[product.image],
  image2x: images[product.image2x],
  imageTablet: images[product.imageTablet],
  imageTablet2x: images[product.imageTablet2x],
  imageMobile: images[product.imageMobile],
}));

export default function NewProductsSlider() {
  return (
    <>
      <h2 className="headingSection">NewProductsSlider</h2>
      <Slider data={products} component={ProductSlide} />
    </>
  );
}
