import React from 'react';
import { Link } from 'react-router-dom';

export default function GuideApp2Document() {
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
                <th>Hệ thống thi công cơ sở dữ liệu Địa chính</th>
                <th className='download'>
                  <Link to="/guides/tccsdl-1-co-so-du-lieu-dia-chinh.pdf" target="_blank">                   
                    <span>Tải về</span>
                    <span>PDF</span>
                  </Link>
                </th>
              </tr>
              <tr>
                <th>2</th>
                <th>Hệ thống thi công cơ sở dữ liệu giá đất</th>
                <th className='download'>
                  <Link to="/guides/tccsdl-2-co-so-du-lieu-gia-dat.pdf" target="_blank">
                    <span>Tải về</span>
                    <span>PDF</span>
                  </Link>
                </th>
              </tr>
              <tr>
                <th>3</th>
                <th>Hệ thống thi công cơ sở dữ liệu Thống kê kiểm kê</th>
                <th className='download'>
                  <Link to="/guides/tccsdl-3-co-so-du-lieu-thong-ke-kiem-ke.pdf" target="_blank">
                    <span>Tải về</span>
                    <span>PDF</span>
                  </Link>
                </th>
              </tr>
              <tr>
                <th>4</th>
                <th>Hệ thống thi công cơ sở dữ liệu Quy hoạch kế hoạch sử dụng đất</th>
                <th className='download'>
                  <Link to="/guides/tccsdl-4-co-so-du-lieu-quy-hoach-ke-hoach-su-dung-dat.pdf" target="_blank">
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
