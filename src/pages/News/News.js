import React, { useEffect, useState } from 'react';
import './News.scss';
import DataHelper, { isEmpty } from '../../helper/data.helper';
import { Link, useSearchParams } from 'react-router-dom';
import NewDetail from './NewDetail';
import Cta from '../Home/Cta';

const News = () => {

  const [data, setData] = useState();
  let [searchParams, setSearchParams] = useSearchParams();
  const select = searchParams.get("select");

  useEffect(() => {
    let url = './../../content/raw/news.json';
    (async () => {
      const rs = await DataHelper.getDataJson(url);
      setData(rs)
    })();
  }, []);

  if (isEmpty(data)) {
    return null;
  }

  const AllNewPage = () => {
    return (
      <>
        <div className='news-banner'>
          <h1>Tin tức</h1>
          <p>Tin tức, thông tin chi tiết về ngành và sự kiện mới nhất</p>
        </div>
        <div className="news-card-item">
          {Array.isArray(data?.children) && data?.children?.length && data.children?.map((item) => {
            return (
              <div
                className='news-card'
                onClick={() => {
                  setSearchParams({ select: item?.id })
                }}
              >
                <div className='news-image'>
                  <img src={item.image} alt=""></img>
                </div>
                <div className='news-info'>
                  <p className="news-date">{item?.date}</p>
                  <h3 className='news-title'>{item?.title}</h3>
                  <Link className='news-link'>Đọc thêm</Link>
                </div>
              </div>

            )
          })}
        </div>        
      </>
    )
  }

  return (
    <div className='news-page container'>
      {isEmpty(select) ? AllNewPage() : <NewDetail />}
    </div>
  )
}

export default News;