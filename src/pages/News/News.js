import React, { useEffect, useState }  from 'react';
import './News.scss';
import DataHelper, {isEmpty} from '../../helper/data.helper';
import { Link } from 'react-router-dom';

const News = () => {

  const [data, setData] = useState();

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

  return (
    <div className='news-page container'>
      <div className='news-banner'>
        <h1>Tin tức</h1>
        <p>Tin tức, thông tin chi tiết về ngành và sự kiện mới nhất</p>
      </div>
            
      {Array.isArray(data?.children) && data?.children?.length && data.children?.map((item) => {
        return (
          <div className="news-card-item">
            <Link className='news-card'>
              <div className='news-image'>
                <img src={item.image} alt=""></img>
              </div>
              <div className='news-info'>
                <p className="news-date">{item?.date}</p>
                <h3 className='news-title'>{item?.title}</h3>
                <Link className='news-link' to={item?.path || '/'}>
                  Đọc thêm
                </Link>
              </div>                
            </Link>
          </div>
        )
      })}      
    </div>
  )
}

export default News;