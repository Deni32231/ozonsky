import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Flex from '../Flex/Flex';

import test from '../../../images/productCard/test2.png';
import Container from '../Container/Container';
import { useNavigate } from 'react-router-dom';

const ItemCard = () => {

    const navigate = useNavigate();

    return (
            <StyledCard onClick={() => navigate('/item/2')}>
                <img src={test} alt="" />
                <h3>Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г</h3>
                <Flex justify="space-between">
                    <span>99 руб</span>
                    <Button text="В корзину" onClick={(e) => e.stopPropagation()}/>
                </Flex>
            </StyledCard>
    );
};

const StyledCard = styled.div`
margin-top: 10px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
border-radius: 20px;
cursor: pointer;

width: 302px;
padding: 20px;

border: 2px solid #DADADA;

>img {
    max-height: 200px
}

>h3 {
    margin: 20px 0;
    font-size: 20px;
    font-weight: 600;
}

>div {
    width: 100%;
    
    >span {
        font-size: 24px;
        font-weight: 600;
    }
}

&:hover {
    box-shadow: 0 0 10px black;
}

`

export default ItemCard;