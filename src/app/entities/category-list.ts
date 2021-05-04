import { Category } from 'src/app/entities/category';
import { Entity } from 'src/app/entities/entity';

export class CategoryList extends Entity<CategoryList> {
  #items: Category[] | null;

  constructor() {
    super();
    this.#items = null;
  }

  get items() {
    return this.#items;
  }
  setItems(items: Category[]): void {
    this.#items = items;
    this.#items.forEach((v) => (v.handler = (v) => this.onChangeHandler(v)));
  }

  private onChangeHandler(category: Category): void {
    this.#items!.forEach((v) => {
      if (v.id !== category.id) {
        v.deselect();
      }
    });
  }
}
