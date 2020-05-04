import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';

const ShowCategory = ({expanded, onClick}) => {
  Icon.loadFont();
  const iconName = expanded ? 'expand-less' : 'expand-more';
  return (
    <TouchableOpacity onPress={onClick}>
      <Icon name={iconName} size={28} />
    </TouchableOpacity>
  );
};

export default ShowCategory;
