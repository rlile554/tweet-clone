import React from 'react';
import styled from 'styled-components';
import TweetInput from './TweetInput/TweetInput';
import TweetList from './TweetList/TweetList';

const AppContainer = styled.div`
  height: 100vh;
  width: 600px;
  padding: 30px 8px 0 8px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #faf3f3;
  color: #a7bbc7;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <Title>
        SUPER AWESOME TWITTER CLONE
      </Title>
      <TweetInput/>
      <TweetList/>
    </AppContainer>
  );
}

export default App;

