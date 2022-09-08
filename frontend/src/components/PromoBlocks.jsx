import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Flex from './Flex';

import promoMain from '../images/PromoBlocks/PromoMain.jpg';
import promoTop from '../images/PromoBlocks/PromoTop.jpg';
import promoBot from '../images/PromoBlocks/PromoBottom.jpg';

const PromoBlocks = () => {
    return (
        <Flex margin="40px 0">
            <MainPromo>
                <h2>Начните день <br/> с вкусной выпечи <br/> из нашей кулинарии</h2>
                <Link to="/catalog">Перейти к покупкам</Link>
            </MainPromo>
            <Flex direction="column" margin="0 0 0 19px">
                <TopPromo>
                    <h2>Кэшбэк <br/>с каждой <br/>покупки</h2>
                </TopPromo>
                <BotPromo>
                    <h2>Оставьте  отзыв<br/>и получи 5% скидку</h2>
                </BotPromo>
            </Flex>
        </Flex>
    );
};


const MainPromo = styled.div`
background-image: url(${promoMain});
width: 862px;
height: 460px;
border-radius: 30px;
background-repeat: no-repeat;
color: #FFFFFF;

>h2 {
    font-size: 50px;
    font-weight: 600;
    margin-top: 100px;
    margin-left: 50px;
    margin-bottom: 50px;
    
}

>a {
    font-size: 22px;
    font-weight: 400;
    margin-left: 50px;
    color: inherit;
    padding: 14px 22px;
    border: 2px solid #FFFFFF;
    border-radius: 31px;
    &:hover {
        box-shadow: 0px 0px 10px black;
    }
}
`

const TopPromo = styled(MainPromo)`
background-image: url(${promoTop});
width: 404px;
height: 224px;

>h2 {
    font-size: 28px;
    color: #3E5828;
    margin-top: 90px;
    margin-left: 30px;
    font-weight: 600;
}
`

const BotPromo = styled(TopPromo)`
background-image: url(${promoBot});
margin-top: 18px;
>h2 {
    color: #FFFFFF;
    margin-top: 125px;
}
`

export default PromoBlocks;