import React from 'react';
import { View } from 'react-native';
import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture';

export type LeftContainer = {
  user: UserType;
};

const LeftContainer = ({ user }: LeftContainer) => (
  <View>
    <ProfilePicture image={user.image} size={70} />
  </View>
);
export default LeftContainer;
