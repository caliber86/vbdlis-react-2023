import './Guides.scss';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams, Link, useLocation } from 'react-router-dom';
import { getMenus, getMenu } from "./menudata";
import GuideApp1Document from './Guides/GuideApp1Document';
import GuideApp1Video from './Guides/GuideApp1Video';
import GuideApp2Document from './Guides/GuideApp2Document';
import GuideApp2Video from './Guides/GuideApp2Video';
import DataHelper from '../../helper/data.helper';

const GuideMenu = (props) => {

  // const { menuId } = useParams();
  const location = useLocation();

  switch (location.pathname) {
    case '/guides/operating-app':
      return (
        <>
          {"Tất cả tài liệu"}
          <GuideApp1Document />
          <GuideApp1Video />
        </>
      )
    case '/guides/operating-app/document':
      return (
        <GuideApp1Document />
      )
    case '/guides/operating-app/video':
      return (
        <GuideApp1Video />
      )
    case '/guides/constructor-app':
      return (
        <>
          {"Tất cả tài liệu"}
          <GuideApp2Document />
          <GuideApp2Video />
        </>
      )
    case '/guides/constructor-app/document':
      return (
        <GuideApp2Document />
      )
    case '/guides/constructor-app/video':
      return (
        <GuideApp2Video />
      )
    default:
      return null;
  }
}

const Guides = () => {

  const menus = getMenus();
  const [scrolling, setScrolling] = useState();
  const location = useLocation();

  const handleScroll = () => {
    let bodyHeight = document.getElementById('root').clientHeight;
    let footerHeight = document.getElementById('footer').clientHeight;
    // 450 = height header + height title
    if (window.pageYOffset >= 450) {
      setScrolling(true);
    }
    else {
      setScrolling(false);
    }
    if ((window.pageYOffset + 250 + footerHeight) > bodyHeight) {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className='guides-content'>
      <div className='guides-banner container'>
        <h1>Hướng dẫn và tài nguyên</h1>
        <p>Một bộ sưu tập các hướng dẫn và tài nguyên dành riêng cho việc xây dựng, triển khai các ứng dụng trong hệ thống</p>
      </div>
      <div className={scrolling ? 'guides-sticky' : ''}>
        <div className='container' style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
          {/* do not delete empty div, use padding 1rf when sticky left menu */}
          {scrolling && <div></div>}
          <div className={scrolling ? 'guides-left-content sticky' : 'guides-left-content'}>
            <ul>
              {menus.map(({ name, id, subtabs }) => (
                <li key={id} className={location?.pathname === `/guides/${id}` ? "left-menu-item active" : "left-menu-item"}>
                  <Link className='menu-guides-title' to={id}>{name}</Link>
                  <ul>
                    {subtabs.map((sub) => (
                      <li key={sub.id} className={location?.pathname === `/guides/${id}/${sub.id}` ? "left-menu-item active" : "left-menu-item"}>
                        <Link className='guides-sub-menu' to={`${id}/${sub.id}`}>{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className='guides-right-content'>
            <Routes>
              <Route path=":menuId/*" element={<GuideMenu />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Guides;