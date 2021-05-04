import { ItemViewModel } from 'src/app/view-models/item-view-model';

export interface ItemListViewModel {
  isEmpty: boolean;
  isLoading: boolean;
  description: string | null;
  canSelect: boolean;
  items: ItemViewModel[] | null;
}
