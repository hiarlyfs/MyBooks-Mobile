import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-left: 5px;
`;

export const Spinner = styled.ActivityIndicator`
  align-self: center;
  margin-top: 10px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.expanded ? 'auto' : '65px')};
  margin-top: 10px;
`;

export const HeadContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
