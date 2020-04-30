import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const Link = ({style, children}) => <View style={style}>{children}</View>;

export const WebLink = styled(Link)`
  width: 140px;
`;
