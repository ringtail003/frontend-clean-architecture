import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';

export class ItemListC implements ItemList {
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
}
