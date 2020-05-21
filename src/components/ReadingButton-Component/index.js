import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {addLendoLivroStart} from '../../redux/lendo/lendo.action';
import ModalConfirmation from '../ModalConfirmation';

import Action from '../../utils/Action.types';

const ReadingButton = ({book, addLendoLivro}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleActionSucess = (event, categoria) => {
    addLendoLivro({
      volumeId: book.volumeId || book.id,
      categoria,
    });

    navigation.navigate('Lendo');
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
  addLendoLivro: (informacoesLivro) =>
    dispatch(addLendoLivroStart(informacoesLivro)),
});

export default connect(null, mapDispatchToProps)(ReadingButton);
