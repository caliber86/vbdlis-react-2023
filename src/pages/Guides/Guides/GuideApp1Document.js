import React from 'react'
import { Link } from 'react-router-dom'

export default function GuideApp1Document() {
  return (
    <div className='guides-document' >
      <div>
        <h3 className='guides-title'>Tài liệu hướng dẫn sử dụng</h3>          
        <div className='document-download'>
          <table>
            <thead>
                <tr className='download-thead_fist'>
                  <th width="5%">Stt</th>
                  <th width="75%">Tên tài liệu</th>
                  <th width="20%" className='download'>Tải tài liệu</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>Phân hệ địa chính</th>
                <th className='download'>
                  <a href="/public/guides/VHCSDL-1-phan-he-dia-chinh.pdf" target="_blank">
                    {/* <span><img width={'24px'} height={'24px'} src={DOWNLOAD_ICON}/>Tải về</span> */}
                    <span>Tải về</span>
                    <span>PDF</span>
                  </a>
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
  )
}
