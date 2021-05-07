import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {TweetInputProps} from './interface';

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

const TweetInput = ({onSubmit}: TweetInputProps) => {
  const [message, setMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
  };

  return (
    <InputForm onSubmit={onFormSubmit}>
      <TextField placeholder="Enter a message..." fullWidth value={message} onChange={onChange}/>
      <Button
        variant="contained"
        size="small"
        style={{marginTop: '8px'}}
        type="submit"
      >
        Tweet
      </Button>
    </InputForm>
  );
}

export default TweetInput;
