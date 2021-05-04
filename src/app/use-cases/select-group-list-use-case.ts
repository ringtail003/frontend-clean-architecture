import { Injectable } from '@angular/core';
import { GroupSetting } from 'src/app/entities/group-setting';
import { ItemListFactory } from 'src/app/entities/item-list/item-list-factory';
import { Setting } from 'src/app/entities/setting';
import { TypeList } from 'src/app/entities/type-list';
import { TypeRepository } from 'src/app/repositories/type-repository';

@Injectable({
  providedIn: 'root',
})
export class SelectGroupListUseCase {
  constructor(
    private typeRepository: TypeRepository,
    private itemListFactory: ItemListFactory
  ) {}

  exec(
    setting: Setting,
    groupId: number,
    handler: (setting: Setting) => void
  ): void {
    if (setting.groupList?.isSealed) {
      return;
    }

    setting.groupList!.items!.find((v) => v.id === groupId)?.select();

    const groupSetting = new GroupSetting();
    setting.setGroupSetting(groupSetting);
    setting.groupList!.attach();
    groupSetting.setTypeList(new TypeList());

    handler(setting);

    this.typeRepository.getListByGroup(groupId).subscribe((typeList) => {
      groupSetting.setTypeList(typeList);
      setting.groupList?.detach();
      handler(setting);
    });
  }
}
