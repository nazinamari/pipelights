import { Link } from 'react-router-dom';
import css from './Header.module.css';
import Container from '../../shared/components/Container/Container';
import Logo from '../Logo/Logo';

export default function Header({ onClick, isTabletOrDesktop }) {
  const menuItems = [
    { name: 'Catalog', path: '/catalog' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={css.header}>
      <Container>
        <Logo />
        {isTabletOrDesktop && (
          <nav>
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path} className={css.link}>
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {!isTabletOrDesktop && (
          <button type="button" onClick={onClick} className={css.burger}>
            ☰
          </button>
        )}
      </Container>
    </header>
  );
}
