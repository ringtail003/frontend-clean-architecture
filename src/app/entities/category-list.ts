import { Category } from 'src/app/entities/category';

export class CategoryList {
  public readonly items: Category[];
  #selectedId: number | null = null;

  constructor(params: { items: Category[] }) {
    this.items = params.items;
  }

  select(id: number): void {
    this.#selectedId = id;
  }

  isValid(): boolean {
    return !this.#selectedId;
  }
}
