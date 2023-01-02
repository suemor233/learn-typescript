type Zip<First extends unknown[], Other extends unknown[]> = First extends [
  infer FirstOne,
  infer FirstTwo
]
  ? Other extends [infer OtherOne, infer OtherTWo]
    ? [[FirstOne, OtherOne], [FirstTwo, OtherTWo]]
    : []
  : [];
type ZipResult = Zip<[1, 2], ["guang", "dong"]>;

type Zip2<One extends unknown[], Other extends unknown[]> = One extends [
  infer FirstOne,
  ...infer RestOne
]
  ? Other extends [infer FirstOther, ...infer RestOther]
    ? [[FirstOne, FirstOther], ...Zip2<RestOne, RestOther>]
    : []
  : [];

type Zip2Result = Zip2<
  [1, 2, 3, 4, 5],
  ["guang", "dong", "is", "best", "friend"]
>;

type CapitalizeStr<str extends string> =
  str extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : never;

type CapitalizeResult = CapitalizeStr<"guang">;


type CamelCase<Str extends string> = Str extends `${infer First}_${infer Char}${infer Rest}` ? `${First}${Uppercase<Char>}${CamelCase<Rest>}` : Str

type CamelCaseResult = CamelCase<'dong_dong_d'>;


type DropSubStr<Str1 extends string,Str2 extends string> = Str1 extends `${infer Prefix}${Str2}${infer Last}` ? DropSubStr<`${Prefix}${Last}`,Str2> : Str1

type DropResult = DropSubStr<'dong~~~', '~'>;


type AppendArgument<Fn extends Function,Arg> = Fn extends (...args:infer Args) => infer ReturnType ? (...args:[Args,Arg])=> ReturnType : never

type AppendArgumentResult  = AppendArgument<(name: string) => boolean, number>;


type UppercaseKey<Obj extends Object> = {
  [key in keyof Obj as Uppercase<key & string>] : Obj[key]
}

type UppercaseKeyResult = UppercaseKey<{ guang: 1, dong: 2}>;

type MyRecord<K extends number | string | symbol,T> = {
  [P in K]:T
}

type temp = MyRecord<string, number>
type temp2 = Record<string, number>




interface Person {
  name: string;
  age: number;
  hobby: string[];
}

type FilterByValueType<Obj extends Record<string,any>,ValueType> = {
  [key in keyof Obj as Obj[key] extends ValueType ? key : never] : Obj[key]
}


type FilterResult = FilterByValueType<Person, string | number>;