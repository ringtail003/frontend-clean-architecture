import { Category } from 'src/app/entities/category/category';
import { Entity } from 'src/app/entities/entity';

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

  get isSelected() {
    return this.#isSelected;
  }
}
