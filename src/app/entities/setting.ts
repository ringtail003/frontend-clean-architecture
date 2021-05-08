import { CategoryList } from 'src/app/entities/category-list';
import { Entity } from 'src/app/entities/entity';
import { GroupList } from 'src/app/entities/group-list';
import { GroupSetting } from 'src/app/entities/group-setting';
import { TemplateList } from 'src/app/entities/template-list';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class Setting extends Entity<Setting> {
  #validationKey = 'Setting' as const;

  #groupList: GroupList | null;
  #groupSetting: GroupSetting | null;
  #categoryList: CategoryList | null;
  #templateList: TemplateList | null;

  constructor() {
    super();
    this.#groupList = null;
    this.#groupSetting = null;
    this.#categoryList = null;
    this.#templateList = null;
  }

  get groupList() {
    return this.#groupList;
  }
  setGroupList(groupList: GroupList) {
    this.#groupList = groupList;
  }

  get groupSetting() {
    return this.#groupSetting;
  }
  setGroupSetting(groupSetting: GroupSetting) {
    this.#groupSetting = groupSetting;
  }

  get categoryList() {
    return this.#categoryList;
  }
  setCategoryList(categoryList: CategoryList) {
    this.#categoryList = categoryList;
  }

  get templateList() {
    return this.#templateList;
  }
  setTemplateList(templateList: TemplateList) {
    this.#templateList = templateList;
  }

  clear() {
    this.#groupList!.items!.forEach((v) => v.deselect());
    this.#groupSetting = new GroupSetting();
    this.#categoryList!.items!.forEach((v) => v.deselect());
    this.#templateList = null;
  }

  getErrors(): ValidationErrorList {
    return new ValidationErrorList()
      .concat(this.#groupList?.getErrors())
      .concat(this.#groupSetting?.getErrors())
      .concat(this.#categoryList?.getErrors())
      .concat(this.#templateList?.getErrors());
  }
}
