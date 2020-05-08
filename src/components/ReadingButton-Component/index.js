import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import api from '../../services/api';
import {
  addLendoLivro,
  alterarCategoriaLivroLendo,
} from '../../redux/lendo/lendo.action';
import {removerLivroConcluido} from '../../redux/concluido/concluido.action';
import {removerLivroListaDesejo} from '../../redux/listaDesejo/listaDesejo.actions';
import ModalConfirmation from '../ModalConfirmation';

import Action from '../../utils/Action.types';

const ReadingButton = ({
  book,
  // eslint-disable-next-line no-shadow
  addLendoLivro,
  // eslint-disable-next-line no-shadow
  removerLivroConcluido,
  // eslint-disable-next-line no-shadow
  removerLivroListaDesejo,
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
        status: 'LENDO',
        categoria,
      })
      .then((response) => {
        if (response.status === 200) {
          if (!response.data.novo) {
            alterarCategoriaLivro(response.data.livro);
          } else {
            addLendoLivro(response.data.livro);
            removerLivroConcluido(response.data.livro);
            removerLivroListaDesejo(response.data.livro);
          }
          navigation.navigate('Lendo');
        }
      });
  };

  return (
    <>
      <TouchableOpacity onPress={openModal}>
        <Icon name="play" size={28} />
      </TouchableOpacity>
      <ModalConfirmation
        confirmAction={handleActionSucess}
        actionType={Action.LENDO}
        visible={modalVisible}
        closeModal={closeModal}
        book={book}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  alterarCategoriaLivro: (livro) => dispatch(alterarCategoriaLivroLendo(livro)),
  addLendoLivro: (novoLivro) => dispatch(addLendoLivro(novoLivro)),
  removerLivroConcluido: (remover) => dispatch(removerLivroConcluido(remover)),
  removerLivroListaDesejo: (remover) =>
    dispatch(removerLivroListaDesejo(remover)),
});

export default connect(null, mapDispatchToProps)(ReadingButton);
