const BookSchema = {
  name: 'Book',
  primarykey: '_id',
  properties: {
    _id: 'string',
    volumeId: 'string',
    titulo: 'string?',
    subTitulo: 'string?',
    edicao: 'int?',
    autores: 'string?[]',
    sinopse: 'string?',
    paginas: 'int?',
    status: 'string?',
    finalizadoEm: 'string?',
    anoLido: 'string?',
    criadoEm: 'string?',
    imageUrl: 'string?',
    categoria: 'string?',
    infoLink: 'string?',
  },
};

export default BookSchema;
