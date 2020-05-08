import styled from 'styled-components/native';
import SpinnerOverlay from 'react-native-loading-spinner-overlay';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Titulo = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Spinner = styled.ActivityIndicator`
  align-self: center;
  top: 50px;
`;

export const SpinnerInicial = styled(SpinnerOverlay)``;
