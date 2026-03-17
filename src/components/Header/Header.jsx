import { Link } from 'react-router-dom';
import css from './Header.module.css';
import Container from '../../shared/components/Container/Container';
import Logo from '../Logo/Logo';

export default function Header({ onClick, isDesktop }) {
  const menuItems = [
    { name: 'Catalog', path: '/catalog' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={css.header}>
      <Container>
        <div className={css.inner}>
          <Logo />
          {isDesktop && (
            <nav className={css.nav}>
              {menuItems.map((item) => (
                <Link key={item.name} to={item.path} className={css.link}>
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          {!isDesktop && (
            <button type="button" onClick={onClick} className={css.burger}>
              ☰
            </button>
          )}
        </div>
      </Container>
    </header>
  );
}
