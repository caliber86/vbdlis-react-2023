import './Application.scss';
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button';
import DataHelper from '../../helper/data.helper';
import Modal from '../../components/Modal/Modal';
import IconDefault from '../../images/ic-app-default.svg';
import CardModal from './CardModal';
// import Tabs from '../../components/Tabs/Tabs';
import { Link } from 'react-router-dom';
import Cta from '../Home/Cta';
import Popup from '../../components/Modal/Popup';

const TABS = [
  {
    id: 'application-software',
    name: 'Phần mềm ứng dụng'
  },
  {
    id: 'core-software',
    name: 'Phần mềm lõi'
  },
  {
    id: 'database-software',
    name: 'Phần mềm CSDL'
  }
]

const OperatingApp = () => {

  const [data, setData] = useState();
  // const [current, setCurrent] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState();
  const [openVideo, setOpenVideo] = useState(false);


  useEffect(() => {
    let url = './../content/raw/app1.json';
    (async () => {
      const rs = await DataHelper.getDataJson(url);
      if (rs) {
        const _data = Object.entries(rs).map(entry => {
          return {
            id: entry[0],
            children: entry[1]
          };
        });
        setData(_data)
      }
      // if (rs) {
      //   const _data = TABS.map(item => {
      //     return {
      //       ...item,
      //       children: rs[item.id] || []
      //     }
      //   })
      //   setData(_data);
      //   setCurrent(_data[0])
      // }
    })();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : 'auto';
  }, [isOpen]);

  const RenderGridCard = (current) => {
    const title = TABS.find((tab) => tab?.id === current?.id)?.name || '';
    return (
      <>
        <h3 className='produc-list'>{title}</h3>
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
                  <img width={'64px'} height={'64px'} src={item?.image || IconDefault} alt="" />
                  <h5 className="ac-title">{item?.title || ''}</h5>
                  <p className="ac-description">{item?.subtitle || ''}</p>
                </div>
              )
            })
          }
        </div>
      </>
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
            <h1>{'Các sản phẩm của Vietbando'}</h1>
            <p>Vietbando cung cấp các giải pháp và ứng dụng công nghệ GIS - Geographic Information System, từ các công cụ thu thập, biên tập dữ liệu đến các hệ thống lưu trữ, tìm kiếm, khai thác, hỗ trợ ra quyết định trên nhiều nền tảng khác nhau như Desktop, Web và Mobile. Các sản phẩm của Vietbando mang đến cho khách hàng các giải pháp và dịch vụ GIS toàn diện, hiệu quả và chất lượng nhất.</p>
            <div className='app-hero-button'>
              <Link to="/contactus" spy={true} smooth={true} duration={500} >
                <Button buttonStyle="vbt-red-solid" buttonSize="vbt-larger">
                  <span>Liên hệ</span>
                </Button>
              </Link>
              <Link to="" spy={true} smooth={true} duration={500} >
                <Button buttonStyle="vbt-white" buttonSize="vbt-larger-icon" onClick={() =>
                  setOpenVideo(true)
                }>
                  <span className='ic-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                      <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                  <span className='btn-text'>Video demo</span>
                </Button>
              </Link>
            </div>
            <img className='app-hero-image' width={'100%'} height={'auto'} src={'./../content/img/app-hero-images-1.png'} alt="aaa" />
          </div>
        </div>

        <div className='app-page--tabs'>
          <div className='container'>
            <h2>{'Danh mục phần mềm'}</h2>
            {/* <Tabs
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
            /> */}
          </div>
        </div>

        <div className='app-page--content'>
          <div className='container'>
            {/* {RenderGridCard()} */}
            { data && data?.length && data.map((feature)=>RenderGridCard(feature))}
          </div>
        </div>

        {Cta()}

      </div>

      {isOpen && <Modal setIsOpen={setIsOpen}> <CardModal className={'cardModal'} data={dataModal} /> </Modal>}
      {openVideo && (
        <Popup setIsOpen={setOpenVideo} className='hero-video-demo'>
          <iframe width="640" height="390" src="https://www.youtube.com/embed/XALOPIXsgxw?mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
        </Popup>
      )}

    </>
  )
}
export default OperatingApp;