import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
    return (
        <StyledInput {...props}>
            
        </StyledInput>
    );
};

const StyledInput = styled.input`
border: 2px solid #E1E1E1;
padding: 12px 14px;
border-radius: 16px;
font-size: 16px;
width: ${props => props.width || '240px'};
`

export default Input;