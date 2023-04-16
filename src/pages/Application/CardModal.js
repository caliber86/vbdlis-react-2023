import React from 'react';
import IconDefault from '../../images/ic-app-default.svg';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
const CardModal = ({ data, className }) => {
  console.log('CardModal', data)
  return (
    <div className={`card-modal ${className}`}>
      <div className='card-modal-header'>
        <img width={'80px'} height={'80px'} src={data?.image || IconDefault} alt="" />
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

        {data?.type && data?.type === 'download' &&
          <Link to={data?.source || '/'} className="button-card" target="_blank" download>
            <Button buttonStyle="vbt-white" buttonSize="vbt-larger-icon">
              <span className='ic-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                  <path fill-rule="evenodd" d="M4 19C4 19.546 4.454 20 5 20H19C19.546 20 20 19.546 20 19C20 17.667 20 16.334 20 15C20 14.45 20.45 14 21 14C21.55 14 22 14.45 22 15C22 16.334 22 17.667 22 19C22 20.65 20.65 22 19 22H5C3.35 22 2 20.65 2 19C2 17.667 2 16.334 2 15C2 14.45 2.45 14 3 14C3.55 14 4 14.45 4 15C4 16.334 4 17.667 4 19ZM12 2C12.55 2 13 2.45 13 3V12.585L15.283 10.302V10.303C15.465 10.116 15.719 10 16 10C16.552 10 17 10.447 17 11C17 11.281 16.884 11.535 16.697 11.717L16.69 11.724L12.707 15.707L12.706 15.706C12.525 15.887 12.275 16 12 16C11.725 16 11.475 15.887 11.294 15.706L11.293 15.707L7.31 11.724L7.303 11.717C7.116 11.535 7 11.281 7 11C7 10.447 7.448 10 8 10C8.281 10 8.535 10.116 8.717 10.303V10.302L11 12.585V3C11 2.45 11.45 2 12 2Z" clip-rule="evenodd"></path>
                </svg>
              </span>
              <span className='btn-text'>{data?.linkTitle || 'Download'}</span>
            </Button>
          </Link>
        }

        {data?.type && data?.type === 'link' &&
          <Link to={data?.source || '/'} target="_blank" className="button-card">
            <Button buttonStyle="vbt-white" buttonSize="vbt-larger-icon">
              <span className='ic-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                  <path fill-rule="evenodd" d="M4 19C4 19.546 4.454 20 5 20H19C19.546 20 20 19.546 20 19C20 17.667 20 16.334 20 15C20 14.45 20.45 14 21 14C21.55 14 22 14.45 22 15C22 16.334 22 17.667 22 19C22 20.65 20.65 22 19 22H5C3.35 22 2 20.65 2 19C2 17.667 2 16.334 2 15C2 14.45 2.45 14 3 14C3.55 14 4 14.45 4 15C4 16.334 4 17.667 4 19ZM12 2C12.55 2 13 2.45 13 3V12.585L15.283 10.302V10.303C15.465 10.116 15.719 10 16 10C16.552 10 17 10.447 17 11C17 11.281 16.884 11.535 16.697 11.717L16.69 11.724L12.707 15.707L12.706 15.706C12.525 15.887 12.275 16 12 16C11.725 16 11.475 15.887 11.294 15.706L11.293 15.707L7.31 11.724L7.303 11.717C7.116 11.535 7 11.281 7 11C7 10.447 7.448 10 8 10C8.281 10 8.535 10.116 8.717 10.303V10.302L11 12.585V3C11 2.45 11.45 2 12 2Z" clip-rule="evenodd"></path>
                </svg>
              </span>
              <span className='btn-text'>{data?.linkTitle || 'View link'}</span>
            </Button>
          </Link>
        }
      </div>
    </div>

  )
}
export default CardModal;