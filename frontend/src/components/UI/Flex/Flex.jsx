import React from 'react';
import styled from 'styled-components';

const Flex = ({children, justify, align, wrap, gap, margin, direction}) => {
    return (
        <StyledFlex
            justify={justify}
            align={align}
            wrap={wrap}
            gap={gap}
            margin={margin}
            direction={direction}
        >
            {children}
        </StyledFlex>
    );
};

const StyledFlex = styled.div`
display: flex;
justify-content: ${props => props.justify || 'space-between'};
align-items: ${props => props.align || 'center'};
flex-wrap: ${props => props.wrap || 'nowrap'};
gap: ${props => props.gap || '0'};
margin: ${props => props.margin || '0'};
flex-direction: ${props => props.direction || 'row'};
`

export default Flex;