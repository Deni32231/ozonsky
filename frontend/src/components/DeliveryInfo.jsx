import React from 'react';
import styled from 'styled-components';
import Block from './UI/Block/Block';
import Flex from './UI/Flex/Flex';

import map from '../images/deliveryInfo/map.png'

const DeliveryInfo = () => {
    return (
        <Block title="Доставка и оплата">
            <Flex align="flex-start" gap="20px">
                <StyledDelivery>
                    <h4>Зоны доставки</h4>
                    <p>
                        Доставка осуществляется в районе ЖК «Ильинские Луга» 
                        (Харьковськая обл., Красногорск, пос. Ильинское-Усово, ул. Заповедная) и ЖК «Новая Рига» 
                        (Харьковськая обл., Красногорск, д. Глухово, ул. Рублевское Предместье)
                    </p>
                    <h4>25 минут</h4>
                    <p>Доставка 25 минут. Принимаем заказы с 7:00 до 23:00</p>
                    <h4>1000 руб</h4>
                    <p>Минимальная сумма бесплатной доставки с учетом скидок. Иначе стоимость доставке 150 руб</p>
                    <h4>Оплата</h4>
                    <p>При оформлении заказа вы можете выбрать удобный для вас спобос рассчета</p>
                    <p>Изображения продуктов могут отличаться от продуктов в заказе.</p>
                </StyledDelivery>
                <StyledDelivery>
                    <h4>Карта доставки</h4>
                    <img src={map} alt="карта" />
                </StyledDelivery>
            </Flex>
        </Block>
    );
};

const StyledDelivery = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;

h4 {
    color: red;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
}
p {
    margin-bottom: 35px;
    font-size: 
}

img {
    border-radius: 20px;
}
`

export default DeliveryInfo;