import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/entities/setting';
import { SettingUiPresenter } from 'src/app/ui-presenters/setting-ui-presenter';
import { CreateSettingUseCase } from 'src/app/use-cases/create-setting-use-case';
import { SelectGroupListUseCase } from 'src/app/use-cases/select-group-list-use-case';
import { GroupViewModel } from 'src/app/view-models/group-view-model';
import { SettingViewModel } from 'src/app/view-models/setting-view-model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  vm!: SettingViewModel;
  entity!: Setting;

  constructor(
    private presenter: SettingUiPresenter,
    private createSetting: CreateSettingUseCase,
    private selectGroupList: SelectGroupListUseCase
  ) {}

  ngOnInit(): void {
    const handler = (setting: Setting) => {
      this.entity = setting;
      this.vm = this.presenter.parse(setting);
    };

    this.createSetting.exec(handler);
  }

  handleGroupSelected(group: GroupViewModel) {
    const handler = (setting: Setting) => {
      this.entity = setting;
      this.vm = this.presenter.parse(setting);
    };

    this.selectGroupList.exec(this.entity, group.id, (v) => handler(v));
  }
}
