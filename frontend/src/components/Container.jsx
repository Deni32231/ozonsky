import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
max-width: 1290px;
margin: 0 auto;
padding: 0 20px;
`

const Container = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};

export default Container;