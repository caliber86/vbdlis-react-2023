import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './Cta.scss';

export default function Cta() {
    return (
      <section id={'cta'} className={'cta'}>
        <div className='container'>
            <div className='cta-card' style={{backgroundImage: 'url(./../content/img/vbdlis-cta-bg.svg)'}}>
                <div className='card-content'>
                    <h1 className='card-title'>Bắt đầu thử nghiệm với VBDLis</h1>
                    <div className='card-description'>Chúng tôi sẵn sàng gặp gỡ trực tiếp để tư vấn và mong muốn có cơ hội được hợp tác cùng Doanh nghiệp của bạn</div>
                    <Link to="" spy={true} smooth={true} duration={500} >
                        <Button className='btn-cta' buttonStyle="vbt-white" buttonSize="vbt-larger">Đăng ký</Button>
                    </Link>
                </div>
            </div>
        </div>
      </section>
    )
  }