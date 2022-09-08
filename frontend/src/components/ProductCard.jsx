import React from 'react';
import styled from 'styled-components';

import Flex from './Flex';


const ProductCard = ({ title, price, amount, img }) => {
    return (
        <Card>
            <div>
                <img src={img} alt="" />
            </div>
            <span>В наличии {amount} шт</span>
            <p>{ title }</p>
            <Flex>
                <span>{ price } руб</span>
                <button>В корзину</button>
            </Flex>
        </Card>
    );
};

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
max-width: 300px;
height: 400px;
border: 1px solid #DADADA;
border-radius: 20px;
padding: 10px 20px;
cursor: pointer;

>div:first-child {
    width: 100%;
    max-height: 200px;
    display: flex;
    justify-content: center;
}

>div > img {
    max-height: 100%;
    max-width: 100%;
}

>span {
    font-size: 14px;
    color: #434343;
}

>p {
    margin-top: 5px;
    font-size: 20px;
    font-weight: 600;
}

> div > span {
    font-size: 24px;
    font-weight: 600;
}

button {
    background-color: inherit;
    border: 1px solid #FF0000;
    font-size: 16px;
    color: #FF0000;
    font-weight: 600;
    padding: 10px 15px;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
        color: #FFFFFF;
        background-color: #FF0000;
    }
}

&:hover{
    box-shadow: 0px 0px 4px black;
}
}
`

export default ProductCard;