import { Entity } from 'src/app/entities/entity';
import { Template } from 'src/app/entities/template';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class TemplateList extends Entity<TemplateList> {
  #items: Template[] | null;
  #validationWhere = 'Template';

  constructor() {
    super();
    this.#items = null;
  }

  get items() {
    return this.#items;
  }
  setItems(items: Template[]): void {
    this.#items = items;
    this.#items.forEach((v) => (v.handler = (v) => this.onChangeHandler(v)));
  }

  getErrors(): ValidationErrorList {
    const list = new ValidationErrorList(this.#validationWhere);

    const selection = (this.#items || []).filter((v) => v.isSelected);

    if ((this.#items || []).length && !selection.length) {
      list.add(`emptySelection`, `Must be selected either one.`);
    }

    if (this.#items === null) {
      list.add(`resolve`, `Waiting for resolution.`);
    }

    return list;
  }

  private onChangeHandler(template: Template): void {
    this.#items!.forEach((v) => {
      if (v.id !== template.id) {
        v.deselect();
      }
    });
  }
}
