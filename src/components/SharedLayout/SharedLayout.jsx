import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Sidebar from '../Sidebar/Sidebar';

export default function SharedLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef(null);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <Header
        onClick={() => {
          setIsOpen(true);
        }}
        isDesktop={isDesktop}
      />
      {isOpen && (
        <div ref={sidebarRef}>
          <Sidebar close={() => setIsOpen(false)} />
        </div>
      )}
      <Outlet />
    </>
  );
}
