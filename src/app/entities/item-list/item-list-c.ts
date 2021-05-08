import { Entity } from 'src/app/entities/entity';
import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class ItemListC extends Entity<ItemListC> implements ItemList {
  #items: Item[] = [];
  #validationWhere = 'Item';
  public readonly description = 'You can not be change item selection.';
  public readonly canSelect = false;

  get items(): Item[] {
    return this.#items;
  }
  setItems(items: Item[]): void {
    this.#items = items;
    this.#items.forEach((v) => v.select());
  }

  getErrors(): ValidationErrorList {
    const list = new ValidationErrorList(this.#validationWhere);

    this.#items.forEach((v) => list.concat(v.getErrors()));

    return list;
  }
}
