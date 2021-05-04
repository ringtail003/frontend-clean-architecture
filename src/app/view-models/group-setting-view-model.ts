import { ItemListViewModel } from 'src/app/view-models/item-list-view-model';
import { TypeListViewModel } from 'src/app/view-models/type-list-view-model';

export interface GroupSettingViewModel {
  typeList: TypeListViewModel;
  itemList: ItemListViewModel;
}
