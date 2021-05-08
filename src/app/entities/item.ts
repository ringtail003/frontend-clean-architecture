import { Entity } from 'src/app/entities/entity';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export class Item extends Entity<Item> {
  public readonly id: number;
  public readonly label: string;
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
