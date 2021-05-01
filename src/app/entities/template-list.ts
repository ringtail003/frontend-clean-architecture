import { Template } from 'src/app/entities/template';

export class TemplateList {
  public readonly items: Template[];
  #selectedIds: number[] = [];

  constructor(params: { items: Template[] }) {
    this.items = params.items;
  }

  select(id: number): void {
    this.#selectedIds.push(id);
  }

  deselect(id: number): void {
    this.#selectedIds = this.#selectedIds.filter((v) => v !== id);
  }

  toggle(id: number): void {
    this.#selectedIds.includes(id) ? this.deselect(id) : this.select(id);
  }

  isValid(): boolean {
    return !this.#selectedIds.length;
  }
}
