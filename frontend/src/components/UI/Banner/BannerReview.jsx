import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Flex from '../Flex/Flex';

import stars from '../../../images/bannerReview/stars.png'

const BannerReview = () => {
    return (
        <Container>
            <StyledBanner>
                <Flex align="flex-start" justify="flex-start">
                    <div>
                        <h2>Оцените магазин</h2>
                        <span>Поделитесь впечатлениями о заказе <br/>и помогите сделать нас лучше</span>
                    </div>
                    <div>
                        <img src={stars} alt="" />
                        <Button 
                            text="Оставить отзыв"
                        />
                    </div>
                </Flex>
            </StyledBanner>
        </Container>
    );
};

const StyledBanner = styled.div`
margin: 50px 0;
background: #FFF8EB;
padding: 40px 60px;
border-radius: 24px;
font-weight: 800;

h2 {
    font-size: 38px;
    text-transform: uppercase;
}
span {
    font-size: 22px;
    font-weight: 400; 
}
button {
    margin-left: 220px;
}

img {
    margin-left: 200px;
    margin-bottom: 20px;
}

`

export default BannerReview;