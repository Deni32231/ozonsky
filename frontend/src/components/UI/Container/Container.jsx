import React from 'react';
import styled from 'styled-components';


const Container = ({children}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
max-width: 1280px;
margin: 0 auto;
padding: 0 20px;
`

export default Container;