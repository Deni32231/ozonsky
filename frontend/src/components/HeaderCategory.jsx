import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Flex from './Flex';

import apple from '../images/headerCategory/apple.png'
import pizza from '../images/headerCategory/pizza.png'
import dumpling from '../images/headerCategory/dumpling.png'
import sponge from '../images/headerCategory/sponge.png'
import fire from '../images/headerCategory/fire.png'
import mark from '../images/headerCategory/mark.png'


const HeaderCategory = () => {
    return (
        <Flex justify="flex-start" margin="20px 0">
            <CategoryButton to="/">
                <img src={apple} alt="" />
                <span>Супермаркет</span>
            </CategoryButton>
            <CategoryButton to="/">
                <img src={pizza} alt="" />
                <span>Кулинария</span>
            </CategoryButton>
            <CategoryButton to="/">
                <img src={dumpling} alt="" />
                <span>Заморозка</span>
            </CategoryButton>
            <CategoryButton to="/">
                <img src={sponge} alt="" />
                <span>Другое</span>
            </CategoryButton>
            <CategoryButton to="/">
                <img src={fire} alt="" />
                <span>Акции</span>
            </CategoryButton>
            <CategoryButton to="/">
                <img src={mark} alt="" />
                <span>Магазины</span>
            </CategoryButton>
        </Flex>
    );
};

const CategoryButton = styled(Link)`
background-color: #FFF8EB;
padding: 10px 16px;
font-size: 16px;
font-weight: 700;
display: flex;
align-items: center;
border: 1px solid rgba(255, 169, 0, 0.45);
border-radius: 16px;
margin-left: 14px;
    > span{
        margin-top: 3px;
        margin-left: 7px;
        color: black;
    }
&:first-child {
    margin-left: 0px;
}

&:hover {
    background-color: #FFE8BC;  
}
`

export default HeaderCategory;