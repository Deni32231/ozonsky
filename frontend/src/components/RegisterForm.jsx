import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/features/auth/authSlice';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = () => {
        try {
            dispatch(registerUser({
                username,
                email, 
                password, 
                passwordConfirm
            }))
            setUsername('');
            setEmail('');
            setPassword('');
            setPasswordConfirm('');
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <StyledForm onSubmit={e => e.preventDefault()}>
            <span>Регистрация</span>
            <Input 
                type="text" 
                placeholder="ФИО" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input 
                type="email" 
                placeholder="Email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
                type="password" 
                placeholder="Пароль" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input 
                type="password" 
                placeholder="Повторите пароль" 
                required
                onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <Button text="Зарегистрироваться" onClick={handleSubmit}/>
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

export default RegisterForm;