import './Clients.scss';
import React, { useEffect, useState } from 'react';
import DataHelper, { isEmpty } from '../../helper/data.helper';
import Marquee from '../../components/Marquee/Marquee';

const Clients = () => {
  const [data, setData] = useState();
  const [clients, setClients] = useState();

  //Bug: useEffect runs twice on component mount in React version: 18 (StrictMode, NODE_ENV=development)
  // useEffect(() => {
  //   let url = './../content/raw/clients.json';
  //   (async () => {
  //     const clients = await DataHelper.getDataJson(url);
  //     setData(clients)
  //   })();
  // }, []);

  //fix reRender beta
  useEffect(() => {
    let ignore = false;
    let url = './../content/raw/clients.json';
    async function getData() {
      const rs = await DataHelper.getDataJson(url);
      if (!ignore) {
        setClients(rs?.children)
        setData(rs)
      }
    }
    getData();

    return () => {
      ignore = true;
    };
  }, []);

  const chunk_size = clients?.length && Math.round(clients?.length / 2);
  const chunkArray = (myArray, chunk_size) => {
    let results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  }

  let newArrs = [];
  if (clients?.length) {
    newArrs = chunkArray([...clients], chunk_size);
  }

  return (
    <section id={'clients'} className={'clients'}>
      <div className='container'>
        <h3 className='text-center'>{data?.title || 'Danh sách khách hàng'}</h3>
        {
          Array.isArray(newArrs) && newArrs?.length && (
            <div className='WrapperMarquee'>
              <Marquee list={newArrs[0]} time={40} />
              <Marquee list={newArrs[1]} time={40} toRight />
            </div>
          )
        }
      </div>
    </section>
  )
}
export default Clients;