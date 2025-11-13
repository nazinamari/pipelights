import Button from '../../shared/components/Button/Button';
import Container from '../../shared/components/Container/Container';
import css from './Hero.module.css';

export default function Hero() {
  const handleClick = () => {
    console.log('Primary button clicked!');
  };

  // обробник для submit кнопки у формі
  const handleSubmit = (e) => {
    e.preventDefault(); // щоб форма не перезавантажувала сторінку
    console.log('Form submitted!');
  };

  // обробник для кнопки-link
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
        {/* Primary button для UI */}
        <Button variant="primary" onClick={handleClick}>
          Click me
        </Button>

        {/* Primary button як submit у формі */}
        <form onSubmit={handleSubmit}>
          <Button variant="primary" type="submit">
            Submit form
          </Button>
        </form>

        {/* Default button */}
        <Button variant="default">Default</Button>

        {/* Link-style button */}
        <Button variant="link" onClick={handleLinkClick}>
          Go to page
        </Button>
      </Container>
    </section>
  );
}
