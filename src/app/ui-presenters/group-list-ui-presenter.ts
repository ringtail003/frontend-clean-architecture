import { Injectable } from '@angular/core';
import { GroupList } from 'src/app/entities/group-list';
import { GroupListViewModel } from 'src/app/view-models/group-list-view-model';

@Injectable({ providedIn: 'root' })
export class GroupListUiPresenter {
  parse(groupList: GroupList | null): GroupListViewModel {
    if (groupList === null) {
      return {
        isEmpty: true,
        isLoading: false,
        items: null,
      };
    }

    if (!groupList.items) {
      return {
        isEmpty: false,
        isLoading: true,
        items: null,
      };
    }

    return {
      isEmpty: false,
      isLoading: false,
      items: groupList.items!.map(({ id, label, isSelected }) => {
        return { id, label, isSelected };
      }),
    };
  }
}
