import './Hero.scss';
import React, { useEffect, useState } from 'react';
import DataHelper, { isEmpty } from '../../helper/data.helper';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Popup from '../../components/Modal/Popup';

const Hero = () => {
  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let url = './../content/raw/hero.json';
    (async () => {
      const rs = await DataHelper.getDataJson(url);
      setData(rs)
    })();
  }, []);

  if (isEmpty(data)) {
    return null;
  }

  return (
    <section id={'hero'} className={'hero'}>
      <div className="hero-home">
        {/* <div className="flare"></div> */}
        <div className="container">
          <div className="home-hero-left">
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
            <div className='home-hero-button'>

              <Button
                buttonStyle="vbt-blue-solid"
                buttonSize="vbt-larger-icon"
                onClick={() =>
                  setIsOpen(true)
                }
              >
                <span className='ic-btn'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                    <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span className='btn-text'>Video demo</span>
              </Button>
              {/* {isOpen && (
                <Popup setIsOpen={setIsOpen} className='hero-videodemo'>
                  <video width="1080px" height='auto' controls >                  
                    <source src="/guides/gioi-thieu-he-thong-thong-tin-dat-dai-vbdlis.mp4" type="video/mp4" />
                  </video>
                </Popup>
              )} */}
              {isOpen && (
                <Popup setIsOpen={setIsOpen} className='hero-video-demo'>
                  <iframe width="640" height="390" src="https://www.youtube.com/embed/XALOPIXsgxw?mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>                  
                </Popup>
              )}

              <Link to="" spy={true} smooth={true} duration={500} >
                <Button buttonStyle="vbt-white-outline" buttonSize="vbt-larger-icon">
                  <span className='ic-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                      <path fill-rule="evenodd" d="M4 19C4 19.546 4.454 20 5 20H19C19.546 20 20 19.546 20 19C20 17.667 20 16.334 20 15C20 14.45 20.45 14 21 14C21.55 14 22 14.45 22 15C22 16.334 22 17.667 22 19C22 20.65 20.65 22 19 22H5C3.35 22 2 20.65 2 19C2 17.667 2 16.334 2 15C2 14.45 2.45 14 3 14C3.55 14 4 14.45 4 15C4 16.334 4 17.667 4 19ZM12 2C12.55 2 13 2.45 13 3V12.585L15.283 10.302V10.303C15.465 10.116 15.719 10 16 10C16.552 10 17 10.447 17 11C17 11.281 16.884 11.535 16.697 11.717L16.69 11.724L12.707 15.707L12.706 15.706C12.525 15.887 12.275 16 12 16C11.725 16 11.475 15.887 11.294 15.706L11.293 15.707L7.31 11.724L7.303 11.717C7.116 11.535 7 11.281 7 11C7 10.447 7.448 10 8 10C8.281 10 8.535 10.116 8.717 10.303V10.302L11 12.585V3C11 2.45 11.45 2 12 2Z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                  <span className='btn-text'>Brochure</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero-globe">
            <div className="hero-globe-wrapper">
              <div className="hero-globe-animation">
                <div className="hero-globe-img">
                  {
                    data?.useImage ? <img src={data?.image} alt="" /> : (
                      <div className='hero-app-img'>
                        <img className='image0' width={'auto'} height={'450px'} src={'./../content/img/hero-global.png'} alt="aaa" />
                        <img className='image1' src={'./../content/img/hero-1.svg'} alt="aaa" />
                        <img className='image2' src={'./../content/img/hero-2.svg'} alt="aaa" />
                        <img className='image3' src={'./../content/img/hero-3.svg'} alt="aaa" />
                        <img className='image4' src={'./../content/img/hero-4.svg'} alt="aaa" />
                      </div>

                    )
                  }
                </div>
              </div>

            </div>
          </div>
          {/* <div className="home-hero-images">
            <img src={data?.image} alt="" />
          </div> */}
        </div>
      </div>
    </section >
  )
}
export default Hero;