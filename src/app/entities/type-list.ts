import { Entity } from 'src/app/entities/entity';
import { Type } from 'src/app/entities/type';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class TypeList extends Entity<TypeList> {
  #items: Type[] | null;
  #validationWhere = 'TypeList' as const;

  constructor() {
    super();
    this.#items = null;
  }

  get items() {
    return this.#items;
  }
  setItems(items: Type[]) {
    this.#items = items;
    this.#items.forEach((v) =>
      v.setHandler((group) => this.changeHandler(group))
    );
  }

  private changeHandler(type: Type) {
    this.#items!.forEach((v) => {
      if (v.id !== type.id) {
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
      list.add(`resolve`, `Waiting for resolution.`);
    }

    return list;
  }
}
