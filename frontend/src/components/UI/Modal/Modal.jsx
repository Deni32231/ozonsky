import React from 'react';
import styled from 'styled-components';

const Modal = ({active, setActive, children}) => {
    return (
        <StyledModal style={{display: active}} onClick={() => setActive(false)}>
            <StyledModalContent onClick={e => e.stopPropagation()}>
                {children}
            </StyledModalContent>
        </StyledModal>
    );
};

const StyledModal = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
background: rgba(0,0,0, 0.5);
display:none;
justify-content: center;
align-items: center;
`

const StyledModalContent = styled.div`
padding: 25px;
background-color: white;
border-radius: 16px;
min-width: 250px;
`

export default Modal;