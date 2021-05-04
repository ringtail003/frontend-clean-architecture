export class ValidationError {
  constructor(
    public readonly where: string,
    public cause: string,
    public readonly message: string
  ) {}
}
