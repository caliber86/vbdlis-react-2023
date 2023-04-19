import React, { useEffect, useState } from 'react'
import './Customer.scss';
import DataHelper, { isEmpty } from '../../helper/data.helper';
import TalkBox from '../../components/TalkBox/TalkBox';
import Slideshow from '../../components/Slider/Slideshow';

const Customer = () => {

  const [data, setData] = useState();

  useEffect(() => {
    let url = './../content/raw/customer.json';
    (async () => {
      const rs = await DataHelper.getDataJson(url);
      setData(rs)
    })();
  }, []);

  if (isEmpty(data)) {
    return null;
  }

  return (
    <section id={'customer'} className="customer">
      <div className="container">
        <h1 className='title'>{data?.title}</h1>
        <div className='slide-show-background'>
          <Slideshow
            visibility={2}
            current={1}
            slideWidth={'950px'}
            slideHeight={'600px'}
          >
            {data?.children.length && data?.children.map((c, idx) =>
              <TalkBox data={c} key={idx} />
            )}
          </Slideshow>
        </div>
      </div>
    </section>
  )
}
export default Customer;