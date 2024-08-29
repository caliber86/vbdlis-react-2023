import React from 'react';
import IconDefault from '../../images/ic-app-default.svg';
import Button from '../../components/Button';
import { Link, useLocation } from 'react-router-dom';

const CardModal = ({ data, className }) => {
  console.log('CardModal', data)
  const location = useLocation();
  console.log('location', location)
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
                  <path fill-rule="evenodd" d="M13.707 5.293l6 6a1 1 0 010 1.414l-6 6-1.414-1.414L16.586 13H4v-2h12.586l-4.293-4.293 1.414-1.414z" clip-rule="evenodd"></path>
                </svg>
              </span>
              <span className='btn-text'>{data?.linkTitle || 'Download'}</span>
            </Button>
          </Link>
        }

        {data?.type && data?.type === 'link' &&
          <Link to={`${location?.pathname}/${data?.Id}?${encodeURI(data?.title)}`} target="_blank" className="button-card">
            <Button buttonStyle="vbt-white" buttonSize="vbt-larger-icon">
              <span className='ic-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                  <path fill-rule="evenodd" d="M13.707 5.293l6 6a1 1 0 010 1.414l-6 6-1.414-1.414L16.586 13H4v-2h12.586l-4.293-4.293 1.414-1.414z" clip-rule="evenodd"></path>
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