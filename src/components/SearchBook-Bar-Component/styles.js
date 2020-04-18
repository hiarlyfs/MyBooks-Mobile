import styled from 'styled-components/native';

export const SearchBar = styled.TextInput`
  width: 300px;
  padding-left: 10px;
  height: 40px;
`;

export const Button = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const ContainerSearch = styled.View`
  display: flex;
  flex-direction: row;
  width: 340px;
  background-color: #fff;
  align-self: center;
  border-radius: 20px;
  /* height: 30px; */
  align-items: center;
  justify-content: space-between;
`;
