import { Entity } from 'src/app/entities/entity';
import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export type TypeId = 'typeA' | 'typeB' | 'typeC';

export class Type extends Entity<Type> {
  public readonly id: TypeId;
  public readonly label: string;
  #isSelected: boolean = false;
  #handler: (type: this) => void;

  constructor(params: { id: TypeId; label: string }) {
    super();
    this.id = params.id;
    this.label = params.label;
    this.#handler = () => {};
  }

  setHandler(handler: (type: this) => void) {
    this.#handler = handler;
  }

  select(): void {
    this.#isSelected = true;
    this.#handler(this);
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
