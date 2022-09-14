import React from 'react';
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';

import search from '../images/header/search.svg';
import styled from 'styled-components';

const HeaderSearch = () => {
    return (
        <StyledForm onSubmit={e => e.preventDefault()}>
            <Input type="text" placeholder="Начать поиск"/>
            <Button 
                border="rgba(255,0,0,0)" 
                bgcolor="inherit" 
                img={search}
                bgcolorHover="inherit"
                borderHover="rgba(255,0,0,0)"
            />
        </StyledForm>
    );
};

const StyledForm = styled.form`
display: flex;
align-items: center;

>button {
    margin-left: -60px;
}
`

export default HeaderSearch;