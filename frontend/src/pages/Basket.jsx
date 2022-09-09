import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Block from '../components/Block';
import Flex from '../components/Flex';

import testPng from '../images/basket/test.png';
import deletePng from '../images/basket/delete.png';

const Basket = () => {

    const [count, setCount] = useState(1);

    return (
        <div>
            <Header />
            <Container>
                    <Block title="Корзина">
                        <Flex align="flex-start">
                        <BasketItem>
                            <img src={testPng} alt="test" />
                            <span>Картофель бэби, 1 кг </span>
                            <span>85 руб</span>
                            <div>
                                <button onClick={() => setCount(count - 1)}>-</button>
                                <span>{count}</span>
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </div>
                            <span>{85 * count} руб</span>
                        </BasketItem>
                        <CheckoutBlock>
                            <p>Доставка сегодня, 18:11</p>
                            <span>ул. Новая, д. 13, посёлок Ильинское-Усово, городской округ Красногорск</span>
                            <div>
                                <span>Товары</span>
                                <span>2.443 кг</span>
                            </div>
                            <div>
                                <span>Доставка</span>
                                <span>Бесплатно</span>
                            </div>
                            <div>
                                <span>К оплате</span>
                                <span>500 рублей</span>
                            </div>
                            <Link to='/checkout'>Оформить заказ</Link>
                        </CheckoutBlock>
                        </Flex>
                    </Block>
            </Container>
            <Footer/>
        </div>
    );
};

const BasketItem = styled.div`
display: flex;
max-width: 850px;
justify-content: space-between;
align-items: flex-start;
width: 800px;

img {
    border-radius: 20px;
    max-width: 130px;
    max-height: 130px;
}

span {
    font-size: 20px;
    font-weight: 600;
}

div {
    padding: 7px 20px;
    background-color: #FFF8EB;
    border: 1px solid #FFE7B9;
    border-radius: 58px;
    color: #FFA900;
    display: flex;
    align-items: center;
    span {
        margin: 0 20px;
    }
    button {
        background-color: inherit;
        border: none;
        cursor: pointer;
        font-size: 30px;
        color: #FFA900;
    }
}
`

const CheckoutBlock = styled.div`
width: 415px;
background-color: #FFE7B9;
padding: 20px 20px;
border-radius: 16px;
>p {
    font-size: 20px;
    font-weight: 800;
}

>span {
    max-width: 300px;
    font-size: 14px;
}

>div {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    >span {
        font-size: 20px;
    }
}

a {
    display: block;
    background: #FF0000;
    text-align: center;
    border-radius: 31px;
    margin: 60px 20px 20px 20px;
    color: #FFFFFF;
    font-size: 22px;
    font-weight: 600;
    padding: 10px 0;
    &:hover {
        box-shadow: 0px 0px 10px black;
    }
}
`

export default Basket;