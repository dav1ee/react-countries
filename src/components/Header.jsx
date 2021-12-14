import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';

import { Container } from './Container';

const Header = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoSunnyOutline /> : <IoMoon />}
            <span style={{ marginLeft: '0.5rem' }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

const HeaderEl = styled.header`
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  color: var(--colors-text);
  text-decoration: none;
`;

const ModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fs-sm);
  color: var(--colors-text);
  text-transform: capitalize;
  cursor: pointer;
`;

export default Header;
