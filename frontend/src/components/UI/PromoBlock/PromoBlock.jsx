import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Container from '../Container/Container';

import mainBg from '../../../images/promoBlocks/PromoMain.jpg';
import topBg from '../../../images/promoBlocks/PromoTop.jpg';
import botBg from '../../../images/promoBlocks/PromoBottom.jpg';
import Flex from '../Flex/Flex';
import { useNavigate } from 'react-router-dom';

const PromoBlock = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <StyledPromo>
                <StyledPromoBlock 
                    img={mainBg} 
                    width="820px" 
                    height="460px" 
                    fsize="50px"
                    marginH2="100px 20px 20px 0px"
                >
                    <h2>
                    Начните день<br/>
                    с вкусной выпечи<br/>
                    из нашей кулинарии
                    </h2>
                    <Button 
                        text="Перейти к покупкам" 
                        bgcolor="inherit" 
                        border="rgba(255, 255, 255, 1)" 
                        bgcolorHover="inherit"
                        borderHover="rgba(255, 255, 255, 1)"
                        onClick={() => navigate('/catalog')}

                    />
                </StyledPromoBlock>
                <Flex justify="space-between" direction="column">
                    <StyledPromoBlock 
                        img={topBg} 
                        width="404px" 
                        height="218px"
                        fsize="28px"
                        marginH2="40px 0 0 0"
                    >
                        <h2>
                        Кэшбэк <br/>
                        с каждой <br/>
                        покупки
                        </h2>
                    </StyledPromoBlock>
                    <StyledPromoBlock 
                        img={botBg} 
                        width="404px" 
                        height="218px"
                        fsize="28px"
                        marginH2="100px 0 0 0"
                    >
                        <h2>
                        Оставьте  отзыв<br/>
                        и получи 5% скидку
                        </h2>
                    </StyledPromoBlock>
                </Flex>
            </StyledPromo>
        </Container>
    );
};

const StyledPromo = styled.div`
display: flex;
justify-content: space-between;
margin-top: 80px;

`

const StyledPromoBlock = styled.div`
background-repeat: no-repeat;
border-radius: 26px;
width: ${props => props.width};
height: ${props => props.height};
background: url(${props => props.img});
padding: 20px;
>h2 {
    color: #FFFFFF;
    font-weight: 800;
    margin: ${props => props.marginH2};
    font-size: ${props => props.fsize};
}
`

export default PromoBlock;