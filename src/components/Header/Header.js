import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './Header.scss';

import logofull from './../../vbdlis-logo-white.svg';

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header>
      <div className="header-content container">
        <div id="logo" className="brand">
          <Link to="/"><img src={logofull} alt="" /></Link>
        </div>

        <div
          onClick={() => setActive(active ? false : true)}
          className={active ? "menu-toggle close" : "menu-toggle"}>
          <div className="menu-icon">
            <span className="bar top" />
            <span className="bar center" />
            <span className="bar bottom" />
            {/* <span className="bar-text">menu</span> */}
          </div>
        </div>
        <nav className={active ? "menu open" : "menu"}>
          <ul>
            <li className="menu-item"><Link to='about'>Hệ thống</Link></li>
            <li className="menu-item"><Link to='help'>Hướng dẫn</Link></li>
            <li className="menu-item"><Link to='help'>Tin tức</Link></li>
            <li className="menu-item"><Link to='help'>Liên hệ</Link></li>
          </ul>
          <ul>
            <li className="menu-item"><Link to='/login'>Đăng nhập</Link></li>
            <li className="menu-item"><Link to='/register' className="redBtn"><Button buttonSize="vbt-medium" buttonStyle="vbt-blue-solid">Đăng ký</Button></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header;
