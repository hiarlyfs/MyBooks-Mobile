import React, {useState} from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from './styles';
import api from '../../services/api';

import {removerLivroConcluido} from '../../redux/concluido/concluido.action';
import {exluirLendoLivro} from '../../redux/lendo/lendo.action';
import {removerLivroListaDesejo} from '../../redux/listaDesejo/listaDesejo.actions';

import Action from '../../utils/Action.types';

import ModalConfirmation from '../ModalConfirmation';

const DeleteButton = ({
  book,
  // eslint-disable-next-line no-shadow
  removerLivroConcluido,
  // eslint-disable-next-line no-shadow
  removerLivroListaDesejo,
  // eslint-disable-next-line no-shadow
  exluirLendoLivro,
}) => {
  Icon.loadFont();
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleActionSucess = () => {
    // eslint-disable-next-line no-underscore-dangle
    api.delete(`/books/${book._id}`).then((response) => {
      if (response.status === 200) {
        removerLivroConcluido(book);
        removerLivroListaDesejo(book);
        exluirLendoLivro(book);
      }
    });
  };

  return (
    <>
      <Button onPress={openModal}>
        <Icon name="delete" size={18} />
      </Button>
      <ModalConfirmation
        confirmAction={handleActionSucess}
        actionType={Action.EXCLUIR}
        visible={modalVisible}
        closeModal={closeModal}
        book={book}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removerLivroConcluido: (remover) => dispatch(removerLivroConcluido(remover)),
  exluirLendoLivro: (remover) => dispatch(exluirLendoLivro(remover)),
  removerLivroListaDesejo: (remover) =>
    dispatch(removerLivroListaDesejo(remover)),
});

export default connect(null, mapDispatchToProps)(DeleteButton);
