export class Template {
  public readonly id: number;
  public readonly label: string;

  constructor(params: { id: number; label: string }) {
    this.id = params.id;
    this.label = params.label;
  }
}
