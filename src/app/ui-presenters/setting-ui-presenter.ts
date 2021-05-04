import { Injectable } from '@angular/core';
import { Setting } from 'src/app/entities/setting';
import { CategoryListUiPresenter } from 'src/app/ui-presenters/category-list-ui-presenter';
import { GroupListUiPresenter } from 'src/app/ui-presenters/group-list-ui-presenter';
import { GroupSettingUiPresenter } from 'src/app/ui-presenters/group-setting-ui-presenter';
import { TemplateListUiPresenter } from 'src/app/ui-presenters/template-list-ui-presenter';
import { SettingViewModel } from 'src/app/view-models/setting-view-model';

@Injectable({
  providedIn: 'root',
})
export class SettingUiPresenter {
  constructor(
    private groupList: GroupListUiPresenter,
    private groupSetting: GroupSettingUiPresenter,
    private categoryList: CategoryListUiPresenter,
    private templateList: TemplateListUiPresenter
  ) {}

  parse(setting: Setting): SettingViewModel {
    return {
      groupList: this.groupList.parse(setting.groupList),
      groupSetting: this.groupSetting.parse(setting.groupSetting),
      categoryList: this.categoryList.parse(setting.categoryList),
      templateList: this.templateList.parse(setting.templateList),
    };
  }
}
