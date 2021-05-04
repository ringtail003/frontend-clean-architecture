import { Entity } from 'src/app/entities/entity';
import { Template } from 'src/app/entities/template';

export class TemplateList extends Entity<TemplateList> {
  #items: Template[] | null;

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

  private onChangeHandler(template: Template): void {
    this.#items!.forEach((v) => {
      if (v.id !== template.id) {
        v.deselect();
      }
    });
  }
}
