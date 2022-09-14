import React from 'react';
import styled from 'styled-components';
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';

const LoginForm = () => {
    return (
        <StyledForm onSubmit={e => e.preventDefault()}>
            <span>Вход</span>
            <Input type="email" placeholder="Email" required/>
            <Input type="password" placeholder="Пароль" required/>
            <Button text="Войти"/>
        </StyledForm>
    );
};

const StyledForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 50px;

>span {
    font-size: 25px;
    font-weight: 800;
    margin-bottom: 20px;
}

>input {
    margin: 20px;
}

>button {
    margin-top: 60px;
}
`

export default LoginForm;