import {Tweet} from '../interface';

export type TweetProps = {
  tweet: Tweet;
  onDelete: (id: number) => void;
};
