import AboutMaker from '../../components/AboutMaker/AboutMaker';
import BestSellers from '../../components/BestSellers/BestSellers';
import Compaign from '../../components/Compaign/Compaign';
import Hero from '../../components/Hero/Hero';
import NewProductsSlider from '../../components/NewProductsSlider/NewProductsSlider';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import Reviews from '../../components/Reviews/Reviews';
import WhoIsItFor from '../../components/WhoIsItFor/WhoIsItFor';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoIsItFor />
      <NewProductsSlider />
      <AboutMaker />
      <Reviews />
      <BestSellers />
      <Compaign />
      <PhotoGallery />
    </>
  );
}
