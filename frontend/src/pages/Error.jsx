import React from 'react';
import styled from 'styled-components';
import Button from '../components/UI/Button/Button';
import Flex from '../components/UI/Flex/Flex';
import { useNavigate } from 'react-router-dom';

import catalogImg from '../images/header/catalogButton.svg';

const Error = () => {

    let navigate = useNavigate();


    return (
        <StyledError>
            <span>ошибка</span>
            <h2>404</h2>
            <p>
                Ой! Кажется что-то пошло не так. Страница, 
                которую вы запрашиваете, не существует. 
                Возможно она устарела, была удалена, или был введен 
                неверный адрес в адресной строке.
            </p>
            <Flex margin="40px 0">
                <Button text="Перейти на главную" onClick={() => navigate('/')}/>
                <Button text="Каталог" img={catalogImg} onClick={() => navigate('/catalog')}/>
            </Flex>
        </StyledError>
    );
};

const StyledError = styled.div`
width: 450px;
margin: 130px auto;
font-weight: 800;
color: #BEBEBE;

>span {
    font-size: 72px;
    margin-bottom: -70px;
}

>h2 {
    font-size: 240px;
    line-height: 0.9;
}

>p {
    font-size: 20px;
    font-weight: 400;
    color: #6B6B6B;
}
`

export default Error;