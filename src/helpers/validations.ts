export function isFullFilledResult<T>(
  value: PromiseSettledResult<T>
): value is PromiseFulfilledResult<T> {
  return value.status === 'fulfilled';
}
export const validateEmail = (email: string) => {
  return /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,}$/.test(
    email
  );
};
