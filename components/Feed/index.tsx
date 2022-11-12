import React from 'react';
import { View, FlatList } from 'react-native';
import Tweet from '../Tweet';
import { tweets } from '../../data/tweets';

const Feed = () => (
  <>
    <FlatList
      data={tweets}
      renderItem={({ item }) => <Tweet tweet={item} />}
      keyExtractor={(item) => item.id}
    />
  </>
);

export default Feed;
