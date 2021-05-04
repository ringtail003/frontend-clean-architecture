import { Entity } from 'src/app/entities/entity';
import { Group } from 'src/app/entities/group';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class GroupList extends Entity<GroupList> {
  #validationWhere = 'Group' as const;

  #items: Group[] | null;

  constructor() {
    super();
    this.#items = null;
  }

  get items() {
    return this.#items;
  }

  setItems(items: Group[]): void {
    this.#items = items;
    this.#items.forEach((v) => (v.handler = (v) => this.onChangeHandler(v)));
  }

  private onChangeHandler(group: Group): void {
    this.#items!.forEach((v) => {
      if (v.id !== group.id) {
        v.deselect();
      }
    });
  }

  getErrors(): ValidationErrorList {
    const list = new ValidationErrorList(this.#validationWhere);

    if (!(this.#items || []).some((v) => v.isSelected)) {
      list.add(`emptySelection`, `Must be selected either one.`);
    }

    if (this.#items === null) {
      list.add(`requesting`, `Now requesting.`);
    }

    return list;
  }
}
