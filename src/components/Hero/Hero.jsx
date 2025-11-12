import Container from '../../shared/components/Container/Container';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.hero__wrapper}>
          <h1 className={css.title}>HANDCRAFTED LAMPS & FURNITURE</h1>
          <p className={css.description}>
            Handmade lamps and furniture from pipes or old cameras with Edison
            bulbs
          </p>
        </div>
      </Container>
    </section>
  );
}
