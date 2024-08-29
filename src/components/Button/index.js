import React from 'react';
import './button.scss';

const STYLES = [
    "vbt-blue-solid",
    "vbt-blue-outline",
    "vbt-white-solid",
    "vbt-white-outline",
    "vbt-white",
    "vbt-red-solid",
    "button-video",
    "vbt-blue-action"
];

const SIZE = ["vbt-small", "vbt-medium", "vbt-larger", "vbt-icon-only", "vbt-larger-icon"];

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    disabled
}) => {
    const setButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const setButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[1];
    return (
        <button
            onClick={onClick}
            type={type}
            className={`vbt ${setButtonStyle} ${setButtonSize}`}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button; 
