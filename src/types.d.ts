declare global {
  /*~ Here, declare things that go in the global namespace, or augment
   *~ existing declarations in the global namespace
   */

  // eslint-disable-next-line prettier/prettier
  type ReduxProps<T extends (...args: any) => any, U extends (...args: any) => any> = (T extends (
    ...args: any
  ) => infer R
    ? R
    : any) &
    (U extends (...args: any) => infer R ? R : any)
  type Type<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
}

export {}
