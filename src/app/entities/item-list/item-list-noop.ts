import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';

export class ItemListNoop implements ItemList {
  public readonly items: Item[] = [];

  select(id: number): void {}

  deselect(id: number): void {}

  toggle(id: number): void {}
}
