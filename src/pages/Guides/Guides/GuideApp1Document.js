import React from 'react'
import { Link } from 'react-router-dom'

export default function GuideApp1Document() {
  return (
    <div>
      <div className='guides-page'>
        <div className='guides-banner'>
          <div className='container'>
            <h1>Hướng dẫn và tài nguyên</h1>
            <p>Một bộ sưu tập các hướng dẫn và tài nguyên dành riêng cho việc xây dựng, triển khai các ứng dụng trong hệ thống</p>
          </div>
        </div>
        <div className='guides-content'>
          <div className='container'>
            <div className='guides-download'>
              <table>
                <thead>
                  <tr className='download-thead_fist'>
                    <th width="5%">Stt</th>
                    <th width="80%">Tên tài liệu</th>
                    <th width="15%" className='download'>Tải tài liệu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <th>Phân hệ địa chính</th>
                    <th className='download'>
                      <Link to="/public/guides/VHCSDL-1-phan-he-dia-chinh.pdf">
                        {/* <span><img width={'24px'} height={'24px'} src={DOWNLOAD_ICON}/>Tải về</span> */}
                        <span>Tải về</span>
                        <span>PDF</span>
                      </Link>
                    </th>
                  </tr>
                  <tr>
                    <th>2</th>
                    <th>Phân hệ quản lý Thống kê kiểm kê đất đai</th>
                    <th className='download'>
                      <Link to="/public/guides/VHCSDL-1-phan-he-dia-chinh.pdf">
                        <span>Tải về</span>
                        <span>PDF</span>
                      </Link>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
