import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const S_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const S_Title = styled.p`
  margin-right: 10px;
  padding-top: 10px;
`;
const S_List = styled.ul`
  display: grid;
  align-items: center;
  padding: 5px;
  background-color: rgba(34, 60, 80, 0.6);
  border-radius: 3px;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;

  @media (max-width: 425px){
    grid-template-columns: repeat(3, 1fr);
  }
`;
const S_Item = styled.li`
  background-color: var(--colors-ui-base);
  padding: 5px 10px;
  border-radius: 3px;
`;

function BorderCountries({borders, fullBorders}) {
  return (
    <S_Wrapper>
      <S_Title>Border Countries:</S_Title>
      <S_List style={{gridTemplateColumns: `repeat(${borders ? (fullBorders.length < 4 ? fullBorders.length : 4) : 1}, 1fr)`}}>
        {borders ? (
          fullBorders.map((i) => (
            <S_Item key={i.name}>
              <Link to={'/' + i.name}>{i.alpha3Code}</Link>
            </S_Item>
          ))
        ) : (
          <S_Item>None</S_Item>
        )}
      </S_List>
    </S_Wrapper>
  );
}

export default BorderCountries;
