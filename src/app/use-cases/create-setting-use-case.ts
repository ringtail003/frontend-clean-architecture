import { Injectable } from '@angular/core';
import { GroupList } from 'src/app/entities/group-list';
import { Setting } from 'src/app/entities/setting';
import { GroupRepository } from 'src/app/repositories/group-repository';

@Injectable({ providedIn: 'root' })
export class CreateSettingUseCase {
  constructor(private repository: GroupRepository) {}

  exec(handler: (setting: Setting) => void): void {
    const setting = new Setting();
    setting.setGroupList(new GroupList());
    handler(setting);

    this.repository.getList().subscribe((groupList) => {
      setting.setGroupList(groupList);
      handler(setting);
    });
  }
}
