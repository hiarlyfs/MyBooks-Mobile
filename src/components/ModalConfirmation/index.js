import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectTodasCategorias} from '../../redux/categorias/categorias.selectors';
import {
  ModalView,
  Container,
  Informe,
  TituloLivro,
  ContainerButtons,
  ButtonModal,
  PickerCategoria,
  ContainerPicker,
  Chave,
  NovaCategoria,
  DatePicker,
  ContainerDatePicker,
  SelecionarDataButton,
} from './styles';
import Action from '../../utils/Action.types';

const ModalConfirmation = ({
  visible,
  closeModal,
  book,
  actionType,
  categorias,
}) => {
  const [dataFinalizacao, setDataFinalizacao] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  const onChangeDate = (event) => {
    closeDatePicker();
    setDataFinalizacao(event);
  };

  const titulo = book.titulo || book.volumeInfo.title;
  const subtitulo = book.volumeInfo ? book.volumeInfo.subtitle : book.subTitulo;
  let mensagem;

  switch (actionType) {
    case Action.EXCLUIR:
      mensagem = `Deseja excluir o livro: `;
      break;
    case Action.MOVER_LISTA_DESEJO:
      mensagem = 'Deseja mover para a lista de desejos o livro: ';
      break;
    case Action.LENDO:
      mensagem = 'Você está lendo o livro: ';
      break;
    default:
      mensagem = '';
  }

  return (
    <ModalView
      // eslint-disable-next-line react/jsx-boolean-value
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={closeModal}>
      <Container>
        <Informe>
          {'        '}
          {mensagem}
          <TituloLivro>
            {titulo} {subtitulo ? `:${subtitulo}` : null}
          </TituloLivro>
          ?
        </Informe>
        {actionType !== Action.EXCLUIR ? (
          <ContainerPicker>
            <Chave>Categoria do Livro:</Chave>
            <PickerCategoria categorias={categorias} />
            <NovaCategoria />
          </ContainerPicker>
        ) : null}
        {actionType === Action.FINALIZADO ? (
          <ContainerDatePicker>
            <Chave>
              Data finalização:{' '}
              <Informe style={{fontWeight: 'normal', fontSize: 16}}>
                {dataFinalizacao.toISOString().split('T')[0]}
              </Informe>
            </Chave>
            <SelecionarDataButton onPress={openDatePicker} />
            <DatePicker
              isVisible={showDatePicker}
              onConfirm={onChangeDate}
              onCancel={closeDatePicker}
              mode="date"
            />
          </ContainerDatePicker>
        ) : null}
        <ContainerButtons>
          <ButtonModal color="#900" onPress={closeModal} title="cancelar">
            Cancelar
          </ButtonModal>
          <ButtonModal color="#090" title="ok">
            OK
          </ButtonModal>
        </ContainerButtons>
      </Container>
    </ModalView>
  );
};

const mapStateToProps = createStructuredSelector({
  categorias: selectTodasCategorias,
});

export default connect(mapStateToProps)(ModalConfirmation);
