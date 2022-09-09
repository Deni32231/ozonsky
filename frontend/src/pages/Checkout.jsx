import React from 'react';
import styled from 'styled-components';

import Block from '../components/Block';
import Flex from '../components/Flex';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

const Checkout = () => {
    return (
        <div>
            <Header />
                <Container>
                    <Block title="Оформление заказа">
                        <Flex>
                            <CheckoutInfo>
                                <form>
                                    <p>Ваши данные</p>
                                    <input type="text" placeholder='Имя Фамилия'/>
                                    <input type="tel" placeholder='+7 (999) 999-99-99'/>
                                    <p>Способ оплаты</p>
                                    <label>
                                        <input type="radio" />
                                        <span>Оплата картой при получении</span>
                                    </label>
                                    <label>
                                        <input type="radio" />
                                        <span>Оплата наличными при получении</span>
                                    </label>
                                    <p>Доставка сегодня за 25 минут</p>
                                    <span>ул. Новая,Ильинское-Усово, городской округ Красногорск </span>
                                    <div>
                                        <input type="text" placeholder='квартира'/>
                                        <input type="text" placeholder='этаж'/>
                                        <input type="text" placeholder='домофон'/>
                                        <input type="text" placeholder='подъезд'/>
                                        <br/>
                                        <textarea name="" id="" cols="55" rows="5" placeholder='комментарий для курьера'>

                                        </textarea>
                                    </div>
                                    <button>Оформить</button>
                                </form>
                            </CheckoutInfo>
                        </Flex>
                    </Block>
                </Container>
            <Footer />
        </div>
    );
};

const CheckoutInfo = styled.div`
p {
    font-size: 22px;
    font-weight: 800;
    margin-top: 50px;
    &:first-child {
        margin-top: 0px;
    }
}
form > input {
    border: none;
    background-color: inherit;
    font-size: 20px;
    display: block;
    margin-top: 10px;
}

p:last-child {
    margin-top:20px;
}

label {
    display: block;
    margin-top: 15px;
    font-size: 20px;
    >span {
        margin-left: 15px;
    }
}

div {
    margin-top: 40px;
    input {
        background-color: #FFF8EB;
        border: 1px solid #FFA900;
        padding: 20px;
        margin-right: 20px;
        border-radius: 16px;
        width: 150px;
        font-size: 20px;
    }
    textarea {
        background-color: #FFF8EB;
        border: 1px solid #FFA900;
        border-radius: 16px;
        padding: 10px 20px;
        font-size: 20px;
        margin-top: 20px;
        resize: none;
    }
}

button {
    background: #FF0000;
    border-radius: 31px;
    border: none;
    margin: 40px 0;
    padding: 15px 30px;
    color: #FFFFFF;
    font-size: 22px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 10px black;
    }
}
`

export default Checkout;