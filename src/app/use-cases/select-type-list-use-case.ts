import { Injectable } from '@angular/core';
import { ItemListFactory } from 'src/app/entities/item-list/item-list-factory';
import { Setting } from 'src/app/entities/setting';
import { TypeId } from 'src/app/entities/type';
import { ItemRepository } from 'src/app/repositories/item-repository';

@Injectable({ providedIn: 'root' })
export class SelectTypeListUseCase {
  constructor(
    private repository: ItemRepository,
    private itemListFactory: ItemListFactory
  ) {}

  exec(
    setting: Setting,
    typeId: TypeId,
    handler: (setting: Setting) => void
  ): void {
    setting
      .groupSetting!.typeList?.items!.find((v) => v.id === typeId)
      ?.select();

    setting.groupSetting!.setItemList(this.itemListFactory.create());
    setting.groupSetting!.typeList?.attach();
    handler(setting);

    this.repository.getListByType(typeId).subscribe((itemList) => {
      setting.groupSetting?.setItemList(itemList);
      setting.groupSetting!.typeList?.detach();
      handler(setting);
    });
  }
}
