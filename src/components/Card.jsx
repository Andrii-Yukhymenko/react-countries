import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article``;
const CardImage = styled.img``;
const CardBody = styled.div``;
const CardTitle = styled.h3``;
const CardList = styled.ul``;
const CardListItem = styled.li``;

export const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper>
      <CardImage />
      <CardBody>
        <CardTitle />
        <CardList>
          {info.map((i) => {
            <CardListItem key={i.name}>
              <b>{i.title}:</b>
              {i.description}
            </CardListItem>;
          })}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
