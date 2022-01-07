import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../styles/variables.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const S_Wrapper = styled.article``;
const S_CardImage = styled(LazyLoadImage)`
  height: 150px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
const S_CardBody = styled.div`
  background-color: var(--colors-ui-base);
  padding: 25px 20px 30px 20px;
`;
const S_CardTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const S_CardList = styled.ul``;
const S_CardListItem = styled.li`
  margin-bottom: 10px;
  &:nth-last-child(1){
    margin-bottom: 0;
  }
`;

export const Card = ({ img: imgSrc, name, info }) => {
  return (
    <Link to={'/' + name}>
      <S_Wrapper>
        <S_CardImage
          alt={name}
          src={imgSrc}
        />
        <S_CardBody>
          <S_CardTitle>{name}</S_CardTitle>
          <S_CardList>
            {info.map((i) => {
              return (
                <S_CardListItem key={i.title}>
                  <b>{i.title}:</b>
                  {i.description}
                </S_CardListItem>
              );
            })}
          </S_CardList>
        </S_CardBody>
      </S_Wrapper>
    </Link>
  );
};
