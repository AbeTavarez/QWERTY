import React from 'react';
import { View, Text, Image } from 'react-native';
import { UserType, TweetType } from '../../../../types';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

export type FooterProps = {
  tweet: TweetType;
};

const Footer = ({ tweet }: FooterProps) => (
  <View style={styles.container}>
    <Text>hello</Text>
  </View>
);
export default Footer;
