import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainContainer from './MainContainer';
import LeftContainer from './LeftContainer';
import { styles } from './styles';
import { TweetType } from '../../types';

// HomeScreen -> send the tweet data to TweetComp
// we need to define a TweetType
// TweetComp consume the data in props
// we defines a TweetProps using the TweetType

export type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => (
  <View style={styles.container}>
    {/* LEFT CONTAINER  */}
    <LeftContainer user={tweet.user} />

    {/* MAIN CONTAINER  */}
    <MainContainer tweet={tweet} />
  </View>
);

export default Tweet;
