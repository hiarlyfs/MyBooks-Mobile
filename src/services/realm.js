import Realm from 'realm';

import BookSchema from '../schemas/BookSchema';
import CategoriaSchema from '../schemas/CategoriaSchema';

export default function getRealm() {
  return Realm.open({
    schema: [BookSchema, CategoriaSchema],
  }).catch((error) => console.log(error));
}
