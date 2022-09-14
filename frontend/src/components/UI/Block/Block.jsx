import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Container from '../Container/Container';


const Block = ({title, isSeeAll, children}) => {
    return (
        <Container>
            <StyledBlock>
                <h2>{title}</h2>
                {isSeeAll && 
                <Button 
                    text="Смотреть все" 
                    border="rgba(255, 169, 0, 0.45)"
                    bgcolor="rgba(255, 248, 235, 1)"
                    bgcolorHover="rgba(255, 232, 188, 1)"
                    borderHover="1px solid rgba(255, 169, 0, 1)"
                    color="#000000"
                />}
            </StyledBlock>
            {children}
        </Container>
    );
};

const StyledBlock = styled.div`
margin-top: 100px;
margin-bottom: 40px;
display: flex;
h2 {
    font-size: 32px;
    font-weight: 800;
    display: inline-block;
    margin-right: 20px;
    text-transform: uppercase;
}

`

export default Block;