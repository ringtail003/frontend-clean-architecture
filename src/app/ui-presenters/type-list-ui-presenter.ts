import { Injectable } from '@angular/core';
import { TypeList } from 'src/app/entities/type-list';
import { TypeListViewModel } from 'src/app/view-models/type-list-view-model';

@Injectable({ providedIn: 'root' })
export class TypeListUiPresenter {
  parse(typeList: TypeList | null): TypeListViewModel {
    if (typeList === null) {
      return {
        isEmpty: true,
        isLoading: false,
        items: null,
      };
    }

    if (!typeList.items) {
      return {
        isEmpty: false,
        isLoading: true,
        items: null,
      };
    }

    return {
      isEmpty: false,
      isLoading: false,
      items: typeList.items.map(({ id, label, isSelected }) => {
        return { id, label, isSelected };
      }),
    };
  }
}
