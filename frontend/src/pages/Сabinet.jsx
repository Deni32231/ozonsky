import React from 'react';
import styled from 'styled-components';
import Block from '../components/Block';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

const Сabinet = () => {
    return (
        <div>
            <Header />
            <Container>
                <Block title="Личный кабинет">
                    <Information>
                        <form>
                            <label>
                                <span>Имя</span>
                                <input type="text" placeholder='Имя Фамилия'/>
                            </label>
                            <label>
                                <span>Номер телефона</span>
                                <input type="tel" placeholder='+7 (999) 999-99-99'/>
                            </label>
                            <label>
                                <span>День рождения</span>
                                <input type="date" placeholder='дата месяц'/>
                            </label>
                            <label>
                                <span>Эл. почта</span>
                                <input type="email" placeholder='Email'/>
                            </label>
                            <button>Сохранить</button>
                        </form>
                    </Information>
                    <button>Выйти</button>
                </Block>
            </Container>
            <Footer/>
        </div>
    );
};

const Information = styled.div`

label {
    display: block;
    span {
        font-size: 16px;
        color: #888888;
        margin-bottom: 6px;
    }
    
    p {
        display: inline-block;
        position: relative;
        left: 353px;
        bottom: 74px;
    }
}


input {
    display: block;
    width: 309px;
    padding: 10px;
    font-size: 20px;
    border: 1px solid #E2E2E9;
    background: #F3F3F7;
    border-radius: 10px;
    margin: 10px 0 25px;
}
button {
    padding: 12px 16px;
    font-size: 18px;
    font-weight: 600;
    border: 1px solid black;
    background-color: inherit;
    border-radius: 16px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 5px black;
    }
}
`

export default Сabinet;