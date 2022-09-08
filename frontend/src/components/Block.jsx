import React from 'react';
import styled from 'styled-components';

import Flex from './Flex';

const Block = ({title, children}) => {
    return (
        <div>
            <StyledBlock>
                <h3>{title}</h3>
            </StyledBlock>
            {children}
        </div>
    );
};


const StyledBlock = styled.div`
>h3 {
    font-size: 32px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 115px 0 30px 0;
}
`

export default Block;