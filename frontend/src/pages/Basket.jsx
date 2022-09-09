import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Block from '../components/Block';

import testPng from '../images/basket/test.png';
import deletePng from '../images/basket/delete.png';

const Basket = () => {

    const [count, setCount] = useState(1);

    return (
        <div>
            <Header />
            <Container>
                <Block title="Корзина">
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
align-items: center;

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

export default Basket;