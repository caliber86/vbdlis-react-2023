import React from 'react'
import './Tabs.scss';

const Tabs = ({ menu, selected, onSelect }) => {
  return (
    <div className='tabs-control'>
      <div className='tabs-header-wrap'>
        {Array.isArray(menu) && menu?.length && menu.map((tab) => {
          return (
            <button
              className={selected === tab.id ? 'tab-item active' : 'tab-item'}
              onClick={() => onSelect(tab.id)}
            >
              <span className='tabs-name'>{tab.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
export default Tabs;