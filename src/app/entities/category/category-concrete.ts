import { Category } from 'src/app/entities/category/category';
import { Entity } from 'src/app/entities/entity';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class CategoryConcrete extends Entity<Category> implements Category {
  public readonly id: number;
  public readonly label: string;
  public readonly hasTemplates = true;

  #isSelected: boolean = false;

  constructor(params: { id: number; label: string }) {
    super();
    this.id = params.id;
    this.label = params.label;
  }

  select(): void {
    this.#isSelected = true;
    this.handler(this);
  }

  deselect(): void {
    this.#isSelected = false;
  }

  getErrors() {
    return new ValidationErrorList();
  }

  get isSelected() {
    return this.#isSelected;
  }
}
