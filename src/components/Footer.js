import React from 'react'
import './Footer.scss';
import VbdLogo from './../logo-vbd-white.svg';
import FacebookIcon from './../images/social-facebook.svg'
import LinkedinIcon from './../images/social-linkedin.svg'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section id={'footer'} className={'footer'}>
      {/* <div className="flare"></div> */}
      <div className='container'>
        <div className='footer-top'>
          <div className='left-footer'>
            <img width={'auto'} height={'48px'} src={VbdLogo} alt="" />
            <p className='vbd-description'>Vietbando là nhà cung cấp hàng đầu khu vực và Việt Nam về giải pháp cũng như dịch vụ dựa trên nền GIS.</p>
            <p className='vbd-description'>Chúng tôi cung cấp cho mọi tổ chức và cá nhân các dịch vụ, giải pháp, ứng dụng GIS hiệu quả và chất lượng nhất; đồng thời toàn quyền sở hữu và được chính phủ cho phép cung cấp dữ liệu bản đồ Việt Nam.</p>
          </div>
          <div className='right-footer'>
            <div className='text-cols'>
              <div className='footer-title'>Hệ thống</div>
              <Link to="">Hệ thống vận hành cơ sở dữ liệu đất đai</Link>
              <Link to="">Hệ thống xây dựng cơ sở dữ liệu đất đai</Link>
            </div>
            <div className='text-cols'>
              <div className='footer-title'>Liên kết</div>
              <Link to="">Bản đồ Covid-19</Link>
              <Link to="">Cổng thông tin giao thông</Link>
              <Link to="">Hạ tầng giao thông</Link>
              <Link to="">Hạ tầng đường thủy</Link>
              <Link to="">Hạ tầng thủy lợi</Link>
              <Link to="">Hạ tầng đô thị</Link>
              <Link to="">Hạ tầng bưu chính viễn thông</Link>
              <Link to="">Dịch vụ bản đồ số</Link>
            </div>
            <div className='text-cols'>
              <div className='footer-title'>Giới thiệu</div>
              <Link to="">Trang chủ</Link>
              <Link to='/guides'>Hướng dẫn</Link>
              <Link to='/news'>Tin tức</Link>
              <Link to='/contactus'>Liên hệ</Link>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='left-footer'>
            <p>© 2023 Vietbando. Giữ toàn quyền</p>
            <div className='dot'>•</div>
            <Link to='/terms'>Điều khoản</Link>
            <div className='dot'>•</div>
            <Link to='/security'>Bảo mật</Link>
          </div>
          <div className='right-footer'>
            <Link className='social-icon'><img width={'20px'} height={'20px'} src={FacebookIcon}></img></Link>
            <Link className='social-icon'><img width={'20px'} height={'20px'} src={LinkedinIcon}></img></Link>            
          </div>
        </div>
      </div>
    </section>
  )
}
