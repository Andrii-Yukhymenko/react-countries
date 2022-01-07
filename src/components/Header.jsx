import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { Container } from './Container.jsx';
import '../styles/main.scss';
import { Link } from 'react-router-dom';

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
const S_Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const S_ThemeSwitcher = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Header = () => {
  let LSTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(LSTheme ? LSTheme : 'light');

  const toggleTheme = () => {
    setTheme(LSTheme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  });
  return (
    <S_HeaderEl>
      <Container>
        <S_Wrapper>
          <Link to="/">
            <S_Title>React Countries</S_Title>
          </Link>

          <S_ThemeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoon /> : <IoSunnyOutline />}
            <span style={{ marginLeft: '10px' }}>{theme === 'light' ? 'Dark' : 'Light'} Theme</span>
          </S_ThemeSwitcher>
        </S_Wrapper>
      </Container>
    </S_HeaderEl>
  );
};

export default Header;
