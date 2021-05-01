import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';

export class ItemListA implements ItemList {
  public readonly items: Item[] = [];
  #selectedIds: number[] = [];

  constructor(params: { items: Item[] }) {
    this.items = params.items;
  }

  select(id: number): void {
    if (this.#selectedIds.length >= 3) {
      return;
    }

    this.#selectedIds.push(id);
  }

  deselect(id: number): void {
    this.#selectedIds = this.#selectedIds.filter((v) => v !== id);
  }

  toggle(id: number): void {
    this.#selectedIds.includes(id) ? this.deselect(id) : this.select(id);
  }
}
