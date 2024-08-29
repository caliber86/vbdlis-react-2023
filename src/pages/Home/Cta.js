import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './Cta.scss';

export default function Cta() {
    return (
      <section id={'cta'} className={'cta'}>
        <div className='container'>
            <div className='cta-card' style={{backgroundImage: 'url(./../content/img/cta-card-bg.svg)'}}>
                <div className='card-content'>
                    <h1 className='card-title'>Liên hệ với chúng tôi hôm nay</h1>
                    {/* <div className='card-description'>Chúng tôi sẵn sàng gặp gỡ trực tiếp để tư vấn và mong muốn có cơ hội được hợp tác cùng Doanh nghiệp của bạn</div> */}
                    <div className='card-description'>Cần giúp đỡ hoặc có câu hỏi? hãy liên hệ với một trong những chuyên gia của chúng tôi.</div>
                    <Link to="/contactus" spy={true} smooth={true} duration={500} >
                        <Button className='btn-cta' buttonStyle="vbt-red-solid" buttonSize="vbt-larger">Liên hệ</Button>
                    </Link>
                </div>
            </div>
        </div>
      </section>
    )
  }