import React, {useState} from 'react';

import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {
  addLivroListaDesejo,
  alterarCategoria,
} from '../../redux/listaDesejo/listaDesejo.actions';
import ModalConfirmation from '../ModalConfirmation';

import api from '../../services/api';
import Action from '../../utils/Action.types';

const DesireButton = ({
  book,
  // eslint-disable-next-line no-shadow
  addLivroListaDesejo,
  alterarCategoriaLivro,
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
          if (!response.data.novo) {
            alterarCategoriaLivro(response.data.livro);
          } else {
            addLivroListaDesejo(response.data.livro);
          }
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
  alterarCategoriaLivro: (livro) => dispatch(alterarCategoria(livro)),
  addLivroListaDesejo: (novoLivro) => dispatch(addLivroListaDesejo(novoLivro)),
});

export default connect(null, mapDispatchToProps)(DesireButton);
