import React from 'react';
import styled from 'styled-components';
import '../styles/variables.scss'

const S_Button = styled.button`
  padding: 7px 23px;
  display: flex;
  align-items: center;
  color: var(--colors-text);
`;

function MyButton({ children, style, callBack }) {
  return <S_Button onClick={() => callBack()} style={style}>{children}</S_Button>;
}

export default MyButton;
