import { Injectable } from '@angular/core';
import { Setting } from 'src/app/entities/setting';
import { GroupListUiPresenter } from 'src/app/ui-presenters/group-list-ui-presenter';
import { GroupSettingUiPresenter } from 'src/app/ui-presenters/group-setting-ui-presenter';
import { SettingViewModel } from 'src/app/view-models/setting-view-model';

@Injectable({
  providedIn: 'root',
})
export class SettingUiPresenter {
  constructor(
    private groupList: GroupListUiPresenter,
    private groupSetting: GroupSettingUiPresenter
  ) {}

  parse(setting: Setting): SettingViewModel {
    return {
      groupList: this.groupList.parse(setting.groupList),
      groupSetting: this.groupSetting.parse(setting.groupSetting),
    };
  }
}
