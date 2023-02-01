import './OverView.scss';
import React, { useEffect, useState } from 'react';
import DataHelper, { isEmpty } from '../../helper/data.helper';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const OverView = () => {

  const [data, setData] = useState();

  useEffect(() => {
    let url = './../content/raw/overview.json';
    (async () => {
      const rs = await DataHelper.getDataJson(url);
      setData(rs)
    })();
  }, []);

  if (isEmpty(data)) {
    return null;
  }

  return (
    <section id={'overview'} className={'overview'}>
      <div className="container">
        <h1 className="title">{data?.title}</h1>
        <p className="overview-text">{data?.description}</p>

        {Array.isArray(data?.children) && data?.children?.length && data.children?.map((fe, index) => {
          return (
            <div className={`section-content overview-${index + 1}`}>
              <div className="product-img">
                <img src={fe.image} alt="" />
              </div>
              <div className="product-highlight">
                <h4 className="service-heading-title">{fe?.subtitle}</h4>
                <h1>{fe?.title}</h1>
                <p className="service-heading-text">{fe?.description}</p>
                {/* {fe?.action && (
                  <Button buttonSize="vbt-medium">{fe?.action}</Button>
                )} */}
                <Link className='link' to={fe?.path || '/'}>
                  Tổng quan về hệ thống
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default OverView;