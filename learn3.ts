type DeepPromiseValueType<P extends Promise<unknown>> = P extends Promise<
  infer ReturnType
>
  ? ReturnType extends Promise<unknown>
    ? DeepPromiseValueType<ReturnType>
    : ReturnType
  : never;

type DeepPromiseResult = DeepPromiseValueType<
  Promise<Promise<Record<string, any>>>
>;

type ReverseArr<Arr extends unknown[]> = Arr extends [
  infer First,
  ...infer Rest
]
  ? [...ReverseArr<Rest>, First]
  : Arr;

type ReverseArrResult = ReverseArr<[1, 2, 3, 4, 5]>;

type Includes<Arr extends unknown[], FindItem> = Arr extends [
  infer First,
  ...infer Rest
]
  ? IsEqual<First, FindItem> extends true
    ? true
    : Includes<Rest, FindItem>
  : false;

type IsEqual<A, B> = (A extends B ? true : false) &
  (B extends A ? true : false);

type IncludesResult = Includes<[1, 2, 3, 4, 5], 4>;

type IncludesResult2 = Includes<[1, 2, 3, 4, 5], 6>;

type RemoveItem<
  Arr extends unknown[],
  Item,
  Result extends unknown[] = []
> = Arr extends [infer First, ...infer Rest]
  ? IsEqual<First, Item> extends true
    ? RemoveItem<Rest, Item, Result>
    : RemoveItem<Rest, Item, [...Result, First]>
  : Result;

type RemoveItemResult = RemoveItem<[1, 2, 2, 3], 2>;

type BuildArray<
  Length extends number,
  Ele = unknown,
  Result extends unknown[] = []
> = Result["length"] extends Length
  ? Result
  : BuildArray<Length, Ele, [...Result, Ele]>;

type BuildArrResult = BuildArray<5>;

type ReplaceAll<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer First}${From}${infer Last}`
  ? `${First}${To}${ReplaceAll<Last, From, To>}`
  : Str;

type ReplaceAllResult = ReplaceAll<"guang guang guang", "guang", "dong">;

type StringToUnion<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? First | StringToUnion<Rest>
    : never;

type StringToUnionResult = StringToUnion<"hello">;

type ReverseStr<
  Str extends string,
  Result extends string = ""
> = Str extends `${infer First}${infer Rest}`
  ? ReverseStr<Rest, `${First}${Result}`>
  : Result;

type ReverseStrResult = ReverseStr<"hello">;

type DeepReadonly<Obj extends Object> = Obj extends any ? {
   readonly [Key in keyof Obj]: Obj[Key] extends Object
    ? Obj[Key] extends Function
      ? Obj[Key]
      : DeepReadonly<Obj[Key]>
    : Obj[Key];
} :never;

type obj = {
  a: {
    b: {
      c: {
        f: () => "dong";
        d: {
          e: {
            guang: string;
          };
        };
      };
    };
  };
};

type DeepReadonlyResult = DeepReadonly<obj>["a"];

type DeepReadonlyResult2 = DeepReadonly<obj>["a"]["b"]["c"];
