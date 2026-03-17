import logo from '/src/components/Logo/img/logo.jpg';
import css from './Logo.module.css';

export default function Logo() {
  return (
    <div className={css.logo__wrapper}>
      <img className={css.img} src={logo} alt="Logo" />
      <p className={css.logo}>PipeLights MaxWeb</p>
    </div>
  );
}
