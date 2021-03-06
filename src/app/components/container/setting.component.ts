import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/entities/setting';
import { TypeId } from 'src/app/entities/type';
import { SettingUiPresenter } from 'src/app/ui-presenters/setting-ui-presenter';
import { CreateSettingUseCase } from 'src/app/use-cases/create-setting-use-case';
import { SaveSettingUseCase } from 'src/app/use-cases/save-setting-use-case';
import { SelectCategoryListUseCase } from 'src/app/use-cases/select-category-list-use-case';
import { SelectGroupListUseCase } from 'src/app/use-cases/select-group-list-use-case';
import { SelectItemListUseCase } from 'src/app/use-cases/select-item-list-use-case';
import { SelectTemplateListUseCase } from 'src/app/use-cases/select-template-list-use-case';
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
    private selectItemList: SelectItemListUseCase,
    private selectCategoryList: SelectCategoryListUseCase,
    private selectTemplateList: SelectTemplateListUseCase,
    private saveSettingUseCase: SaveSettingUseCase
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

  handleCategoryListSelected(categoryId: number) {
    this.selectCategoryList.exec(this.entity, categoryId, (v) =>
      this.useCaseHandler(v)
    );
  }

  handleTemplateListSelected(templateId: number) {
    this.selectTemplateList.exec(this.entity, templateId, (v) =>
      this.useCaseHandler(v)
    );
  }

  handleSaveButtonClicked() {
    this.saveSettingUseCase.exec(this.entity, (v) => this.useCaseHandler(v));
  }

  private useCaseHandler(setting: Setting): void {
    this.entity = setting;
    this.vm = this.presenter.parse(setting);
  }
}
