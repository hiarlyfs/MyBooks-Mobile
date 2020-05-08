import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/Entypo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const {width} = Dimensions.get('window');
Icon.loadFont();

export const ViewModal = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: transparent;
  justify-content: center;
`;

export const ModalView = styled.Modal``;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: ${() => `${width - 10}px`};
  background-color: #fff;
  align-self: center;
  padding: 5px;
`;

export const Informe = styled.Text`
  font-size: 20px;
  line-height: 25px;
  text-align: justify;
  margin-top: 10px;
`;

export const TituloLivro = styled(Informe)`
  font-weight: bold;
`;

export const ContainerButtons = styled.View`
  align-self: flex-end;
  margin-right: 5px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  width: 140px;
  justify-content: space-between;
`;

export const ButtonModal = styled.Button``;

export const ContainerPicker = styled.View`
  margin-top: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PickerCategoria = ({categorias, onValueChange, value}) => (
  <CategoriaPicker
    onValueChange={onValueChange}
    selectedValue={value}
    mode="dropdown">
    <Picker.Item value={undefined} label="Selecione uma categoria" />
    {categorias.map((categoria) => (
      <Picker.Item
        value={categoria.nome}
        label={categoria.nome}
        // eslint-disable-next-line no-underscore-dangle
        key={categoria._id}
      />
    ))}
  </CategoriaPicker>
);

export const Chave = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const NovaCategoria = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Icon size={20} name="add-to-list" />
  </TouchableOpacity>
);

export const CategoriaPicker = styled(Picker)`
  flex: 1;
`;

export const ContainerDatePicker = styled.View`
  display: flex;
  margin-top: 7px;
  flex-direction: row;
  align-items: center;
`;

export const SelecionarDataButton = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={{marginLeft: 10}}>
    <Icon name="calendar" size={20} />
  </TouchableOpacity>
);

export const DatePicker = styled(DateTimePickerModal)``;
