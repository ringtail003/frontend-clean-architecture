import { Injectable } from '@angular/core';
import { ItemList } from 'src/app/entities/item-list/item-list';
import { ItemListViewModel } from 'src/app/view-models/item-list-view-model';

@Injectable({ providedIn: 'root' })
export class ItemListUiPresenter {
  parse(itemList: ItemList | null): ItemListViewModel {
    if (itemList === null) {
      return {
        isEmpty: true,
        isLoading: false,
        description: null,
        canSelect: false,
        items: null,
      };
    }

    if (!itemList.items) {
      return {
        isEmpty: false,
        isLoading: true,
        description: null,
        canSelect: false,
        items: null,
      };
    }

    return {
      isEmpty: false,
      isLoading: false,
      canSelect: itemList.canSelect,
      description: itemList.description,
      items: itemList.items.map(({ id, label, isSelected }) => {
        return { id, label, isSelected };
      }),
    };
  }
}
