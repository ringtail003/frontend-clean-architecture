import { Category } from 'src/app/entities/category/category';
import { CategoryConcrete } from 'src/app/entities/category/category-concrete';
import { CategoryFactory } from 'src/app/entities/category/category-factory';
import { Entity } from 'src/app/entities/entity';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class CategoryList extends Entity<CategoryList> {
  #items: Category[] | null;
  #validationWhere = 'Category';

  constructor() {
    super();
    this.#items = null;
  }

  get items() {
    return this.#items;
  }
  setItems(items: CategoryConcrete[]): void {
    this.#items = [new CategoryFactory().create(), ...items];
    this.#items.forEach((v) => (v.handler = (v) => this.onChangeHandler(v)));
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

  private onChangeHandler(category: Category): void {
    this.#items!.forEach((v) => {
      if (v.id !== category.id) {
        v.deselect();
      }
    });
  }
}
