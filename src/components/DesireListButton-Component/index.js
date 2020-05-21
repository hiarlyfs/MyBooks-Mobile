import React, {useState} from 'react';

import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {addLivroListaDesejoStart} from '../../redux/listaDesejo/listaDesejo.actions';
import ModalConfirmation from '../ModalConfirmation';

import Action from '../../utils/Action.types';

const DesireButton = ({book, addLivroListaDesejo}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleActionSucess = (event, categoria) => {
    addLivroListaDesejo({
      volumeId: book.volumeId || book.id,
      categoria,
    });
    navigation.navigate('Lista de Desejos');
  };

  return (
    <>
      <TouchableOpacity onPress={openModal}>
        <Icon name="heart" size={28} />
      </TouchableOpacity>
      <ModalConfirmation
        confirmAction={handleActionSucess}
        actionType={Action.MOVER_LISTA_DESEJO}
        visible={modalVisible}
        closeModal={closeModal}
        book={book}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addLivroListaDesejo: (informacoesLivro) =>
    dispatch(addLivroListaDesejoStart(informacoesLivro)),
});

export default connect(null, mapDispatchToProps)(DesireButton);
