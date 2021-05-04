import { Item } from 'src/app/entities/item';

export interface ItemList {
  items: Item[] | null;
  description: string;
  canSelect: boolean;
  setItems: (items: Item[]) => void;
}
