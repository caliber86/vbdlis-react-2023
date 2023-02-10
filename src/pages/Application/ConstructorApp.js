import './Application.scss';
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button';
import DataHelper from '../../helper/data.helper';
import Modal from '../../components/Modal/Modal';
import ICON from '../../images/ic-app.png';
import CardModal from './CardModal';
import Tabs from '../../components/Tabs/Tabs';
import { Link } from 'react-router-dom';

const TABS = [
  {
    id: 'app-web',
    name: 'Hệ thống web'
  },
  {
    id: 'app-desktop',
    name: 'Ứng dụng Desktop'
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
            {/* <img className='ic-banner-app' width={'80px'} height={'80px'} src={ICON} alt="" /> */}
            <h4>{'Hệ thống'}</h4>
            <h2>{'Xây dựng cơ sở dữ liệu đất đai'}</h2>
            <div className='app-hero-button'>
              <Link to="" spy={true} smooth={true} duration={500} >                
                <Button buttonStyle="vbt-blue-solid" buttonSize="vbt-larger">
                  <span>Đăng ký</span>
                </Button>
              </Link>
              <Link to="" spy={true} smooth={true} duration={500} >
                <Button buttonStyle="vbt-white-outline" buttonSize="vbt-larger-icon">
                  <span className='ic-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                      <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                  <span className='btn-text'>Video demo</span>
                </Button>            
              </Link>             
            </div>
            <img className='app-hero-image' width={'1200px'} height={'auto'} src={'./../content/img/Hero Image-p-2000.webp'} alt="aaa" />
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