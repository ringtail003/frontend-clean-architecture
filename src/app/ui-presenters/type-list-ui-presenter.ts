import { Injectable } from '@angular/core';
import { TypeList } from 'src/app/entities/type-list';
import { TypeListViewModel } from 'src/app/view-models/type-list-view-model';

@Injectable({ providedIn: 'root' })
export class TypeListUiPresenter {
  default(): TypeListViewModel {
    return {
      items: [],
    };
  }

  parse(typeList: TypeList): TypeListViewModel {
    return {
      items: typeList.items.map(({ id, label }) => {
        return {
          id,
          label,
        };
      }),
    };
  }
}
