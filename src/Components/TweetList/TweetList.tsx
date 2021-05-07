import React from 'react';
import Tweet from '../Tweet/Tweet';
import {TweetListProps} from './interface';

const TweetList = ({tweets, deleteTweet}: TweetListProps) => {
  return (
    <>
      {tweets.map((t) => <Tweet tweet={t} key={t.id} onDelete={deleteTweet}/>)}
    </>
  )
};

export default TweetList;
