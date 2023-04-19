import './Contact.scss';
import React from 'react';
import Button from '../../components/Button';

const ContactUs = () => {
  // return (
  //   <div className='container'>
  //     {'ContactUs'}
  //   </div>
  // )
  return (
    <div className='contact-page container'>
      {/* <div className='contact-banner'>
        <div className='container'>
          <h1>Liên hệ với chúng tôi</h1>
        </div>
      </div> */}
      <div className='contact-grid'>
        <div className='contact-left'>
          <h2>Liên hệ với chúng tôi</h2>
          <p>Quý khách hàng quan tâm sản phẩm xin vui lòng liên hệ để được hỗ trợ tốt nhất. Xin cảm ơn!</p>
          <div className='contact-col'>
            <h5>Trụ sở chính</h5>
            <p>22/5 Yên Thế, P.2, Q.Tân Bình, tp.HCM</p>
            <p>Điện thoại:<a href="tel:(028) 3863 9079">(028) 3863 9079</a></p>
            <p>Email:<a href="mailto:info@vietbando.vn">info@vietbando.vn</a></p>
          </div>
          <div className='contact-col'>
            <h5>Hỗ trợ kinh doanh</h5>
            <p>Mr. Nguyễn Bá Hiệp</p>
            <p>Điện thoại:<a href="tel:(84) 981 917 631">(84) 981 917 631</a></p>
            <p>Email:<a href="mailto:nguyenbahiep@vietbando.vn">nguyenbahiep@vietbando.vn</a></p>
          </div>
          <div className='contact-col'>
            <h5>Hỗ trợ kỹ thuật</h5>
            <p>Mr. Phan Thanh Tùng</p>
            <p>Điện thoại:<a href="tel:0962.565.208">0962.565.208</a></p>
            <p>Email:<a href="mailto:phanthanhtung@vietbando.vn">phanthanhtung@vietbando.vn</a></p>
          </div>
        </div>
        <div className='contact-card'>
          <h5>Chi tiết liên lạc</h5>
          <form className='contact-field'>
            <input
              type="text"
              className="contact-input"
              name="name"
              placeholder="Họ tên"
            />
            <input
              type="text"
              className="contact-input"
              name="name"
              placeholder="Email"
            />
            <input
              type="text"
              className="contact-input"
              name="name"
              placeholder="Tiêu đề"
            />            
            <textarea
              name="message"
              placeholder="Chúng tôi có thể giúp gì cho bạn?"
            />
          </form>
          <Button buttonSize="vbt-larger" buttonStyle="vbt-blue-solid">Gửi tin</Button>
        </div>
      </div>     
    </div>
  )
}
export default ContactUs;