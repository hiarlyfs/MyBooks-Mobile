import React, {useState} from 'react';

import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {addLivroListaDesejo} from '../../redux/listaDesejo/listaDesejo.actions';
import {exluirLendoLivro} from '../../redux/lendo/lendo.action';
import {removerLivroConcluido} from '../../redux/concluido/concluido.action';

import ModalConfirmation from '../ModalConfirmation';

import api from '../../services/api';
import Action from '../../utils/Action.types';

const DesireButton = ({
  book,
  // eslint-disable-next-line no-shadow
  addLivroListaDesejo,
  removerLendoLivro,
  // eslint-disable-next-line no-shadow
  removerLivroConcluido,
}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleActionSucess = (event, categoria) => {
    api
      .post('/books', {
        volumeId: book.volumeId || book.id,
        status: 'LISTA DE DESEJOS',
        categoria,
      })
      .then((response) => {
        if (response.status === 200) {
          addLivroListaDesejo(response.data);
          removerLendoLivro(response.data);
          removerLivroConcluido(response.data);
          navigation.navigate('Lista de Desejos');
        }
      });
  };

  return (
    <>
      <TouchableOpacity onPress={openModal}>
        <Icon name="heart" size={28} />
      </TouchableOpacity>
      <ModalConfirmation
        actionType={Action.MOVER_LISTA_DESEJO}
        visible={modalVisible}
        closeModal={closeModal}
        book={book}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addLivroListaDesejo: (novoLivro) => dispatch(addLivroListaDesejo(novoLivro)),
  removerLivroConcluido: (remover) => dispatch(removerLivroConcluido(remover)),
  removerLendoLivro: (remover) => dispatch(exluirLendoLivro(remover)),
});

export default connect(null, mapDispatchToProps)(DesireButton);
