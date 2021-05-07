import {Tweet} from '../interface';

export type TweetListProps = {
  tweets: Tweet[];
  deleteTweet: (id: number) => void;
};
