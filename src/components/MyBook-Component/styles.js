import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 3px;
  margin-bottom: 5px;
  border: 1px solid black;
`;

export const InformationContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const BookInformation = styled.View`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 5px;
  margin-left: 5px;
`;

export const Key = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 16px;
`;

export const Value = styled.Text`
  color: black;
  font-weight: normal;
  width: 180px;
  font-size: 14px;
  line-height: 20px;
`;

export const Image = styled.Image`
  height: 120px;
  width: 90px;
`;
