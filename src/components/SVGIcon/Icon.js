import React from "react";
import data from './path.json';

const getViewBox = name => {
    switch (name) {
        case "iService1":
        case "iService2":
        case "iService3":
        case "iService4":
        case "iService5":
        case "iService6":
        case "iService7":
          return "0 0 40 40"; 
        case "ife1":
        case "ife2":
        case "ife3":
          return "0 0 48 48"; 
        default:
          return "0 0 32 32";
      }
};

const getPath = name => {
    const getpath = data;
    let icon = getpath.find(icon => icon.name === name);
    return icon.path.map((pt,i)=>{
        return <path key={i} fill={pt.fill} d={pt.d} stroke={pt.stroke} strokeWidth={pt.strokeWidth} />
    })
}
const ICON = ({
    name = "",
    viewBox = "",
    width = "100%",
    height = "100%",
    style = {},
    className = ""    
}) => (
    <svg 
        viewBox={viewBox || getViewBox(name)}
        width={width}
        height={height}
        style={style}
        className={className}
        fillRule="evenodd"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        {getPath(name)}
    </svg>
)

export default ICON