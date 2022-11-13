import React from 'react';
import { View, Text, Image } from 'react-native';
import { UserType, TweetType } from '../../../types';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import Footer from './Footer';
import { useColorScheme } from 'react-native';

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => {
  const scheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.tweetHeaderContainer}>
        {/* NAMES  */}
        <View style={styles.tweetHeaderNames}>
          <Text
            style={[
              styles.name,
              { color: scheme === 'dark' ? '#fff' : '#000' }
            ]}
          >
            {tweet.user.name}
          </Text>
          <Text
            style={[
              styles.username,
              { color: scheme === 'dark' ? '#fff' : '#000' }
            ]}
          >
            @{tweet.user.username}
          </Text>
          <Text
            style={[
              styles.createdAt,
              { color: scheme === 'dark' ? '#fff' : '#000' }
            ]}
          >
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
        <Text
          style={[
            styles.content,
            { color: scheme === 'dark' ? '#fff' : '#000' }
          ]}
        >
          {tweet.content}
        </Text>
        {tweet.image && (
          <Image source={{ uri: tweet.image }} style={styles.image} />
        )}
      </View>
      <Footer tweet={tweet} />
    </View>
  );
};
export default MainContainer;
