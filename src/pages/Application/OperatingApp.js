import './Application.scss';
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button';
import DataHelper from '../../helper/data.helper';
import ICON from '../../images/data-check.svg';

const TABS = [
  {
    id: 'app-web',
    name: 'Hệ thống web'
  },
  {
    id: 'app-desktop',
    name: 'Ứng dụng app desktop'
  }
]

const OperatingApp = () => {

  const [data, setData] = useState();
  const [current, setCurrent] = useState();
  const [active, setActive] = useState();

  useEffect(() => {
    let url = './../content/raw/app1.json';
    (async () => {
      const rs = await DataHelper.getDataJson(url);
      if (rs) {
        const _data = TABS.map(item => {
          return {
            ...item,
            children: rs[item.id] || []
          }
        })
        setData(_data);
        setCurrent(_data[0])
      }
    })();
  }, []);

  const RenderGridCard = () => {
    return (
      <div className='app-list-card'>
        {
          Array.isArray(current?.children) && current?.children?.length && current.children.map((item) => {
            return (
              <div className='app-card' onClick={() => console.log(item)}>
                <img width={'24px'} height={'24px'} src={ICON} alt="" />
                <h5 className="ac-title">{item?.title}</h5>
                <p className="ac-description">{item?.description}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (

    <div className='app-page operating-app'>

      <div className='app-page--banner'>
        <div className='container'>
          <h2>{'Banner OperatingApp'}</h2>
        </div>
      </div>

      <div className='app-page--tabs'>
        <div className='container'>
          {TABS.map((tab) => (
            <Button
              buttonStyle={current?.id === tab?.id ? 'vbt-blue-solid' : 'vbt-white'}
              onClick={(e) => {
                if (current?.id === tab?.id) {
                  e.stopPropagation();
                }
                else {
                  const _curr = data.find((d) => d.id === tab.id)
                  setCurrent(_curr)
                }
              }}
            >
              {tab.name}
            </Button>
          ))}
        </div>
      </div>

      <div className='app-page--content'>
        <div className='container'>
          {RenderGridCard()}
        </div>
      </div>

    </div>

  )
}
export default OperatingApp;