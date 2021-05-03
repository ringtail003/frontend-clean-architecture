import { ItemViewModel } from 'src/app/view-models/item-view-model';

export interface ItemListViewModel {
  isLoading?: boolean;
  items: ItemViewModel[];
}
