import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Block from '../components/UI/Block/Block';
import Flex from '../components/UI/Flex/Flex';

import map from '../images/contacts/map.png';

const Contacts = () => {
    return (
        <div>
            <Header/>
            <Block title="Контакты">
                <Flex>
                    <StyledInfo>
                        <span>Ильинский онлай - группа компаний...какой-<br/>то краткий текст какой-то краткий </span>
                        <span>ОГР ИНН какие то контакты</span>
                    </StyledInfo>
                    <StyledInfoBg>
                        <span>Телефон:<br/> 8 999 999-99-99</span>
                        <span>Вопросы, отзывы и предложения:<br/> feedback@адрес</span>
                    </StyledInfoBg>
                </Flex>
                <StyledMap src={map} alt="map"/>
            </Block>
            <Block title="МАГАЗИНЫ ГК «ОЗОНСКИЙ»">
                <Flex wrap="wrap" margin="0 0 200px 0">
                    <StyledShop>
                        <h3>Озонский Супермаркет</h3>
                        <p>Магазин продуктов<br/>
                        посёлок Ильинское-Усово, городской округ Красногорск</p>
                        <p>7:00-00:00</p>
                    </StyledShop>
                    <StyledShop>
                        <h3>Озонский Супермаркет</h3>
                        <p>Магазин продуктов<br/>
                        посёлок Ильинское-Усово, городской округ Красногорск</p>
                        <p>7:00-00:00</p>
                    </StyledShop>
                    <StyledShop>
                        <h3>Озонский Супермаркет</h3>
                        <p>Магазин продуктов<br/>
                        посёлок Ильинское-Усово, городской округ Красногорск</p>
                        <p>7:00-00:00</p>
                    </StyledShop>
                    <StyledShop>
                        <h3>Озонский Супермаркет</h3>
                        <p>Магазин продуктов<br/>
                        посёлок Ильинское-Усово, городской округ Красногорск</p>
                        <p>7:00-00:00</p>
                    </StyledShop>
                </Flex>
            </Block>
            <Footer/>
        </div>
    );
};

const StyledInfo = styled.div`
span {
    font-size: 24px;
    font-weight: 400;
    display: block;
    margin-top: 33px;
    &:first-child {
        margin-top: 0;
    }
}
`

const StyledInfoBg = styled(StyledInfo)`
background-color: #FFE7B9;
padding: 30px;
border-radius: 16px;
span {
    font-size: 22px;
}
`

const StyledMap = styled.img`
border-radius: 16px;
margin-top: 60px;
`

const StyledShop = styled.div`
max-width: 411px;
margin-top: 40px;
h3 {
    font-size: 22px;
    font-weight: 800;
}

p {
    font-size: 20px;
    font-weight: 400;
    margin: 10px 0;
}

`

export default Contacts;