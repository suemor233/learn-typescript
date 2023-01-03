type BuildArray<
  Length extends number,
  Ele = unknown,
  Arr extends unknown[] = []
> = Arr["length"] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>;

type Add<Num1 extends number, Num2 extends number> = [
  ...BuildArray<Num1>,
  ...BuildArray<Num2>
]["length"];

type AddResult = Add<32, 25>;

type Subtract<
  num1 extends number,
  num2 extends number
> = BuildArray<num1> extends [...Arr1: BuildArray<num2>, ...Arr2: infer Rest]
  ? Rest["length"]
  : never;

type SubtractResult = Subtract<33, 12>;

type Mutiply<
  Num1 extends number,
  Num2 extends number,
  Result extends unknown[] = []
> = Num2 extends 0
  ? Result["length"]
  : Mutiply<Num1, Subtract<Num2, 1>, [...BuildArray<Num1>, ...Result]>;

type MutiplyResult = Mutiply<3, 222>;

type Divide<
  Num1 extends number,
  Num2 extends number,
  ResultArr extends unknown[] = []
> = Num1 extends 0
  ? ResultArr["length"]
  : Divide<Subtract<Num1, Num2>, Num2, [unknown, ...ResultArr]>;

type DivideResult = Divide<30, 5>;

type StrLen<
  Str extends string,
  ResultArr extends unknown[] = []
> = Str extends `${string}${infer Rest}`
  ? StrLen<Rest, [unknown, ...ResultArr]>
  : ResultArr["length"];

type StrLenResult = StrLen<"Hello World">;

type GreaterThan<
  Num1 extends number,
  Num2 extends number,
  ResultArr extends unknown[] = [] 
> = Num1 extends Num2
  ? false
  : ResultArr["length"] extends Num2
  ? true
  : ResultArr["length"] extends Num1
  ? false
  : GreaterThan<Num1, Num2, [unknown, ...ResultArr]>;

type GreaterThanResult = GreaterThan<3, 4>;

type GreaterThanResult2 = GreaterThan<6, 4>;
