import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../style/NavBar.css'


function NavBar() {
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={transparent ? 'transparent' : ''}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Documentation">Documentation</Link>
        </li>
        <li>
          <Link to="/Demo">Demo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;