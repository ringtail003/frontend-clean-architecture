import { CategoryList } from 'src/app/entities/category-list';
import { GroupList } from 'src/app/entities/group-list';
import { GroupSetting } from 'src/app/entities/group-setting';
import { TemplateList } from 'src/app/entities/template-list';

export class Setting {
  #groupList: GroupList | null;
  #groupSetting: GroupSetting | null;
  #categoryList: CategoryList | null;
  #templateList: TemplateList | null;

  constructor() {
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
}
