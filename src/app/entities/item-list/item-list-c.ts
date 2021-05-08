import { Entity } from 'src/app/entities/entity';
import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class ItemListC extends Entity<ItemListC> implements ItemList {
  #items: Item[] = [];
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
    return new ValidationErrorList();
  }
}
