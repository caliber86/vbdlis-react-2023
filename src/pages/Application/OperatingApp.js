import './Application.scss';
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button';
import DataHelper from '../../helper/data.helper';
import Modal from '../../components/Modal/Modal';
import IconDefault from '../../images/ic-app-default.svg';
import CardModal from './CardModal';
import Tabs from '../../components/Tabs/Tabs';
import { Link } from 'react-router-dom';
import Cta from '../Home/Cta';

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

const OperatingApp = () => {

  const [data, setData] = useState();
  const [current, setCurrent] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState();

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
                <img width={'80px'} height={'80px'} src={item?.image || IconDefault} alt="" />
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
      <div className='app-page operating-app'>

        <div className='app-page--banner'>
          <div className="flare"></div>
          <div className='container'>
            {/* <img width={'80px'} height={'80px'} src={IconDefault} alt="" /> */}
            {/* <h4>{'Hệ thống'}</h4> */}
            <h1>{'Hệ thống vận hành cơ sở dữ liệu đất đai'}</h1>
            <p>Cung cấp các giải pháp toàn diện phục vụ công tác quản lý, vận hành và khai thác Cơ sở dữ liệu đất đai</p>
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
            <img className='app-hero-image' width={'1200px'} height={'auto'} src={'./../content/img/app-hero-images.png'} alt="aaa" />
          </div>
        </div>

        <div className='app-page--tabs'>
          <div className='container'>
            <h2>{'Các phân hệ của hệ thống'}</h2>
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

        {Cta()}
        
      </div>

      {isOpen && <Modal setIsOpen={setIsOpen}> <CardModal className={'cardModal'} data={dataModal} /> </Modal>}

    </>
  )
}
export default OperatingApp;