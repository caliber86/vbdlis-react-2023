import React, { useEffect, useRef, useState } from 'react'
import "./Marquee.scss";

const getFillList = (list, copyTimes = 1) => {
  let newlist = [];
  for (let i = 0; i < copyTimes; i++) {
    newlist.push(...list);
  }
  return newlist;
};

const Marquee = ({ list, time, toRight, ...props }) => {

  const marqueeContainer = useRef(null);
  const marqueeArea = useRef(null);
  const [moveLeft, setMoveLeft] = useState(0);
  const [showList, setShowList] = useState(list);
  const [realTime, setRealTime] = useState(time);

  useEffect(() => {
    const containerWidth = Math.floor(marqueeContainer.current.offsetWidth);
    const areaWidth = Math.floor(marqueeArea.current.scrollWidth);
    const copyTimes = Math.max(2, Math.ceil((containerWidth * 2) / areaWidth));
    const newMoveLeft = areaWidth * Math.floor(copyTimes / 2);
    const newRealTime =
      time * parseFloat((newMoveLeft / containerWidth).toFixed(2));

    setShowList(getFillList(list, copyTimes));
    setMoveLeft(newMoveLeft);
    setRealTime(newRealTime);

  }, [list]);

  const addStylesheetRules = (rules) => {
    var styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    var styleSheet = styleEl.sheet;
    styleSheet.insertRule(rules, 0);
  }

  let animationName = `animationName`;
  let keyframes = `
        @-webkit-keyframes ${animationName} {
          from {
            transform: translateX(0);
          }
        }`;

  addStylesheetRules(keyframes);

  let style = {
    animationName: animationName,
    animationTimingFunction: "linear",
    animationDuration: `${realTime / 2}s`,
    animationDelay: "0s",
    animationIterationCount: 'infinite',
    animationDirection: "normal",
    animationFillMode: "none",
    display: 'inline-block',
    whiteSpace: 'nowrap',
    animationPlayState: 'inherit',
    animationDirection: toRight ? "reverse" : ""
  };

  return (
    <div className='MarqueeContent' ref={marqueeContainer} {...props}>
      <div
        ref={marqueeArea}
        toRight={toRight}
        className={'MarqueeArea'}
        style={{
          transform: `translateX(-${moveLeft / 2}px)`,
          ...style
        }}
      >
        {showList.map((item, index) => {
          return <div key={index} className='MarqueeItem'>
            <div className='clientItem'>
              <img className='client-img' src={item?.image} alt="" />
              <span>{item?.name}</span>
            </div>
          </div>;
        })}
      </div>
    </div >
  );
};

export default Marquee;

