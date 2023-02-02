import React from 'react'
import ICON from '../../images/ic-app.png';
const CardModal = ({ data, className }) => {

  return (
    <div className={`card-modal ${className}`}>
      <div className='card-modal-header'>
        <img width={'40px'} height={'40px'} src={ICON} alt="" />
        <h1>{data?.title || ''}</h1>
      </div>
      <div className='card-modal-info'>
        <span>{data?.description || ''}</span>
        {data?.infoDetail && data?.infoDetail?.length && (
          <ul>
            {data.infoDetail.map(d => {
              return <li>{d}</li>
            })}
          </ul>
        )}
      </div>
    </div>

  )
}
export default CardModal;