import React from 'react';
import { View, Text, Image } from 'react-native';
import { UserType, TweetType } from '../../../../types';
import { styles } from './styles';
import { Feather, EvilIcons, AntDesign } from '@expo/vector-icons';

export type FooterProps = {
  tweet: TweetType;
};

const Footer = ({ tweet }: FooterProps) => (
  <View style={styles.container}>
    {/* COMMENTS  */}
    <View style={styles.iconContainer}>
      <Feather name="message-circle" size={20} color="grey" />
      <Text style={styles.number}>{tweet.numberOfComments}</Text>
    </View>
    {/* RETWEETS  */}
    <View style={styles.iconContainer}>
      <EvilIcons name="retweet" size={28} color="grey" />
      <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
    </View>
    {/* LIKES  */}
    <View style={styles.iconContainer}>
      <AntDesign name="hearto" size={20} color="grey" />
      <Text style={styles.number}>{tweet.numberOfLikes}</Text>
    </View>
    {/* SHARES  */}
    <View style={styles.iconContainer}>
      <EvilIcons name="share-google" size={28} color="black" />
    </View>
  </View>
);
export default Footer;
