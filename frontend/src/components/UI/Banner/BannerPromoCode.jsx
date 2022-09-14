import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Flex from '../Flex/Flex';

const BannerPromoCode = () => {
    return (
        <Container>
            <StyledBanner>
                <Flex align="flex-start" justify="space-around">
                    <div>
                        <h2>БЕСПЛАТНАЯ ДОСТАВКА</h2>
                        <span>первого заказа</span>
                    </div>
                    <h2>+</h2>
                    <div>
                        <h2>СКИДКА 10%</h2>
                        <span>на заказы клинарии</span>
                    </div>
                    <Button 
                        text="Получить промокод"
                        bgcolor="inherit"
                        bgcolorHover="inherit"
                        border="#FFFFFF"
                        borderHover="#FFFFFF"
                    />
                </Flex>
            </StyledBanner>
        </Container>
    );
};

const StyledBanner = styled.div`
margin: 50px 0;
background: rgb(255,119,21);
background: linear-gradient(90deg, rgba(255,119,21,1) 0%, rgba(255,31,0,1) 100%);
padding: 40px 60px;
border-radius: 44px;
font-weight: 800;
color: #FFFFFF;

h2 {
    font-size: 38px;
    text-transform: uppercase;
}
span {
    font-size: 22px; 
}
button {
    margin-left: 20px;
}

`

export default BannerPromoCode;