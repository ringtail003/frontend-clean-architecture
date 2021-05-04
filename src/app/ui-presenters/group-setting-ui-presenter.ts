import { Injectable } from '@angular/core';
import { GroupSetting } from 'src/app/entities/group-setting';
import { ItemListUiPresenter } from 'src/app/ui-presenters/item-list-ui-presenter';
import { TypeListUiPresenter } from 'src/app/ui-presenters/type-list-ui-presenter';
import { GroupSettingViewModel } from 'src/app/view-models/group-setting-view-model';

@Injectable({ providedIn: 'root' })
export class GroupSettingUiPresenter {
  constructor(
    private typeList: TypeListUiPresenter,
    private itemList: ItemListUiPresenter
  ) {}

  parse(groupSetting: GroupSetting | null): GroupSettingViewModel {
    return {
      typeList: this.typeList.parse(groupSetting?.typeList || null),
      itemList: this.itemList.parse(groupSetting?.itemList || null),
    };
  }
}
