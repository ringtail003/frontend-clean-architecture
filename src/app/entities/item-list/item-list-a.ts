import { Entity } from 'src/app/entities/entity';
import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class ItemListA extends Entity<ItemListA> implements ItemList {
  #maximumItems = 3;
  public readonly description = `You can select items up to ${
    this.#maximumItems
  }.`;
  public readonly canSelect = true;
  #items: Item[] = [];
  #validationWhere = 'Item';

  get items(): Item[] {
    return this.#items;
  }
  setItems(items: Item[]): void {
    this.#items = items;
    items.forEach((v) => (v.handler = (item) => this.onChangeHandler(item)));
  }

  getErrors(): ValidationErrorList {
    const list = new ValidationErrorList(this.#validationWhere);

    const selection = this.#items.filter((v) => v.isSelected);

    if (selection.length > this.#maximumItems) {
      list.add(
        `overSelection`,
        `Exceeds the maximum number that can be selected.`
      );
    }

    if (!selection.length) {
      list.add(`emptySelection`, `Must be selected one or higher.`);
    }

    this.#items.forEach((v) => list.concat(v.getErrors()));

    return list;
  }

  private onChangeHandler(item: Item): void {
    const selection = this.#items.filter((v) => v.isSelected);

    if (selection.length > this.#maximumItems) {
      item.deselect();
    }
  }
}
