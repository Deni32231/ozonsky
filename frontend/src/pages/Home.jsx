import React from 'react';
import PromoBlocks from '../components/PromoBlocks';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import PromocodeBlock from '../components/PromocodeBlock';
import testPng from '../images/productCard/test.png'
import testPng2 from '../images/categoryCard/test.png'

import Flex from '../components/Flex';
import Block from '../components/Block'
import Footer from '../components/Footer';

const Home = () => {
    const name = 'Сок Ideas тыквенно-апельсиновый, 1л'
    return (
        <div>
            <PromoBlocks />
            <Block title="Скидки">
                <Flex gap="15px">
                    <ProductCard title={name} price="81931" amount="2" img={testPng}/>
                    <ProductCard title={name} price="81931" amount="2" img={testPng}/>
                    <ProductCard title={name} price="81931" amount="2" img={testPng}/>
                    <ProductCard title={name} price="81931" amount="2" img={testPng}/>
                </Flex>
            </Block>
            <Block title="Супермаркет">
                <Flex wrap="wrap">
                    <CategoryCard img={testPng2} title="Вода и напитки"/>
                    <CategoryCard img={testPng2} title="Вода и напитки"/>
                    <CategoryCard img={testPng2} title="Вода и напитки"/>
                    <CategoryCard img={testPng2} title="Вода и напитки"/>
                    <CategoryCard img={testPng2} title="Вода и напитки"/>
                    <CategoryCard img={testPng2} title="Вода и напитки"/>
                    <CategoryCard img={testPng2} title="Вода и напитки"/>
                    <CategoryCard img={testPng2} title="Вода и напитки"/>
                </Flex>
            </Block>
            <Block title="Кулинария">
            <Flex wrap="wrap">
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#FFF8EB" borderColor="#FFE7B9"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#FFF8EB" borderColor="#FFE7B9"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#FFF8EB" borderColor="#FFE7B9"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#FFF8EB" borderColor="#FFE7B9"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#FFF8EB" borderColor="#FFE7B9"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#FFF8EB" borderColor="#FFE7B9"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#FFF8EB" borderColor="#FFE7B9"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#FFF8EB" borderColor="#FFE7B9"/>
                </Flex>
            </Block>
            <Block title="Заморозка">
            <Flex wrap="wrap" justify="flex-start">
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#EBEDFF"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#EBEDFF"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#EBEDFF"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#EBEDFF"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#EBEDFF"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#EBEDFF"/>
                </Flex>
            </Block>
            <Block title="Другое">
                <Flex wrap="wrap">
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#EBFDFF"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#EBFDFF"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#EBFDFF"/>
                    <CategoryCard img={testPng2} title="Вода и напитки" bgColor="#EBFDFF"/>
                </Flex>
            </Block>
            <Block title="Доставка и оплата">
                <PromocodeBlock></PromocodeBlock>
            </Block>
        </div>
    );
};

export default Home;