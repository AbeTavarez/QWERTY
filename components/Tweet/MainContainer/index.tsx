import React from 'react';
import { View, Text, Image } from 'react-native';
import { UserType, TweetType } from '../../../types';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import Footer from './Footer';

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => (
  <View style={styles.container}>
    <View style={styles.tweetHeaderContainer}>
      {/* NAMES  */}
      <View style={styles.tweetHeaderNames}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.username}>@{tweet.user.username}</Text>
        <Text style={styles.createdAt}>
          {moment(tweet.createdAt).fromNow()}
        </Text>
      </View>
      {/* MORE ICON  */}
      <View>
        <Ionicons name="chevron-down" size={15} color="grey" />
      </View>
    </View>
    {/* CONTENT AND IMAGE  */}
    <View>
      <Text style={styles.content}>{tweet.content}</Text>
      {tweet.image && (
        <Image source={{ uri: tweet.image }} style={styles.image} />
      )}
    </View>
    <Footer tweet={tweet} />
  </View>
);
export default MainContainer;
