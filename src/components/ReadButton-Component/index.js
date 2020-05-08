import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import api from '../../services/api';
import {
  addLivroConcluido,
  alterarCategoriaLivroConcluido,
} from '../../redux/concluido/concluido.action';
import {removerLivroListaDesejo} from '../../redux/listaDesejo/listaDesejo.actions';
import {exluirLendoLivro} from '../../redux/lendo/lendo.action';
import ModalConfirmation from '../ModalConfirmation';

import Action from '../../utils/Action.types';

const ReadButton = ({
  book,
  // eslint-disable-next-line no-shadow
  addLivroConcluido,
  // eslint-disable-next-line no-shadow
  removerLivroListaDesejo,
  removerLendoLivro,
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

  const handleActionSucess = (event, categoria, finalizadoEm) => {
    api
      .post('/books', {
        volumeId: book.volumeId || book.id,
        categoria,
        status: 'FINALIZADO',
        finalizadoEm,
      })
      .then((response) => {
        if (response.status === 200) {
          if (!response.data.novo) {
            alterarCategoriaLivro(response.data.livro);
          } else {
            addLivroConcluido(response.data.livro);
            removerLivroListaDesejo(response.data.livro);
            removerLendoLivro(response.data.livro);
          }
          navigation.navigate('Concluído');
        }
      });
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
  alterarCategoriaLivro: (livro) =>
    dispatch(alterarCategoriaLivroConcluido(livro)),
  addLivroConcluido: (novoLivro) => dispatch(addLivroConcluido(novoLivro)),
  removerLivroListaDesejo: (remover) =>
    dispatch(removerLivroListaDesejo(remover)),
  removerLendoLivro: (remover) => dispatch(exluirLendoLivro(remover)),
});

export default connect(null, mapDispatchToProps)(ReadButton);
