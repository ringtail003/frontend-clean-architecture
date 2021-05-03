import { Entity } from 'src/app/entities/entity';

export class Group extends Entity<Group> {
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

  isSelected(): boolean {
    return this.#isSelected;
  }
}
