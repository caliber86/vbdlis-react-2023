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
    case '/guides/app1':
      return (
        <>
          {"Tất cả tài liệu"}
          <GuideApp1Document />
          <GuideApp1Video />
        </>
      )
    case '/guides/app1/document':
      return (
        <GuideApp1Document />
      )
    case '/guides/app1/video':
      return (
        <GuideApp1Video />
      )
    case '/guides/app2':
      return (
        <>
          {"All"}
          <GuideApp2Document />
          <GuideApp2Video />
        </>
      )
    case '/guides/app2/document':
      return (
        <GuideApp2Document />
      )
    case '/guides/app2/video':
      return (
        <GuideApp2Video />
      )
    default:
      return null;
  }
}

const Guides = () => {

  // useEffect(() => {
  //   let url = './../../content/raw/guides.json';
  //   (async () => {
  //     const rs = await DataHelper.getDataJson(url);
  //     console.log(rs)
  //   })();
  // }, []);

  const menus = getMenus();

  return (
    <div className='guides-content'>
      <div className='guides-banner container'>
        <h1>Hướng dẫn và tài nguyên</h1>
        <p>Một bộ sưu tập các hướng dẫn và tài nguyên dành riêng cho việc xây dựng, triển khai các ứng dụng trong hệ thống</p>
      </div>
      <div className='container' style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
        <div className='guides-left-content'>
          <ul>
            {menus.map(({ name, id, subtabs }) => (
              <li key={id}>
                <Link to={id}>{name}</Link>
                <ul>
                  {subtabs.map((sub) => (
                    <li key={sub.id}>
                      <Link to={`${id}/${sub.id}`}>{sub.name}</Link>
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
  )

  // return (
  //   <div className='container' style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>

  //     <div>
  //       <ul>
  //         {menus.map(({ name, id, subtabs }) => (
  //           <li key={id}>
  //             <Link to={id}>{name}</Link>
  //             <ul>
  //               {subtabs.map((sub) => (
  //                 <li key={sub.id}>
  //                   <Link to={`${id}/${sub.id}`}>{sub.name}</Link>
  //                 </li>
  //               ))}
  //             </ul>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>

  //     <div>
  //       <Routes>
  //         <Route path=":menuId/*" element={<GuideMenu />} />
  //       </Routes>
  //     </div>

  //   </div>
  // )
}
export default Guides;