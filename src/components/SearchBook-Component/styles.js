import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  width: 330px;
  padding: 8px;
  elevation: 5;
  margin: 5px;
`;

export const BookInformation = styled.View`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 5px;
`;

export const Key = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 16px;
`;

export const Value = styled.Text`
  color: black;
  font-weight: normal;
  width: 240px;
  font-size: 14px;
  line-height: 20px;
`;
