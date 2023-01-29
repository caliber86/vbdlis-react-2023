import './Features.scss';
import React, { useEffect, useState } from 'react';
import DataHelper, { isEmpty } from '../../helper/data.helper';
// import ICON from './../../components/SVGIcon/Icon';


export default function Features() {

  const [data, setData] = useState();

  useEffect(() => {
    let url = './../content/raw/features.json';
    (async () => {
      const rs = await DataHelper.getDataJson(url);
      setData(rs)
    })();
  }, []);

  if (isEmpty(data)) {
    return null;
  }

  return (
    <section id={'features'} className={'features'}>
      <div className="container">
        <h1 className="title">{data?.title}</h1>
        <p className="features-text">{data?.description}</p>

        <div className='features-card'>
          {
            Array.isArray(data?.children) && data?.children?.length && data.children.map((fe) => {
              return (
                <div className='features-col'>
                  <img src={fe?.image}></img>
                  <h5 className="fe-title">{fe?.title}</h5>
                  <p className="fe-text">{fe?.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
