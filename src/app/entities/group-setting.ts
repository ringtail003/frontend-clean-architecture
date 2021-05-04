import { ItemList } from 'src/app/entities/item-list/item-list';
import { TypeList } from 'src/app/entities/type-list';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class GroupSetting {
  #typeList: TypeList | null;
  #itemList: ItemList | null;

  constructor() {
    this.#typeList = null;
    this.#itemList = null;
  }

  get typeList() {
    return this.#typeList;
  }

  get itemList() {
    return this.#itemList;
  }

  setTypeList(typeList: TypeList): void {
    this.#typeList = typeList;
  }

  setItemList(itemList: ItemList): void {
    this.#itemList = itemList;
  }

  getErrors(): ValidationErrorList {
    return new ValidationErrorList()
      .concat(this.#typeList?.getErrors())
      .concat(this.#itemList?.getErrors());
  }
}
