export type TypeId = 'typeA' | 'typeB' | 'typeC';

export class Type {
  public readonly id: TypeId;
  public readonly label: string;

  constructor(params: { id: TypeId; label: string }) {
    this.id = params.id;
    this.label = params.label;
  }
}
