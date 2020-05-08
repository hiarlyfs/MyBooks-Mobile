import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {addCategoria} from '../../redux/categorias/categorias.actions';
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
  ViewModal,
} from './styles';
import Action from '../../utils/Action.types';

import NewCategory from '../ModalNewCategory';
import api from '../../services/api';

const ModalConfirmation = ({
  visible,
  closeModal,
  book,
  actionType,
  categorias,
  confirmAction,
  criarNovaCategoria,
}) => {
  const [categoria, setCategoria] = useState(book.categoria || '');
  const [dataFinalizacao, setDataFinalizacao] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [inputNewCategory, setInputNewCategory] = useState('');

  const onChangeCategoria = (itemValue) => {
    setCategoria(itemValue);
  };

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

  const openNewCategory = () => {
    setShowNewCategory(true);
  };

  const closeNewCategory = () => {
    setShowNewCategory(false);
  };

  const onChangeInputNewCategory = (event) => {
    setInputNewCategory(event.nativeEvent.text);
  };

  const createNewCategory = () => {
    api
      .post('/category', {
        nome: inputNewCategory,
      })
      .then((res) => {
        criarNovaCategoria(res.data);
        setCategoria(res.data.nome);
        setInputNewCategory('');
        closeNewCategory();
      });
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
      <ViewModal>
        <Container>
          <Informe>
            {'        '}
            {mensagem}
            <TituloLivro>
              {titulo} {subtitulo ? `: ${subtitulo}` : null}
            </TituloLivro>
            ?
          </Informe>
          {actionType !== Action.EXCLUIR ? (
            <ContainerPicker>
              <Chave>Categoria do Livro:</Chave>
              <PickerCategoria
                value={categoria}
                onValueChange={onChangeCategoria}
                categorias={categorias}
              />
              <NovaCategoria onPress={openNewCategory} />
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
            <ButtonModal
              onPress={(event) => {
                confirmAction(event, categoria, dataFinalizacao);
                closeModal();
              }}
              color="#090"
              title="ok">
              OK
            </ButtonModal>
          </ContainerButtons>
        </Container>
        <NewCategory
          closeNewCategory={closeNewCategory}
          visible={showNewCategory}
          newCategory={inputNewCategory}
          onChangeCategory={onChangeInputNewCategory}
          createNewCategory={createNewCategory}
        />
      </ViewModal>
    </ModalView>
  );
};

const mapStateToProps = createStructuredSelector({
  categorias: selectTodasCategorias,
});

const mapDispatchToProps = (dispatch) => ({
  criarNovaCategoria: (novaCategoria) => dispatch(addCategoria(novaCategoria)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirmation);
