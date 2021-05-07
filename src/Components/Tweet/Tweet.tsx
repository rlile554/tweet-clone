import React from 'react';
import {Card, CardContent, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {TweetProps} from './interface';

const Tweet = ({tweet, onDelete}: TweetProps) => {
  console.log('tweet');
  return (
    <Card style={{marginTop: '12px'}}>
      <CardContent style={{display: 'flex', flex: '1 0 auto', alignItems: 'center', justifyContent: 'space-between'}}>
        {tweet.message}
        <IconButton onClick={() => onDelete(tweet.id)}>
          <DeleteIcon/>
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Tweet;
