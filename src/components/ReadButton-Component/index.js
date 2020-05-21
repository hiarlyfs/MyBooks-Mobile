import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {addLivroConcluidoStart} from '../../redux/concluido/concluido.action';
import ModalConfirmation from '../ModalConfirmation';

import Action from '../../utils/Action.types';

const ReadButton = ({book, addLivroConcluido}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleActionSucess = (event, categoria, finalizadoEm) => {
    addLivroConcluido({
      volumeId: book.volumeId || book.id,
      categoria,
      finalizadoEm,
    });
    navigation.navigate('Concluído');
  };

  return (
    <>
      <TouchableOpacity onPress={openModal}>
        <Icon name="check" size={28} />
      </TouchableOpacity>
      <ModalConfirmation
        confirmAction={handleActionSucess}
        actionType={Action.FINALIZADO}
        visible={modalVisible}
        closeModal={closeModal}
        book={book}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addLivroConcluido: (informacoesLivro) =>
    dispatch(addLivroConcluidoStart(informacoesLivro)),
});

export default connect(null, mapDispatchToProps)(ReadButton);
