import { ValidationError } from 'src/app/entities/validation-error';

export class ValidationErrorList {
  #items: ValidationError[];
  #where?: string;

  constructor(key?: string) {
    this.#items = [];
    this.#where = key;
  }

  get items() {
    return this.#items;
  }

  add(cause: string, message: string): void {
    this.addError(new ValidationError(this.#where!, cause, message));
  }

  addError(validationError: ValidationError): void {
    this.#items.push(validationError);
  }

  concat(list: ValidationErrorList | undefined): this {
    this.#items = [...this.#items, ...(list?.items || [])];

    return this;
  }
}
