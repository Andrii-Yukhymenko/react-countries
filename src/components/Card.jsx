import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.article``;
const CardImage = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
const CardBody = styled.div``;
const CardTitle = styled.h3``;
const CardList = styled.ul``;
const CardListItem = styled.li``;

export const Card = ({ img, name, info }) => {
  return (
    <Link to={'/' + name}>
      <Wrapper>
        <CardImage src={img} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardList>
            {info.map((i) => {
              return (
                <CardListItem key={i.title}>
                  <b>{i.title}:</b>
                  {i.description}
                </CardListItem>
              );
            })}
          </CardList>
        </CardBody>
      </Wrapper>
    </Link>
  );
};
