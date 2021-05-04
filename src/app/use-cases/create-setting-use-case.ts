import { Injectable } from '@angular/core';
import { CategoryList } from 'src/app/entities/category-list';
import { GroupList } from 'src/app/entities/group-list';
import { Setting } from 'src/app/entities/setting';
import { CategoryRepository } from 'src/app/repositories/category-repository';
import { GroupRepository } from 'src/app/repositories/group-repository';

@Injectable({ providedIn: 'root' })
export class CreateSettingUseCase {
  constructor(
    private groupRepository: GroupRepository,
    private categoryRepository: CategoryRepository
  ) {}

  exec(handler: (setting: Setting) => void): void {
    const setting = new Setting();
    setting.setGroupList(new GroupList());
    setting.setCategoryList(new CategoryList());
    handler(setting);

    this.groupRepository.getList().subscribe((groupList) => {
      setting.setGroupList(groupList);
      handler(setting);
    });

    this.categoryRepository.getList().subscribe((categoryList) => {
      setting.setCategoryList(categoryList);
      handler(setting);
    });
  }
}
