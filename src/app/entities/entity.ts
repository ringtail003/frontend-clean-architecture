export abstract class Entity<T> {
  handler: (item: T) => void = () => {};
}
