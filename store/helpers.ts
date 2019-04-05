export interface IAction<T, P> {
  readonly type: T;
  readonly payload?: P;
}

export function action<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
