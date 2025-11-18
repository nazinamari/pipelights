import Button from '../../shared/components/Button/Button';
import Container from '../../shared/components/Container/Container';
import css from './Hero.module.css';

export default function Hero() {
  const handleClick = () => {
    console.log('Primary button clicked!');
  };

  return (
    <section className={css.hero}>
      <Container>
        <div className={css.hero__wrapper}>
          <h1 className={css.title}>HANDCRAFTED LAMPS & FURNITURE</h1>
          <div className={css.hero__description_wrapper}>
            <p className={css.description}>
              Handmade lamps and furniture from pipes or old cameras with Edison
              bulbs
            </p>
            <Button variant="primary" onClick={handleClick}>
              View our works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
