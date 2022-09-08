import React from 'react';
import styled from 'styled-components';
import Flex from './Flex';

const PromocodeBlock = () => {
    return (
        <Promocode>
            <Flex>
                <span>БЕСПЛАТНАЯ ДОСТАВКА + Скидка 10%</span>
                <button>Получить промокод</button>
            </Flex>
        </Promocode>
    );
};

const Promocode = styled.div`
background: rgb(255,119,21);
background: linear-gradient(90deg, rgba(255,119,21,1) 0%, rgba(255,31,0,1) 100%);
border-radius: 42px;
padding: 42px 62px;
color: #ffffff;
span {
    font-size: 38px;
    font-weight: 600;
}
button {
    background: inherit;
    color: #FFFFFF;
    padding: 13px 32px;
    border: 2px solid #FFFFFF;
    border-radius: 31px;
    cursor: pointer;
    font-size: 22px;
    font-weight: 400;
    &:hover {
        box-shadow: 0px 0px 10px black;
    }
}
`

export default PromocodeBlock;