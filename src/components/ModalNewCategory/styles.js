import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const ViewModal = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: transparent;
  justify-content: center;
`;

export const ModalView = styled.Modal``;

export const Container = styled.View`
  width: ${() => `${width - 10}px`};
  align-self: center;
  display: flex;
  background-color: #dcdcdc;
  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const ContainerInput = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const InputTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
`;

export const InputArea = styled.TextInput`
  background-color: #fff;
  margin-top: 5px;
  border-radius: 20px;
  height: 35px;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 240px;
  margin-top: 25px;
  justify-content: space-between;
  align-self: flex-end;
`;

export const ButtonModal = styled.Button``;
