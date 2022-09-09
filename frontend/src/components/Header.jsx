import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


import logo from '../images/header/logo.png';
import catalogButton from '../images/header/catalogButton.svg';
import search from '../images/header/search.svg';
import heart from '../images/header/heart.svg';
import profile from '../images/header/profile.svg';
import basket from '../images/header/basket.svg';

import Flex from './Flex';
import Container from './Container';
import HeaderCategory from './HeaderCategory';


const Header = ({ children }) => {

    return (
        <Container>
            <HeaderInner>
                <Flex>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <CatalogButton to="/catalog">
                        <ButtonImg src={catalogButton} alt="=" />
                        Каталог
                    </CatalogButton>
                    <form action="#" onClick={(e) => {
                        e.preventDefault();
                    }}>
                        <SearchInput placeholder='Начать поиск'>

                        </SearchInput>
                        <SearchButton>
                            <img src={search} alt="" />
                        </SearchButton>
                    </form>
                    <DeliveryButton>
                        Выберите способ получения <br/> 
                        <DeliveryBoldText>Доставка или самовывоз</DeliveryBoldText>
                    </DeliveryButton>
                    <MiiButton to="/cabinet" onClick={(e) => console.log(e.currentTarget)}>
                        <img src={heart} alt="heart" />
                    </MiiButton>
                    <MiiButton to="/cabinet" onClick={(e) => console.log(e.currentTarget)}>
                        <img src={profile} alt="heart" />
                    </MiiButton>
                    <Basket to='/basket'>
                        <ButtonImg src={basket} alt="=" />
                        Корзина
                    </Basket>
                </Flex>
                <HeaderCategory></HeaderCategory>
                {children}
            </HeaderInner>
        </Container>
    );
};

const HeaderInner = styled.div`
padding-top: 30px;
`

const CatalogButton = styled(Link)`
font-size: 16px;
font-weight: 800;
border-radius: 31px;
border: 1px solid #FF0000;
background-color: #FF0000;
color: #FFFFFF;
padding: 10px 20px;
cursor: pointer;
margin-left: 20px;
display: flex;
align-items: center;

&:hover {
    background-color: #DB0000;
}
`

const ButtonImg = styled.img`
margin-right: 8px;
`

const SearchInput = styled.input`
border: 1px solid #E1E1E1;
border-radius: 16px;
font-size: 16px;
font-weight: 400;
color: #6B6B6B;
padding: 12px;
margin-left: 25px;
width: 317px;
`

const SearchButton = styled.button`
background-color: #FFFFFF;
border: none;
cursor: pointer;
margin-left: -40px;
position: relative;
top: 6px;
`

const DeliveryButton = styled.button`
padding: 6px 18px;
background-color: #FFA900;
border: none;
border-radius: 15px;
color: #FFFFFF;
cursor: pointer;
margin-left: 40px;
font-size: 14px;
text-align: start;
`

const DeliveryBoldText = styled.span`
font-weight: 800;
font-size: 16px;
white-space: nowrap;
`

const MiiButton = styled(Link)`
min-width: 50px;
min-height: 50px;
border: 1px solid #E1E1E1;
display: flex;
align-items: center;
justify-content: center;
border-radius: 16px;
background-color: none;
background-color: inherit;
margin-left: 14px;
cursor: pointer;

&:hover {
    border: 1px solid #FFA900;
    background-color: #FFF8EB;
}
`

const Basket = styled(Link)`
font-size: 16px;
font-weight: 800;
border: 1px solid #FF0000;
background-color: #FF0000;
color: #FFFFFF;
padding: 10px 20px;
cursor: pointer;
margin-left: 20px;
display: flex;
align-items: center;
border-radius: 15px;

&:hover{
    background-color: #DB0000;
}
`

export default Header;