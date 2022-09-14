import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Flex from '../Flex/Flex';
import Input from '../Input/Input';

const BannerItemLink = () => {
    return (
        <Container>
            <StyledBanner>
                <Flex align="flex-start" justify="">
                    <div>
                        <h2>Не нашли, что искали?</h2>
                        <span>Оставьте ссылку на товар или бренд.</span>
                    </div>
                    <div>
                        <form onSubmit={e => e.preventDefault()}>
                            <label><input type="radio" name="type" /> Товар</label>
                            <label><input type="radio" name="type"/> Бренд</label>
                            <Input type="text" placeholder="Ссылка" width="340px" required/>
                            <Button 
                                text="Отправить"
                            />
                        </form>
                    </div>
                </Flex>
            </StyledBanner>
        </Container>
    );
};

const StyledBanner = styled.div`
margin: 100px 0;
background: #FFE7B9;
padding: 40px 60px;
border-radius: 16px;
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
    margin-top: 20px;
}

img {
    margin-left: 200px;
    margin-bottom: 20px;
}

label {
    margin-right: 30px;
    cursor: pointer;
}

`

export default BannerItemLink;