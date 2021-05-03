import { Injectable } from '@angular/core';
import { ItemList } from 'src/app/entities/item-list/item-list';
import { ItemListViewModel } from 'src/app/view-models/item-list-view-model';

@Injectable({ providedIn: 'root' })
export class ItemListUiPresenter {
  parse(itemList: ItemList): ItemListViewModel {
    return {
      items: itemList.items.map(({ id, label }) => {
        return {
          id,
          label,
        };
      }),
    };
  }
}
