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
    <div>
      <div className='back-to-news'>
        <Link className='news-link' to={'/news'}>
          All New
        </Link>
      </div>
      <div className='new-detail'>
        {!newCurrent ? <div className='new-empty-data'>{'Không có dữ liệu'}</div> : (
          <div className='new-detail-item'>
            <h5>{newCurrent?.title}</h5>
            <span>{newCurrent?.date}</span>
            <img width={'200px'} height={'180px'} src={newCurrent?.image} alt="" />
            <span>{newCurrent?.description}</span>
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