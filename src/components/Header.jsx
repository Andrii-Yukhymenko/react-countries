import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container.jsx';
import '../styles/main.scss';

const S_HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-bg);
  color: var(--colors-text);
`;
const S_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const S_Title = styled.a.attrs({
  href: '/',
})``;
const S_ThemeSwitcher = styled.div`
  cursor: pointer;
`;

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  });
  return (
    <S_HeaderEl>
      <Container>
        <S_Wrapper>
          <S_Title>React Countries</S_Title>
          <S_ThemeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoon /> : <IoMoonOutline />}
            <span style={{ marginLeft: '15px' }}>{theme} Theme</span>
          </S_ThemeSwitcher>
        </S_Wrapper>
      </Container>
    </S_HeaderEl>
  );
};

export default Header;
