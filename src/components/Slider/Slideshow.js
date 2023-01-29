import './Slideshow.scss';
import React, { useState } from 'react';
import LEFT_ICON from '../../images/arrow-left.svg';
import RIGHT_ICON from '../../images/arrow-right.svg';

const Slideshow = ({ children, visibility, current, slideWidth, slideHeight }) => {

  const [active, setActive] = useState(current);
  const count = React.Children.count(children);

  return (
    <div
      className='slide-show'
      style={{ width: slideWidth, height: slideHeight }}
    >

      {active > 0 && (
        <button className='slide-control left' onClick={() => setActive(i => i - 1)}>
          <img width={'32px'} height={'32px'} src={LEFT_ICON} alt="" />
        </button>
      )}

      {React.Children.map(children, (child, i) => (
        <div
          className='slide-content'
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= visibility ? '0' : '1',
            'display': Math.abs(active - i) > visibility ? 'none' : 'block',
          }}
        >
          <div className='slide-card'> {child} </div>
        </div>
      ))}

      {active < count - 1 && (
        <button className='slide-control right' onClick={() => setActive(i => i + 1)}>
          <img width={'32px'} height={'32px'} src={RIGHT_ICON} alt="" />
        </button>
      )}

    </div>
  )
}
export default Slideshow;