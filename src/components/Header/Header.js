import './Header.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button';
import { Animated } from 'react-animated-css';

import logoDark from './../../vbdlis-logo-white.svg';
import logoLight from './../../vbd-logo.svg';
import up_icon from '../../images/arrow-up-white.svg';
import down_icon from '../../images/arrow-down-white.svg';
import DD_ICON1 from '../../images/setting.svg';
import DD_ICON2 from '../../images/data-check.svg';

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState('');

  const ref = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/') || location.pathname.includes('/guides') || location.pathname === '/contactus' || location.pathname === '/news' || location.pathname === '/terms' || location.pathname === '/security') {
      setTheme('light-theme');
    }
    else {
      setTheme('')
    }
  }, [location.pathname]);

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

  const renderMemu = () => {
    return (
      <>
        <nav className={mobile ? "menu open" : "menu"}>
          <ul>
            {/* <li ref={ref} className={show ? `${getClassNameMenu('/sys-app')} menu-with-dropdown` : `${getClassNameMenu('/sys-app')}`}>
              <Link onClick={() => setShow(show ? false : true)}>
                Hệ thống
                <img width={'24px'} height={'24px'} src={show ? up_icon : down_icon} alt="" />
              </Link>
              {show || mobile ? (
                <div className="dropdown-cols">
                  <div className="center">
                    <ul className="dropdown">
                      <li className={getClassNameMenu('/operating-app')} onClick={() => setShow(false)}>
                        <Link to='/operating-app'>
                          <div className='dropdown-icon'>
                            <img width={'24px'} height={'24px'} src={DD_ICON1} alt="" />
                          </div>
                          Hệ thống vận hành Cơ sở dữ liệu Đất đai
                        </Link></li>
                      <li className={getClassNameMenu('/constructor-app')} onClick={() => setShow(false)}>
                        <Link to='/constructor-app'>
                          <div className='dropdown-icon'>
                            <img width={'24px'} height={'24px'} src={DD_ICON2} alt="" />
                          </div>
                          Hệ thống xây dựng Cơ sở dữ liệu Đất đai
                        </Link></li>
                    </ul>
                  </div>
                </div>
              ) : null}
            </li> */}
            <li className={getClassNameMenu('/guides')}><Link to='/operating-app'>Sản phẩm</Link></li>
            <li className={getClassNameMenu('/news')}><Link to='/news'>Tin tức</Link></li>
            <li className={getClassNameMenu('/contactus')}><Link to='/contactus'>Liên hệ</Link></li>
          </ul>
        </nav>
        <nav className={mobile ? "menu menu-right open" : "menu menu-right"}>
          <ul>
            <li className={getClassNameMenu('/login')}><Link to='/login'>Đăng nhập</Link></li>
            <li className={getClassNameMenu('/register')}><Link to='/contactus' className="redBtn"><Button buttonSize="vbt-medium" buttonStyle="vbt-red-solid">Đăng ký</Button></Link></li>
          </ul>
        </nav>
      </>
    )
  }

  const getClassNameMenu = (path) => {
    let string = '';
    if ((path === '/sys-app' && location?.pathname === '/operating-app') || (path === '/sys-app' && location?.pathname === '/constructor-app')) {
      string = 'menu-item active';
    }
    else {
      if (path === location?.pathname || (path === '/guides' && location.pathname.includes('/guides'))) {
        string = 'menu-item active'
      }
      else {
        string = 'menu-item'
      }
    }
    return string;
  }

  return (
    <header className={`default-theme ${theme}`}>
      <div className="header-content container">
        <div id="logo" className="brand">
          <Link to="/operating-app">
            <img src={theme === 'light-theme' ? logoLight : logoDark} alt="" />
          </Link>
        </div>

        <div
          onClick={() => setMobile(mobile ? false : true)}
          className={mobile ? "menu-toggle close" : "menu-toggle"}>
          <div className="menu-icon">
            <span className="bar top" />
            <span className="bar center" />
            <span className="bar bottom" />
          </div>
        </div>
        {
          !mobile ? renderMemu() : <Animated
            className='drawer-menu'
            animationIn={'slideInRight'}
            animationOut={'slideOutRight'}
            animationInDuration={250}
            animationOutDuration={250}
            isVisible
          >
            {renderMemu()}
          </Animated>
        }
      </div>
    </header>
  )
}
export default Header;
