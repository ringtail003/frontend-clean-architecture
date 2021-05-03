export class ExhaustImplementationError extends Error {
  constructor(_: never, message?: string) {
    super(
      `This error exists for development, Declaration be suspected of violations for exhaust implementation.`
    );
  }
}
