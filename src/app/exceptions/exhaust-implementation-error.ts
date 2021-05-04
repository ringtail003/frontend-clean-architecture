export class ExhaustImplementationError extends Error {
  constructor(_: never, message?: string) {
    super(
      `This error exists for the developments, this declaration has something incomplete.`
    );
  }
}
