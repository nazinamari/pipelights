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
        <div className={css.hero__inner}>
          <h1 className={css.hero__title}>HANDCRAFTED LAMPS & FURNITURE</h1>
          <div className={css.hero__info}>
            <Button variant="primary" onClick={handleClick}>
              View our works
            </Button>
            <p className={css.hero__description}>
              Handmade lamps and furniture from pipes
              <br />
              or old cameras with Edison bulbs
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
