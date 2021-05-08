import { Category } from 'src/app/entities/category/category';
import { Entity } from 'src/app/entities/entity';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class CategoryNone extends Entity<Category> implements Category {
  public readonly id = 0;
  public readonly label = 'blank';
  public readonly hasTemplates = false;

  #isSelected: boolean = false;

  constructor() {
    super();
  }

  select(): void {
    this.#isSelected = true;
    this.handler(this);
  }

  deselect(): void {
    this.#isSelected = false;
  }

  getErrors(): ValidationErrorList {
    return new ValidationErrorList();
  }

  get isSelected() {
    return this.#isSelected;
  }
}
