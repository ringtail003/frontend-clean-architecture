import { ItemListViewModel } from 'src/app/view-models/item-list-view-model';
import { TypeListViewModel } from 'src/app/view-models/type-list-view-model';

export interface GroupSettingViewModel {
  isEmpty: boolean;
  isLoading: boolean;
  typeList: TypeListViewModel | null;
  itemList: ItemListViewModel | null;
}
