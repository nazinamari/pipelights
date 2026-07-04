import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

export default function SharedLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isDesktop) {
      closeSidebar();
    }
  }, [isDesktop]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        closeSidebar();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <Header onClick={toggleSidebar} isDesktop={isDesktop} />

      {isOpen && (
        <div ref={sidebarRef}>
          <Sidebar close={closeSidebar} />
        </div>
      )}

      <Outlet />
    </>
  );
}
