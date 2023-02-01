import './Header.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

import logofull from './../../vbdlis-logo-white.svg';
import up_icon from '../../images/arrow-up-white.svg';
import down_icon from '../../images/arrow-down-white.svg';
import DD_ICON1 from '../../images/setting.svg';
import DD_ICON2 from '../../images/data-check.svg';

const Header = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const ref = useRef();

  const useOnClickOutside = (ref, handler) => {
    useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }

  useOnClickOutside(ref, () => setShow(false));

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
            <li ref={ref} className={show ? 'menu-item active' : 'menu-item'}>
              <Link onClick={() => setShow(show ? false : true)}>
                Hệ thống
                <img width={'24px'} height={'24px'} src={show ? up_icon : down_icon} alt="" />
              </Link>
              {show ? (
                <div className="dropdown-cols">
                  <div className="center">
                    <ul className="dropdown">
                      <li className="menu-item" onClick={() => setShow(false)}>
                        <Link to='/operating-app'>
                          <div className='dropdown-icon'>
                            <img width={'24px'} height={'24px'} src={DD_ICON1} alt="" />
                          </div>
                          Hệ thống vận hành cơ sở dữ liệu đất đai
                        </Link></li>
                      <li className="menu-item" onClick={() => setShow(false)}>
                        <Link to='/constructor-app'>
                          <div className='dropdown-icon'>
                            <img width={'24px'} height={'24px'} src={DD_ICON2} alt="" />
                          </div>
                          Hệ thống xây dựng cơ sở dữ liệu đất đai
                        </Link></li>
                    </ul>
                  </div>
                </div>
              ) : null}
            </li>
            <li className="menu-item"><Link to='help'>Hướng dẫn</Link></li>
            <li className="menu-item"><Link to='news'>Tin tức</Link></li>
            <li className="menu-item"><Link to='contactus'>Liên hệ</Link></li>
          </ul>
          <ul>
            <li className="menu-item"><Link to='/login'>Đăng nhập</Link></li>
            <li className="menu-item"><Link to='/register' className="redBtn"><Button buttonSize="vbt-medium" buttonStyle="vbt-blue-solid">Đăng ký</Button></Link></li>
          </ul>
        </nav>
      </div>
    </header >
  )
}
export default Header;
