import { ValidationErrorList } from 'src/app/entities/validation-error-list';

export abstract class Entity<T> {
  #isSealed = false;
  handler: (item: T) => void = () => {};
  abstract getErrors(): ValidationErrorList;

  get isSealed() {
    return this.#isSealed;
  }

  attach(): void {
    this.#isSealed = true;
  }

  detach() {
    this.#isSealed = false;
  }
}
