import Button from '../../shared/components/Button/Button';
import Container from '../../shared/components/Container/Container';
import css from './Hero.module.css';
import clsx from 'clsx';

export default function Hero() {
  const handleClick = () => {
    console.log('Primary button clicked!');
  };

  return (
    <section className={css.hero}>
      <Container>
        <div className={css.heroInner}>
          <h1 className={clsx('headingHero', css.heroTitle)}>
            HANDCRAFTED LAMPS & FURNITURE
          </h1>
          <div className={css.heroInfo}>
            <Button variant="primary" onClick={handleClick}>
              View our works
            </Button>
            <p className={clsx('bodyBig', css.heroDescription)}>
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
