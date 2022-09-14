import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from './UI/Container/Container';
import Flex from './UI/Flex/Flex';

import phone from '../images/footer/phone.svg';
import mail from '../images/footer/mail.svg';
import inst from '../images/footer/inst.svg';
import compass from '../images/footer/compass.svg';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Flex align="flex-start">
                    <nav>
                        <ul>
                            <li><Link to="/">Ильинский онлайн</Link></li>
                            <li><Link to="/">Кулинария</Link></li>
                            <li><Link to="/">Супермаркет</Link></li>
                            <li><Link to="/">Заморозка</Link></li>
                            <li><Link to="/">Другое</Link></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <li><Link to="/">Ильинский клуб</Link></li>
                            <li><Link to="/">Акции</Link></li>
                            <li><Link to="/">Доставка и оплата</Link></li>
                            <li><Link to="/">Программа лояльности</Link></li>
                            <li><Link to="/">Политика конфиденциальности</Link></li>
                            <li><Link to="/">Вакансии</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <nav>
                            <li><img src={phone} alt="" /><a href="tel:+799999999999">+7 (999) 999-99-99</a></li>
                            <li><img src={compass} alt="" /><Link to="/">Адреса магазинов</Link></li>
                            <li><img src={inst} alt="" /><Link to="/">Следите за нами</Link></li>
                            <li><img src={mail} alt="" /><Link to="/">Обратная связь</Link></li>
                        </nav>
                    </div>
                    <div>
                        <span>Подпишитесь на вкусные и полезые новости</span>
                        <form onSubmit={e => e.preventDefault()}>
                            <Input type="email" placeholder="Email" required/>
                            <Button 
                                text="Подписаться"
                                border="#FFFFFF"
                                borderHover="#FFFFFF"
                                bgcolor="inherit"
                                bgcolorHover="inherit"
                            />
                        </form>
                    </div>
                </Flex>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
background-color: #D90000;
padding: 40px 0 20px 0;
a {
    color: #FFFFFF;
}
div > nav > li {
    display: flex;
    align-items: center;
    &:first-child {
        margin-bottom: 20px;
        font-size: 20px;
    }
    >img {
        margin-right: 15px;
    }
}

li {
    margin-bottom: 10px;
    font-size: 14px;
}

div > span {
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
}

form {
    display: flex;
    margin-top: 20px;
}

button {
    margin-left: 20px;
}
`

export default Footer;