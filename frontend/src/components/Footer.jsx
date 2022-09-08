import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Link } from 'react-router-dom';
import Flex from './Flex';
import phone from '../images/footer/phone.svg';
import compass from '../images/footer/compass.svg';
import inst from '../images/footer/inst.svg';
import mail from '../images/footer/mail.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Flex align="flex-start">
                    <nav>
                        <ul>
                            <li><Link to="/catalog">Озонский онлайн</Link></li>
                            <li><Link to="/catalog">Кулинария</Link></li>
                            <li><Link to="/catalog">Супермаркет</Link></li>
                            <li><Link to="/catalog">Заморозка</Link></li>
                            <li><Link to="/catalog">Другое</Link></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <li><Link to="/catalog">Озонский клуб</Link></li>
                            <li><Link to="/catalog">Акции</Link></li>
                            <li><Link to="/catalog">Доставка и оплата</Link></li>
                            <li><Link to="/catalog">Программа лояльности</Link></li>
                            <li><Link to="/catalog">Политика конфиденциальности</Link></li>
                            <li><Link to="/catalog">Вакансии</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <Flex justify="flex-start">
                            <img src={phone} alt="#"></img>
                            <a href="tel:+7999999999">+7 (999) 999-99-99</a>
                        </Flex>
                        <br/>
                        <span>Ежедневно c 09:00 до 21:00</span>
                        <nav>
                            <ul>
                                <li><img src={compass} alt="compass" /><a href="/">Адреса магазинов</a></li>
                                <li><img src={inst} alt="inst" /><a href="/">Следите за нами</a></li>
                                <li><img src={mail} alt="mail" /><a href="/">Обратная связь</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <p>Подпишитесь на вкусные и полезые новости</p>
                        <form>
                            <input type="email" placeholder='email'/>
                            <button>Подписаться</button>
                        </form>
                    </div>
                </Flex>
            </Container>
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
background-color: #D90000;
padding: 37px 0 20px 0;
margin-top: 100px;
max-width: 100%;
color: #FFFFFF;
font-weight: 400;
font-size: 14px;



li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    &:hover {
        font-weight: 800;
    }
    
    >img {
        margin-right: 10px;
    }
}

a {
    color: inherit;
}

span + nav {
    margin-top:  20px;
}

a[href^=tel] {
    font-size: 20px;
    font-weight: 600;
    margin-left: 10px;
    &:hover {
        font-weight: 800;
    }
}

p {
    font-size: 18px;
    font-weight: 400;
}

form {
    margin-top: 20px;
}

input {
    width: 251px;
    height: 46px;
    border-radius: 16px;
    border: inherit;
    padding: 10px 20px;
}

}
`

export default Footer;