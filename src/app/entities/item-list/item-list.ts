import { Item } from 'src/app/entities/item';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export interface ItemList {
  items: Item[] | null;
  description: string;
  canSelect: boolean;
  setItems: (items: Item[]) => void;
  getErrors(): ValidationErrorList;
}
