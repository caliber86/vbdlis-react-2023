import './NewDetail.scss';
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import DataHelper, { isEmpty } from '../../helper/data.helper';


const NewDetail = (props) => {

  const [newCurrent, setNewCurrent] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const select = searchParams.get("select");

  useEffect(() => {
    if (!isEmpty(select)) {
      let url = './../../content/raw/news.json';
      (async () => {
        const rs = await DataHelper.getDataJson(url);
        const _findNew = rs?.children.find((n) => n.id === select);
        setNewCurrent(_findNew)
      })();
    }
  }, []);

  console.log(newCurrent)

  return (
    <div className='news-post'>
      <div className='back-to-news'>
        <Link className='news-link' to={'/news'}>
          TIN TỨC
        </Link>
      </div>
      <div className='news-detail'>
        {!newCurrent ? <div className='news-empty-data'>{'Không có dữ liệu'}</div> : (
          <div className='news-detail-item'>
            <h2>{newCurrent?.title}</h2>
            <div className='news-status'>
              <span className='posting'>{newCurrent?.posting}</span>
              <span className='date'>{newCurrent?.date}</span>              
            </div>
            <span className='description'>{newCurrent?.description}</span>  
            <span>Để đẩy nhanh việc cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất trên toàn TP.HCM, năm 2023 Sở Tài nguyên và Môi trường sẽ liên thông thuế điện tử với tất cả các chi cục thuế quận, huyện, TP.Thủ Đức.</span>
            <span>Nguồn thu từ việc cấp sổ hồng tại các dự án nhà ở trong năm nay dự kiến hơn 4.600 tỷ đồng. Năm 2023, TP.HCM sẽ triển khai liên thông thuế điện tử để đẩy nhanh công tác cấp sổ.</span>          
            <img width={'100%'} height={'auto'} src={newCurrent?.image} alt="" />
            <span className='image-description'>{newCurrent?.imageDescription}</span>            
            <span>Cụ thể, Sở Tài nguyên và Môi trường (TN&MT) TP.HCM vừa báo cáo kết quả thực hiện kế hoạch đẩy nhanh công tác cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất (sổ hồng) cho người mua nhà tại các dự án phát triển nhà ở trên địa bàn.</span>
            <span>Năm 2021, Sở TN&MT đã cấp 16.823 sổ hồng. 11 tháng của năm 2022, đơn vị này đã cấp được 21.218 sổ hồng.</span>
            <span>Theo Sở TN&MT, kết quả trên đã vượt chỉ tiêu 20.000 sổ hồng của năm nay. Tuy nhiên, đơn vị đang phấn đấu cấp thêm 3.000 sổ hồng so với chỉ tiêu đề ra.</span>
            <span>Với 23.000 sổ hồng dự kiến được cấp có giá trị hợp đồng chuyển nhượng 91.851 tỷ đồng, mang lại nguồn thu 4.618 tỷ đồng. Trong đó, 4.123 tỷ đồng từ thuế thu nhập cá nhân, 460 tỷ đồng từ tiền lệ phí trước bạ và 35 tỷ đồng là phí và lệ phí cấp sổ.</span>
            <span>Hiện nay, mới chỉ thí điểm liên thông thuế điện tử với 4 chi cục thuế, gồm: Chi cục Thuế Q.10, Chi cục Thuế Q.Gò Vấp, Chi cục Thuế khu vực Q.7 – Nhà Bè và Chi cục Thuế TP.Thủ Đức.</span>
            <span>Những khó khăn, vướng mắc trong quá trình cấp sổ hồng cho người mua nhà tại các dự án nhà ở trên địa bàn, Sở TN&MT sẽ tiếp tục rà soát, tổng hợp tham mưu trình UBND TP.HCM tháo gỡ hoặc kiến nghị bộ, ngành liên quan giải quyết.</span>
            <span className='author'>{newCurrent?.author}</span>
          </div>
        )}
      </div>
    </div>
  )
}
export default NewDetail;
// import { useParams } from 'react-router-dom'

// const NewDetail = () => {
//   const params = useParams()
//   return <h2>Chi tiết khóa học: {params.courseId}</h2>
// }