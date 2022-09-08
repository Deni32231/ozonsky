import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
display: flex;
align-items: ${props => props.align ?? 'center'};
justify-content: ${props => props.justify ?? 'space-between'};
flex-direction:  ${props => props.direction ?? 'row'};
gap: ${props => props.gap ?? '0'};
flex-wrap: ${props => props.wrap ?? 'no-wrap'};
margin: ${props => props.margin ?? '0'};
`

const Flex = (props) => {
    return (
        <StyledFlex {...props} />
    );
};

export default Flex;