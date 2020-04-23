import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import api from '../../services/api';
import {addLendoLivro} from '../../redux/lendo/lendo.action';
import {removerLivroConcluido} from '../../redux/concluido/concluido.action';
import {removerLivroListaDesejo} from '../../redux/listaDesejo/listaDesejo.actions';

const ReadingButton = ({
  book,
  // eslint-disable-next-line no-shadow
  addLendoLivro,
  // eslint-disable-next-line no-shadow
  removerLivroConcluido,
  // eslint-disable-next-line no-shadow
  removerLivroListaDesejo,
}) => {
  const navigation = useNavigation();
  const handleClick = () => {
    api
      .post('/books', {
        isbn: book.isbn,
        status: 'LENDO',
      })
      .then((response) => {
        if (response.status === 200) {
          addLendoLivro(response.data);
          removerLivroConcluido(response.data);
          removerLivroListaDesejo(response.data);
          navigation.navigate('Lendo');
        }
      });
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <Icon name="play" size={24} />
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addLendoLivro: (novoLivro) => dispatch(addLendoLivro(novoLivro)),
  removerLivroConcluido: (remover) => dispatch(removerLivroConcluido(remover)),
  removerLivroListaDesejo: (remover) =>
    dispatch(removerLivroListaDesejo(remover)),
});

export default connect(null, mapDispatchToProps)(ReadingButton);
