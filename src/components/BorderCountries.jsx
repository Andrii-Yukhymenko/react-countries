import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/variables.scss';

const S_Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const S_Title = styled.p`
  margin-right: 10px;
  padding-top: 5px;

  @media (max-width: 425px) {
    margin-bottom: 15px;
    margin-right: 0;
  }
`;
const S_List = styled.ul`
  display: grid;
  align-items: center;
  //background-color: rgba(34, 60, 80, 0.6);
  border-radius: 3px;
  grid-template-columns: repeat(4, 1fr);
  gap: 7px;
`;
const S_Item = styled.li`
  background-color: var(--colors-ui-base);
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: var(--shadow);
`;

function BorderCountries({ borders, fullBorders }) {
  return (
    <S_Wrapper>
      <S_Title>Border Countries:</S_Title>
      <S_List
        style={{
          gridTemplateColumns: `repeat(${
            borders ? (fullBorders.length < 4 ? fullBorders.length : 4) : 1
          }, 1fr)`,
        }}>
        {borders ? (
          fullBorders.map((i) => (
              <Link key={i.name} to={'/' + i.name}>
            <S_Item>
              {i.alpha3Code}
            </S_Item>
              </Link>
          ))
        ) : (
          <S_Item>None</S_Item>
        )}
      </S_List>
    </S_Wrapper>
  );
}

export default BorderCountries;
