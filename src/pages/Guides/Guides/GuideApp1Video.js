import './../Guides.scss';
import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Popup from '../../../components/Modal/Popup';

const GuideApp1Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='guides-video'>
      <h3 className='guides-title'>Video hướng dẫn sử dụng</h3>
      <p>Update...</p>
      <div className='video-guides-item'>
        <div className='video-guides-card' style={{ backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")", backgroundSize: 'cover' }}>
          <div className='video-button'>
            <Button
              buttonStyle="button-video"
              buttonSize="vbt-icon-only"
              onClick={() =>
                setIsOpen(true)
              }
            >
              <span className='ic-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd"></path>
                </svg>
              </span>
            </Button>
            {isOpen && (
              <Popup setIsOpen={setIsOpen} className='guides-video'>
                <video width="1080px" height='auto' controls >
                  <source src="/guides/file_example.mp4" type="video/mp4" />
                </video>
              </Popup>
            )}
          </div>
          <div className='video-info'>
            <h5 className='video-title'>title</h5>
          </div>
        </div>
      </div>
      {/* <div className='video-guides-item'>
        <div className='video-card'>
          <div className='video-button'>
            <Button
              buttonStyle="button-video"
              buttonSize="vbt-icon-only"
              onClick={() =>
                setIsOpen(true)
              }
            >
              <span className='ic-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd"></path>
                </svg>
              </span>
            </Button>
            {isOpen && (
              <Popup setIsOpen={setIsOpen} className='guides-video'>
                <video width="1080px" height='auto' controls >
                  <source src="/guides/file_example.mp4" type="video/mp4" />
                </video>
              </Popup>
            )}
          </div>
          <div className='video-thumbnail'>
            <img src="./../content/img/news-cong-tac-cap-so-hong-2.jpg"></img>
          </div>  
          <div className='video-info'>
            <h3 className='video-title'>title</h3>
          </div>         
        </div>
        <div className='video-card'>
          <div className='video-thumbnail'>
            <img src="./../content/img/news-cong-tac-cap-so-hong-2.jpg"></img>
          </div>  
          <div className='video-info'>
            <h3 className='video-title'>title</h3>
          </div>         
        </div>
      </div> */}
    </div>
  )
}
export default GuideApp1Video;


// export default function GuideApp1Video() {
  
//   return (
//     <div className='guides-video'>
//       <h3 className='guides-title'>Video hướng dẫn sử dụng</h3>
//       <div className='video-guides-item'>
//         <div className='video-card'>
//           <div className='video-thumbnail'>
//             <img src="./../content/img/news-cong-tac-cap-so-hong-2.jpg"></img>
//           </div>  
//           <div className='video-info'>
//             <h3 className='video-title'>title</h3>
//           </div>         
//         </div>
//         <div className='video-card'>
//           <div className='video-thumbnail'>
//             <img src="./../content/img/news-cong-tac-cap-so-hong-2.jpg"></img>
//           </div>  
//           <div className='video-info'>
//             <h3 className='video-title'>title</h3>
//           </div>         
//         </div>
//       </div>
//     </div>
//   )
// }
