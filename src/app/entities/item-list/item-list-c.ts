import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list';

export class ItemListC implements ItemList {
  public readonly items: Item[] = [];
  #selectedIds: number[] = [];

  constructor(params: { items: Item[] }) {
    this.items = params.items;
    this.#selectedIds = this.items.map((v) => v.id);
  }

  select(id: number): void {}

  deselect(id: number): void {}

  toggle(id: number): void {}
}
