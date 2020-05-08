import React from 'react';
import {
  ModalView,
  Container,
  Title,
  ContainerInput,
  InputTitle,
  InputArea,
  ButtonContainer,
  ButtonModal,
  ViewModal,
} from './styles';

const NewCategory = ({
  visible,
  closeNewCategory,
  newCategory,
  onChangeCategory,
  createNewCategory,
}) => {
  return (
    <ModalView
      onRequestClose={closeNewCategory}
      visible={visible}
      // eslint-disable-next-line react/jsx-boolean-value
      transparent={true}
      animationType="slide">
      <ViewModal>
        <Container>
          <Title>Nova Categoria</Title>
          <ContainerInput>
            <InputTitle>Nome da categoria:</InputTitle>
            <InputArea value={newCategory} onChange={onChangeCategory} />
          </ContainerInput>
          <ButtonContainer>
            <ButtonModal
              color="#000"
              onPress={closeNewCategory}
              title="Cancelar"
            />
            <ButtonModal
              onPress={createNewCategory}
              color="#000"
              title="Criar categoria"
            />
          </ButtonContainer>
        </Container>
      </ViewModal>
    </ModalView>
  );
};

export default NewCategory;
