import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  background-color: aqua;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

function App() {
  return (
    <AppContainer>
      <Title>
        SUPER AWESOME TWITTER CLONE
      </Title>
    </AppContainer>
  );
}

export default App;

