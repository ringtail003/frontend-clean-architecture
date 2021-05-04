import { Category } from 'src/app/entities/category/category';
import { Entity } from 'src/app/entities/entity';

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

  get isSelected() {
    return this.#isSelected;
  }
}
