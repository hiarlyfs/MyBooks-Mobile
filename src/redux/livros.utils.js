export const exluirLivro = (livros, remover) =>
  livros.filter((livro) => livro.volumeId !== remover.volumeId);

export const addLivro = (livros, novoLivro) => {
  const indexLivro = livros.findIndex(
    (livro) => livro.volumeId === novoLivro.volumeId
  );

  if (indexLivro === -1) {
    return [...livros, novoLivro];
  }

  return livros;
};
