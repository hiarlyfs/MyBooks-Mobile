export const addLivro = (livros, novoLivro) => {
  const temLivro = livros.find((livro) => livro.isbn === novoLivro.isbn);

  if (!temLivro) {
    return [...livros, novoLivro];
  }

  return livros;
};

export const exluirLivro = (livros, remover) =>
  livros.filter((livro) => livro.isbn !== remover.isbn);
