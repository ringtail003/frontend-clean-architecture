import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';

export class ItemListB implements ItemList {
  public readonly items: Item[] = [];
  #selectedIds: number[] = [];

  constructor(params: { items: Item[] }) {}

  select(id: number): void {}

  deselect(id: number): void {}

  toggle(id: number): void {}
}
