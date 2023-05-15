import './../Guides.scss';
import React, { useEffect, useState } from 'react';
import Tabs from '../../../components/Tabs/Tabs';
import DataHelper, { isEmpty } from '../../../helper/data.helper';

const GuideApp1Video = () => {
  const [tabs, setTabs] = useState();
  const [tabActive, setTabActive] = useState();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let url = './../../content/raw/app1videos.json';
    (async () => {
      const rs = await DataHelper.getDataJson(url);
      if (rs) {
        const tabs = Object.values(rs);
        setTabs(tabs);
        if (tabs?.length) {
          setTabActive(tabs[0]?.id);
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (!isEmpty(tabActive)) {
      const res = tabs.find((t) => t.id === tabActive)
      setVideos(res?.data || []);
    }
  }, [tabActive]);

  return (
    <div className='guides-video'>
      <h2 className='guides-title'>Video hướng dẫn sử dụng</h2>
      <div className='guides-video-tabs'>
        <Tabs
          menu={tabs}
          selected={tabActive}
          onSelect={(val) => {
            if (tabActive === val) {
              return;
            }
            else {
              setTabActive(val)
            }
          }}
        />
      </div>

      <div className='video-guides-item'>
        {Array.isArray(videos) && videos?.length && videos.map((vid, index) => {
          return (
            <div
              key={index}
              className='video-guides-card'
            >
              <div className='video-thumbnail'>
                <iframe width="100%" height="100%" src={vid.source} title={vid.title} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
              </div>
              <div className='video-info'>
                <h5 className='video-title'>{vid.title}</h5>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}
export default GuideApp1Video;