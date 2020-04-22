import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  background-color: #fff;
  border-radius: 20px;
  align-self: center;
  height: 35px;
`;

export const SearchBar = styled.TextInput`
  border-radius: 20px;
  padding: 5px;
  align-self: center;
  width: 320px;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 10px;
`;
