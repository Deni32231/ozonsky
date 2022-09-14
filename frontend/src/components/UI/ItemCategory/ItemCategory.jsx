import React from 'react';
import styled from 'styled-components';

import test from '../../../images/categoryCard/test.png';

const ItemCategory = (props) => {
    return (
        <StyledCategory img={test}>
            <h3>Вода<br/>и напитки</h3>
        </StyledCategory>
    );
};

const StyledCategory = styled.div`
margin-top: 10px;
width: 302px;
height: 302px;
background: url(${props => props.img});
border-radius: 58px;
background-color: #F7FFE5;
border: 2px solid #CCE0A0;
cursor: pointer;

>h3 {
    margin-top: 40px;
    margin-left: 40px;
    font-size: 30px;
    font-weight: 600;
}

&:hover {
    box-shadow: 0 0 10px black;
}
`

export default ItemCategory;