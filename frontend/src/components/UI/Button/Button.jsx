import React from 'react';
import styled  from 'styled-components';

const Button = ({text, img, border, bgcolor, color, borderHover, bgcolorHover, height, ...props}) => {
    return (
        <StyledButton 
            text={text} 
            border={border} 
            bgcolor={bgcolor} 
            color={color}
            borderHover={borderHover}
            bgcolorHover={bgcolorHover}
            height={height}
            {...props}
        >
            {img && <img src={img} alt="#" />}
            {text && <span>{text}</span>}
        </StyledButton>
    );
};


const StyledButton = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 12px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 16px;
    cursor: pointer;
    height: ${props => props.height ?? "auto"};
    border: 2px solid ${props => props.border ?? "rgba(255, 0, 0, 1)"};
    background-color: ${props => props.bgcolor ?? "rgba(255, 0, 0, 1)"};
    color: ${props => props.color ?? "rgba(255, 255, 255, 1)"};

    img {
        margin-right: ${props => props.text ? '14px' : '0'};
        max-height: 26px;
    }

    &:hover {
        border: 2px solid ${props => props.borderHover ? props.borderHover : "rgba(220, 0, 0, 1)"};
        background-color: ${props => props.bgcolorHover ? props.bgcolorHover : "rgba(220, 0, 0, 1)"};
    }
`

export default Button;