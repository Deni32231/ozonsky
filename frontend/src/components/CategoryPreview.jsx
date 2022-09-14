import React from 'react';
import Block from './UI/Block/Block';
import Flex from './UI/Flex/Flex';
import ItemCategory from './UI/ItemCategory/ItemCategory';

const CategoryPreview = ({title, isSeeAll}) => {
    return (
        <Block title={title} isSeeAll={isSeeAll}>
                <Flex wrap="wrap" justify="flex-start" gap="10px">
                    <ItemCategory/>
                    <ItemCategory/>
                    <ItemCategory/>
                    <ItemCategory/>
                </Flex>
            </Block>
    );
};

export default CategoryPreview;