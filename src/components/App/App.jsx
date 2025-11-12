import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../../pages/Home/Home';
import Catalog from '../../pages/Catalog/Catalog';
import Photography from '../../pages/Photography/Photography';
import Collections from '../../pages/Collections/Collections';
import SharedLayout from '../SharedLayout/SharedLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/photography" element={<Photography />} />
      </Route>
    </Routes>
  );
}

export default App;
