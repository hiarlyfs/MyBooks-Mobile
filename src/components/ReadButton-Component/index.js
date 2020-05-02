import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import api from '../../services/api';
import {addLivroConcluido} from '../../redux/concluido/concluido.action';
import {removerLivroListaDesejo} from '../../redux/listaDesejo/listaDesejo.actions';
import {exluirLendoLivro} from '../../redux/lendo/lendo.action';

const ReadButton = ({
  book,
  // eslint-disable-next-line no-shadow
  addLivroConcluido,
  // eslint-disable-next-line no-shadow
  removerLivroListaDesejo,
  removerLendoLivro,
}) => {
  const navigation = useNavigation();
  const handleClick = () => {
    api
      .post('/books', {
        volumeId: book.volumeId || book.id,
        status: 'FINALIZADO',
        finalizadoEm: new Date().toISOString(),
      })
      .then((response) => {
        if (response.status === 200) {
          addLivroConcluido(response.data);
          removerLivroListaDesejo(response.data);
          removerLendoLivro(response.data);
          navigation.navigate('Concluído');
        }
      });
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <Icon name="check" size={28} />
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addLivroConcluido: (novoLivro) => dispatch(addLivroConcluido(novoLivro)),
  removerLivroListaDesejo: (remover) =>
    dispatch(removerLivroListaDesejo(remover)),
  removerLendoLivro: (remover) => dispatch(exluirLendoLivro(remover)),
});

export default connect(null, mapDispatchToProps)(ReadButton);
