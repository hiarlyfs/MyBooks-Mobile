import getRealm from '../services/realm';

export const addLivrosInciais = (livros) => {
  return livros.reduce((unico, item) => {
    const jaExiste = unico.findIndex(
      (livro) => livro.volumeId === item.volumeId
    );

    return jaExiste >= 0 ? unico : [...unico, item];
  }, []);
};

export const exluirLivro = (livros, remover) =>
  livros.filter((livro) => livro.volumeId !== remover.volumeId);

export const addLivro = (livros, novoLivro) => {
  const indexLivro = livros.findIndex(
    (livro) => livro.volumeId === novoLivro.volumeId
  );

  if (indexLivro === -1) {
    return [...livros, novoLivro];
  }

  const novosLivro = exluirLivro(livros, novoLivro);
  novosLivro.push(novoLivro);
  return novosLivro;
};

export function* gravarLivrosIncialRealm(livros, status) {
  try {
    const realm = yield getRealm();
    if (!realm.objects('Book').filtered('status == $0', status)[0]) {
      livros.forEach((livro) => {
        realm.write(() => {
          realm.create('Book', livro);
        });
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export function* pegarLivrosRealm(status) {
  try {
    const realm = yield getRealm();
    const data = realm.objects('Book').filtered('status == $0', status);
    return [...data];
  } catch (error) {
    console.log(error);
  }
}

export function* addLivroRealm(livro) {
  try {
    const realm = yield getRealm();
    const livroAntigo = realm
      .objects('Book')
      .filtered('volumeId == $0', livro.volumeId);

    realm.write(() => {
      realm.delete(livroAntigo);
      realm.create('Book', livro);
    });
  } catch (err) {
    console.error(err);
  }
}

export async function excluirLivroRealm(livro) {
  try {
    const realm = await getRealm();
    const livroAntigo = realm
      .objects('Book')
      .filtered('volumeId == $0', livro.volumeId);

    realm.write(() => {
      realm.delete(livroAntigo);
    });
  } catch (err) {
    console.error(err);
  }
}
