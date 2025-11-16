import Button from '../../shared/components/Button/Button';
import Container from '../../shared/components/Container/Container';
import css from './Hero.module.css';

export default function Hero() {
  const handleClick = () => {
    console.log('Primary button clicked!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  const handleDefaultClick = () => {
    console.log('Default click');
  };

  const handleLinkClick = () => {
    console.log('Link button clicked!');
  };

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

        {/* Primary (звичайна кнопка) */}
        <Button variant="primary" onClick={handleClick}>
          Click me
        </Button>

        <form onSubmit={handleSubmit}>
          <Button variant="primary" type="submit">
            Submit form
          </Button>
        </form>

        <Button variant="default" onClick={handleDefaultClick}>
          Default
        </Button>

        <Button variant="link" onClick={handleLinkClick}>
          Go to page
        </Button>

        <Button variant="link" active={true} onClick={handleDefaultClick}>
          Default
        </Button>
      </Container>
    </section>
  );
}
