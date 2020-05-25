export const filtrarPorCategoria = (categoria, livros) =>
  livros.filter((livro) => livro.categoria === categoria);

export const livrosSemCategoria = (livros) =>
  livros.filter((livro) => !livro.categoria);
