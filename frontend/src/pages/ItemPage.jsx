import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BannerItemLink from '../components/UI/Banner/BannerItemLink';
import Block from '../components/UI/Block/Block';
import Button from '../components/UI/Button/Button';
import Container from '../components/UI/Container/Container';
import Flex from '../components/UI/Flex/Flex';
import ItemCard from '../components/UI/ItemCard/ItemCard';

import test from '../images/basket/test.png'

const ItemPage = () => {
    return (
        <div>
            <Header/>
            <Container>
                <StyledItem>
                    <div>
                        <img src={test} alt="" />
                    </div>
                    <div>
                        <p>Сибирская Коллекция </p>
                        <h2>Блинчики замороженные Сибирская Коллекция с малиной</h2>
                        <Flex>
                            <span>376,00 ₽/шт</span>
                            <Button text="В корзину" />
                        </Flex>
                        <p>
                            Состав: Тесто: мука пшеничная высший сорт, вода питьевая, 
                            масло сливочное, масло подсолнечное высший сорт, молоко сухое, 
                            меланж яичный, сахар, соль, разрыхлитель (гидрокарбонат натрия);
                            начинка: малина свежезамороженная, сахар, ванилин
                            Пищевая ценность на 100 г: белки 4.5 г, жиры 6.5 г, углеводы 30.5 
                            г, энергетическая ценность 220 ккал Срок хранения: 6 мес
                            Условия хранения: При температуре не выше -18°С
                            Упаковка: Картонная коробка
                        </p>
                    </div>
                </StyledItem>
            </Container>
            <Block title="Похожие товары" margin="0 0 100px 0">
                <Flex>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                </Flex>
            </Block>
            <BannerItemLink/>
            <Footer/>
        </div>
    );
};

const StyledItem = styled.div`
margin-top: 100px;
display: flex;
div {
    width: 50%;

    >p {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    h2 {
        font-size: 32px;
        font-weight: 800;
        margin-bottom: 30px;
    }
    >span {
        font-size: 32px;
        font-weight: 800;
    }
}

img {
    min-height: 200px;
    display: block;
    margin: 0 auto;
    border-radius: 20px;
}

div > div {
    margin-bottom: 60px;
}


`

export default ItemPage;