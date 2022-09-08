import React from 'react';
import styled from 'styled-components';

const CategoryCard = ({title, img, bgColor}) => {
    return (
        <Card img={img} bgColor={bgColor}>
            <h4>{title}</h4>
        </Card>
    );
};

const Card = styled.div`
background-color: ${props => props.bgColor ?? '#F7FFE5'};
border-radius: 58px;
width: 297px;
height: 297px;
background-image: url(${props => props.img ?? 'test.png'});
color: #383C5C;
font-size: 30px;
font-weight: 600;
cursor: pointer;
margin-top: 20px;
margin-left: 20px;


&:first-child {
    margin-left: 0;
}


&:nth-child(5n){
    margin-left: 0;
}


>h4 {
    max-width: 152px;
    margin-top: 50px;
    margin-left: 40px;
}

&:hover {
    box-shadow: 0px 0px 4px black;
}
`

export default CategoryCard;