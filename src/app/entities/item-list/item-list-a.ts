import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';

export class ItemListA implements ItemList {
  static maximumItems = 3;
  public readonly description = `You can select items up to ${ItemListA.maximumItems}.`;
  public readonly canSelect = true;
  #items: Item[] = [];

  constructor() {}

  get items(): Item[] {
    return this.#items;
  }
  setItems(items: Item[]): void {
    this.#items = items;
    items.forEach((v) => (v.handler = (item) => this.onChangeHandler(item)));
  }

  private onChangeHandler(item: Item): void {
    const selection = this.#items.filter((v) => v.isSelected);

    if (selection.length > ItemListA.maximumItems) {
      item.deselect();
    }
  }
}
