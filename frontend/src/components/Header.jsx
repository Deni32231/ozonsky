import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from './UI/Button/Button';
import Container from './UI/Container/Container';
import Flex from './UI/Flex/Flex';
import HeaderSearch from './HeaderSearch';

import catalogImg from '../images/header/catalogButton.svg';
import logo from '../images/header/logo.png';
import nav from '../images/header/nav.png';
import profile from '../images/header/profile.png';
import basket from '../images/header/basket.svg';

import test from '../images/headerCategory/apple.png';
import Modal from './UI/Modal/Modal';
import Input from './UI/Input/Input';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Header = () => {
    const isAuth = false;

    const navigate = useNavigate();

    const categoriesArr = [
        {id: 1, img: test, title: 'Супермаркет'},
        {id: 2, img: test, title: 'Кулинария'},
        {id: 3, img: test, title: 'Заморозка'},
        {id: 4, img: test, title: 'Другое'},
        {id: 5, img: test, title: 'Акции'},
        {id: 6, img: test, title: 'Магазины'},
    ]

    const [categories, setCategories] = useState(categoriesArr);
    const [activeRegister, setActiveRegister] = useState('none');
    const [activeLogin, setActiveLogin] = useState('none');

    return (
        <Container>
            <Modal active={activeRegister} setActive={setActiveRegister}>
                <RegisterForm/>
            </Modal>
            <Modal active={activeLogin} setActive={setActiveLogin}>
                <LoginForm/>
            </Modal>
            <StyledHeader>
                <Flex>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                    <Button text="Каталог" img={catalogImg} height="48px" onClick={() => navigate('/catalog')}/>
                    <HeaderSearch/>
                    <Button 
                        text="Доставка или самовывоз" 
                        img={nav}
                        bgcolor="rgba(255, 195, 77, 1)"
                        border="rgba(255, 195, 77, 1)"
                        bgcolorHover="rgba(255, 169, 0, 1)"
                        borderHover="rgba(255, 169, 0, 1)"
                        height="48px"
                    />
                    {isAuth 
                        ? 
                        <Button text="Личный кабинет" img={profile} height="48px" onClick={() => navigate('/cabinet')}/>
                        :
                        <Flex gap="10px">
                            <Button text="Вход" img={profile} height="48px" onClick={() => setActiveLogin('flex')}/>
                            <Button text="Регистрация" img={profile} height="48px" onClick={() => setActiveRegister('flex')}/>
                        </Flex>
                        
                    }
                    <Button text="Корзина" img={basket} height="48px" onClick={() => navigate('/basket')}/>
                </Flex>
                <Flex justify="flex-start" gap="10px" margin="20px 0">
                    {categories.map((item) => 
                        <Button 
                            key={item.id}
                            text={item.title} 
                            img={item.img} 
                            border="rgba(255, 169, 0, 0.45)"
                            bgcolor="rgba(255, 248, 235, 1)"
                            bgcolorHover="rgba(255, 232, 188, 1)"
                            borderHover="1px solid rgba(255, 169, 0, 1)"
                            color="#000000"
                            onClick={() => navigate(`/catalog/${item.id}`)}
                        />
                    )}
                </Flex>
            </StyledHeader>
        </Container>
    );
};

const StyledHeader = styled.div`
margin-top: 20px;
`

export default Header;