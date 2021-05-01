import { Item } from 'src/app/entities/item';

export interface ItemList {
  items: Item[];
  select: (id: number) => void;
  deselect: (id: number) => void;
  toggle: (id: number) => void;
}
