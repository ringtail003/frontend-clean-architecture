import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';

export class ItemListNoop implements ItemList {
  public readonly description = '';
  public readonly canSelect = false;

  get items(): null {
    return null;
  }
  setItems(items: Item[]) {}
}
