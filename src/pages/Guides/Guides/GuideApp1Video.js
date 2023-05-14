import './../Guides.scss';
import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Popup from '../../../components/Modal/Popup';

const GuideApp1Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='guides-video'>
      <h2 className='guides-title'>Video hướng dẫn sử dụng</h2>
      <div className='video-guides-item'>
        <div className='video-guides-card'>
          <div className='video-thumbnail' style={{ backgroundImage: "url(" + "/guides/video-thumbnail-1.jpg" + ")" }}>
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
                    <path fill-rule="evenodd" d="M24 12.0001L5 23V1L24 12.0001Z" clip-rule="evenodd"></path>
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
          </div>
          <div className='video-info'>
            <h5 className='video-title'>Giới thiệu tác vụ cấp giấy lần đầu</h5>
          </div>
        </div> 
        <div className='video-guides-card'>
          <div className='video-thumbnail' style={{ backgroundImage: "url(" + "/guides/video-thumbnail-1.jpg" + ")" }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sf58kFCRqYg?mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" poster="/guides/video-thumbnail-1.jpg"></iframe>            
          </div>
          <div className='video-info'>
            <h5 className='video-title'>Giới thiệu tác vụ cấp giấy lần đầu</h5>
          </div>
        </div>   
        {/* <div className='video-guides-card'>
          <div className='video-thumbnail'>
            <video src="https://www.youtube.com/embed/sf58kFCRqYg?mute=1" poster="/guides/video-thumbnail-1.jpg"></video>           
          </div>
          <div className='video-info'>
            <h5 className='video-title'>Giới thiệu tác vụ cấp giấy lần đầu</h5>
          </div>
        </div>     */}
      </div>      
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
