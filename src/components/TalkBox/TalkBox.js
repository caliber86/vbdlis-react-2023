import './TalkBox.scss';
import React from 'react'
import { isEmpty } from '../../helper/data.helper';
import IMAGE from '../../images/talking.svg';
import ICON from '../../images/ic-star.svg';

const TalkBox = (props) => {

  const data = props.data ?? {};
  const url = !isEmpty(data.avatar) ? data.avatar : './../content/img/blank-profile.png'

  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className='talk-box'>      
      <div className='talk-box-info'>
        <img className='star-rating' width={'136px'} height={'24px'} src={ICON} alt="" />
        <span className='description'>{data?.description}</span>        
      </div>
      <div className='talk-box-author'>
        <img className='avatar' src={url} />
        <div className='author-info'>
          <h5 className='name'>{data?.name}</h5>
          <span className='location'>{data?.info}</span>
        </div>        
      </div>
    </div>
  )
}
export default TalkBox;