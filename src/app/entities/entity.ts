export abstract class Entity<T> {
  #isSealed = false;
  handler: (item: T) => void = () => {};

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
