import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import {Button} from '@material-ui/core';

const InputForm = styled.form`
  margin-top: 12px;
  padding: 12px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  background-color: white;
  border: 1px solid black;
`;

const TweetInput = () => {
  return (
    <InputForm>
      <TextField placeholder="Enter a message..." fullWidth/>
      <Button
        variant="contained"
        size="small"
        style={{marginTop: '8px'}}
      >
        Tweet
      </Button>
    </InputForm>
  );
}

export default TweetInput;
