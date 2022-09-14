import React from 'react';
import CategoryPreview from '../components/CategoryPreview';
import DeliveryInfo from '../components/DeliveryInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BannerPromoCode from '../components/UI/Banner/BannerPromoCode';
import BannerReview from '../components/UI/Banner/BannerReview';
import Block from '../components/UI/Block/Block';
import Flex from '../components/UI/Flex/Flex';
import ItemCard from '../components/UI/ItemCard/ItemCard';
import ItemCategory from '../components/UI/ItemCategory/ItemCategory';
import PromoBlock from '../components/UI/PromoBlock/PromoBlock';

const Home = () => {
    return (
        <div>
            <Header/>
            <PromoBlock/>
            <Block title="Скидки" isSeeAll>
                <Flex wrap="wrap" justify="flex-start" gap="10px">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </Flex>
            </Block>
            <CategoryPreview title="Супермаркет" isSeeAll/>
            <CategoryPreview title="Кулинария" isSeeAll/>
            <CategoryPreview title="Заморозка" isSeeAll/>
            <CategoryPreview title="Другое" isSeeAll/>
            <DeliveryInfo/>
            <BannerPromoCode/>
            <BannerReview/>
            <Footer/>
        </div>
    );
};

export default Home;