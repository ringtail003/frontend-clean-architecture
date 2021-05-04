import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class ItemListB implements ItemList {
  public readonly description = 'This list has no items.';
  public readonly canSelect = false;

  get items(): Item[] {
    return [];
  }
  setItems(items: Item[]): void {}

  getErrors(): ValidationErrorList {
    return new ValidationErrorList();
  }
}
