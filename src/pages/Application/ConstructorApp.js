import './Application.scss';
import React, { useEffect, useState } from 'react'
import DataHelper from '../../helper/data.helper';
import Modal from '../../components/Modal/Modal';
import ICON from '../../images/ic-app.png';
import CardModal from './CardModal';
import Tabs from '../../components/Tabs/Tabs';

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

const ConstructorApp = () => {

  const [data, setData] = useState();
  const [current, setCurrent] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState();

  useEffect(() => {
    let url = './../content/raw/app2.json';
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : 'auto';
  }, [isOpen]);

  const RenderGridCard = () => {
    return (
      <div className='app-list-card'>
        {
          Array.isArray(current?.children) && current?.children?.length && current.children.map((item) => {
            return (
              <div
                className='app-card'
                onClick={() => {
                  setIsOpen(true);
                  setDataModal(item)
                }}
              >
                <img width={'72px'} height={'72px'} src={ICON} alt="" />
                <h5 className="ac-title">{item?.title || ''}</h5>
                <p className="ac-description">{item?.subtitle || ''}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <>
      <div className='app-page constructor-app'>

        <div className='app-page--banner'>
          <div className='container'>
            <h2>{'Banner Constructor App'}</h2>
          </div>
        </div>

        <div className='app-page--tabs'>
          <div className='container'>
            <Tabs
              menu={TABS}
              selected={current?.id}
              onSelect={(val) => {
                if (current?.id === val) {
                  return;
                }
                else {
                  const _curr = data.find((d) => d.id === val)
                  setCurrent(_curr)
                }
              }}
            />
          </div>
        </div>

        <div className='app-page--content'>
          <div className='container'>
            {RenderGridCard()}
          </div>
        </div>

      </div>

      {isOpen && <Modal setIsOpen={setIsOpen}> <CardModal className={'cardModal'} data={dataModal} /> </Modal>}

    </>
  )
}
export default ConstructorApp;