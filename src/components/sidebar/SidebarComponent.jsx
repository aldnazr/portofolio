import { Outlet, Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './sidebar.css';
import { useState } from 'react';

const SidebarComponent = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? 'aside show-menu' : 'aside'}>
        <AnchorLink href="#home" className="nav_logo">
          <h1>
            IQ<span>.</span>
          </h1>
        </AnchorLink>

        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="nav_item">
                <AnchorLink href="#home" className="nav_link">
                  <i className="icon-home"></i>
                </AnchorLink>
              </li>
              <li className="nav_item">
                <AnchorLink href="#about" className="nav_link">
                  <i className="icon-user-following"></i>
                </AnchorLink>
              </li>
              <li className="nav_item">
                <AnchorLink href="#ability" className="nav_link">
                  <i className="icon-briefcase"></i>
                </AnchorLink>
              </li>
              <li className="nav_item">
                <AnchorLink href="#resume" className="nav_link">
                  <i className="icon-graduation"></i>
                </AnchorLink>
              </li>
              <li className="nav_item">
                <AnchorLink href="#porto" className="nav_link">
                  <i className="icon-layers"></i>
                </AnchorLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav_footer">
          <span className="copyright">&copy; 2024 - 2025.</span>
        </div>
        <Outlet />
      </aside>

      <div className={toggle ? 'nav_toggle nav_toggle-open' : 'nav_toggle'} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default SidebarComponent;
