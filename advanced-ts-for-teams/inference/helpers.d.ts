declare type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T,
>() => T extends Y ? 1 : 2
  ? true
  : false;

declare type Expect<T extends true> = T;
declare type ExpectFalse<T extends false> = T;
