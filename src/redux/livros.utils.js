export const addLivro = (livros, novoLivro) => {
  const temLivro = livros.find(
    (livro) => livro.volumeId === novoLivro.volumeId
  );

  if (!temLivro) {
    return [...livros, novoLivro];
  }

  return livros;
};

export const exluirLivro = (livros, remover) =>
  livros.filter((livro) => livro.volumeId !== remover.volumeId);
