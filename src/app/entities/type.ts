export type TypeId = 'typeA' | 'typeB' | 'typeC';

export class Type {
  public readonly id: TypeId;
  public readonly label: string;
  #isSelected: boolean = false;
  #handler: (type: this) => void;

  constructor(params: { id: TypeId; label: string }) {
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

  get isSelected() {
    return this.#isSelected;
  }
}
