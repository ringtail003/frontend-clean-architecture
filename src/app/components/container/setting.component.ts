import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/entities/setting';
import { TypeId } from 'src/app/entities/type';
import { SettingUiPresenter } from 'src/app/ui-presenters/setting-ui-presenter';
import { CreateSettingUseCase } from 'src/app/use-cases/create-setting-use-case';
import { SelectGroupListUseCase } from 'src/app/use-cases/select-group-list-use-case';
import { SelectItemListUseCase } from 'src/app/use-cases/select-item-list-use-case';
import { SelectTypeListUseCase } from 'src/app/use-cases/select-type-list-use-case';
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
    private selectGroupList: SelectGroupListUseCase,
    private selectTypeList: SelectTypeListUseCase,
    private selectItemList: SelectItemListUseCase
  ) {}

  ngOnInit(): void {
    this.createSetting.exec((v) => this.useCaseHandler(v));
  }

  handleGroupSelected(groupId: number) {
    this.selectGroupList.exec(this.entity, groupId, (v) =>
      this.useCaseHandler(v)
    );
  }

  handleTypeSelected(typeId: TypeId) {
    this.selectTypeList.exec(this.entity, typeId, (v) =>
      this.useCaseHandler(v)
    );
  }

  handleItemSelected(itemId: number) {
    this.selectItemList.exec(this.entity, itemId, (v) =>
      this.useCaseHandler(v)
    );
  }

  private useCaseHandler(setting: Setting): void {
    this.entity = setting;
    this.vm = this.presenter.parse(setting);
  }
}
