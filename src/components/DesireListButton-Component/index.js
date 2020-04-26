import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {connect} from 'react-redux';
import api from '../../services/api';
import {addLivroListaDesejo} from '../../redux/listaDesejo/listaDesejo.actions';
import {exluirLendoLivro} from '../../redux/lendo/lendo.action';
import {removerLivroConcluido} from '../../redux/concluido/concluido.action';

const DesireButton = ({
  book,
  // eslint-disable-next-line no-shadow
  addLivroListaDesejo,
  removerLendoLivro,
  // eslint-disable-next-line no-shadow
  removerLivroConcluido,
}) => {
  const navigation = useNavigation();
  const handleClick = () => {
    api
      .post('/books', {
        volumeId: book.volumeId || book.id,
        status: 'LISTA DE DESEJOS',
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
    <TouchableOpacity onPress={handleClick}>
      <Icon name="heart" size={24} />
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addLivroListaDesejo: (novoLivro) => dispatch(addLivroListaDesejo(novoLivro)),
  removerLivroConcluido: (remover) => dispatch(removerLivroConcluido(remover)),
  removerLendoLivro: (remover) => dispatch(exluirLendoLivro(remover)),
});

export default connect(null, mapDispatchToProps)(DesireButton);
