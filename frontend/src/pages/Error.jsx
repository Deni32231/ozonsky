import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import catalogButton from '../images/header/catalogButton.svg';

const Error = () => {
    return (
        <ErrorBlock>
            <h3>ошибка</h3>
            <span>404</span>
            <p>
                Ой! Кажется что-то пошло не так. Страница, которую вы запрашиваете,
                 не существует. Возможно она устарела, была удалена, или был введен 
                 неверный адрес в адресной строке.
            </p>
            <Link to="/">Перейти на главную</Link>
        </ErrorBlock>
    );
};

const ErrorBlock = styled.div`
width: 600px;
margin: 200px auto;
h3 {
    font-size: 72px;
    font-weight: 800;
    color: #BEBEBE;
    
}

span {
    font-size: 240px;
    font-weight: 800;
    line-height: 0.9;
    color: #BEBEBE;
    letter-spacing: 25px;
}

p {
    margin-top: 40px;
    font-size: 20px;
    margin-bottom: 60px;
}

a {
    padding: 12px 16px;
    font-size: 18px;
    font-weight: 600;
    border: 1px solid #FF0000;
    background-color: inherit;
    color: #FF0000;
    border-radius: 16px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 5px black;
    }
}

`

export default Error;