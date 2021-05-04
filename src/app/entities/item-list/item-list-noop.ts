import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class ItemListNoop implements ItemList {
  #validationWhere = 'item';
  public readonly description = '';
  public readonly canSelect = false;

  get items(): null {
    return null;
  }
  setItems(items: Item[]) {}

  getErrors(): ValidationErrorList {
    const list = new ValidationErrorList(this.#validationWhere);

    list.add(`emptySelection`, `Now requesting.`);

    return list;
  }
}
