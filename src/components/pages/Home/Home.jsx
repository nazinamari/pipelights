import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <h2>
            <Link to="/catalog">Catalog</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/collections">Collections</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/photography">Photography</Link>
          </h2>
        </li>
      </ul>
    </div>
  );
}
