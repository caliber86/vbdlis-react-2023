import React from 'react';
import { Link } from 'react-router-dom';
import DOWNLOAD_ICON from '../../../images/ic-download.svg';

export default function GuideApp1Document() {
  return (
    <div className='guides-document' >
      <div>
        <h2 className='guides-title'>Tài liệu hướng dẫn sử dụng</h2>
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
                  <Link to="/guides/vhcsdl-1-phan-he-dia-chinh.pdf" target="_blank">
                    <span>Tải về</span>
                    <span>PDF</span>
                    {/* <span><img width={'24px'} height={'24px'} src={DOWNLOAD_ICON}/>PDF</span> */}
                  </Link>
                </th>
              </tr>
              <tr>
                <th>2</th>
                <th>Phân hệ quản lý Thống kê kiểm kê đất đai</th>
                <th className='download'>
                  <Link to="/guides/vhcsdl-2-Phan-he-quan-ly-thong-ke-kiem-ke-dat-dai.pdf" target="_blank">
                    <span>Tải về</span>
                    <span>PDF</span>
                  </Link>
                </th>
              </tr>
              <tr>
                <th>3</th>
                <th>Phân hệ quản lý Giá đất</th>
                <th className='download'>
                  <Link to="/guides/vhcsdl-3-phan-he-quan-ly-gia-dat.pdf" target="_blank">
                    <span>Tải về</span>
                    <span>PDF</span>
                  </Link>
                </th>
              </tr>
              <tr>
                <th>4</th>
                <th>Phân hệ Quy hoạch, Kế hoạch sử dụng đất</th>
                <th className='download'>
                  <Link to="/guides/vhcsdl-4-phan-he-quy-hoach-ke-hoach-su-dung-dat.pdf" target="_blank">
                    <span>Tải về</span>
                    <span>PDF</span>
                  </Link>
                </th>
              </tr>
              <tr>
                <th>5</th>
                <th>Hệ thống khai thác dữ liệu Bản đồ LIS - BI</th>
                <th className='download'>
                  <Link to="/guides/vhcsdl-6-he-thong-khai-thac-du-lieu-ban-do-LIS-BI.pdf" target="_blank">
                    <span>Tải về</span>
                    <span>PDF</span>
                  </Link>
                </th>
              </tr>
              <tr>
                <th>6</th>
                <th>Cổng thông tin Đất đai</th>
                <th className='download'>
                  <Link to="/guides/vhcsdl-7-cong-thong-tin-dat-dai.pdf" target="_blank">
                    <span>Tải về</span>
                    <span>PDF</span>
                  </Link>
                </th>
              </tr>
              <tr>
                <th>7</th>
                <th>Hệ thống Dịch vụ công</th>
                <th className='download'>
                  <Link to="/guides/vhcsdl-8-he-thong-dich-vu-cong.pdf" target="_blank">
                    <span>Tải về</span>
                    <span>PDF</span>
                  </Link>
                </th>
              </tr>
              <tr>
                <th>8</th>
                <th>LISEeditor VPDK</th>
                <th className='download'>
                  <Link to="/guides/vhcsdl-11-LISEeditor-VPDK.pdf" target="_blank">
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
