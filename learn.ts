interface IPerson {
  [props: string]: string;
}

const person: IPerson = {};

person.name = "John";

const fn = (str: `#${string}`) => {};

fn("#123");

type isTwo<T> = T extends 2 ? true : false;

type res = isTwo<44>;

type First<T extends number[]> = T extends [infer R, ...infer K] ? R : never;

type res2 = First<[1, 2, 3, 4]>;

type MapType<T> = {
  [key in keyof T as `${key & string}${key & string}${key & string}`]?: [
    T[key],
    T[key],
    T[key]
  ];
};

type res3 = MapType<{ a: 1; b: 2 }>;

type GetValueType<P> = P extends Promise<infer K> ? K : never;

type getValueResult = GetValueType<Promise<"suemor">>;

type arr = ShiftArr<[1, 2, 3]>;

type GetFirst<arr extends unknown[]> = arr extends [infer value, ...unknown[]]
  ? value
  : never;

type GetLast<arr extends unknown[]> = arr extends [...unknown[], infer value]
  ? value
  : never;


type PopArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [...infer Rest,unknown] ? Rest :never

type ShiftArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [unknown,...infer Rest] ? Rest :never


type StartsWithResult = StartsWith<'guang and dong', 'guang'>;

type StartsWith<Str extends string,Target extends string> = Str extends `${Target}${string}` ? true : false


type ReplaceStr<First extends string,Replace extends string,To extends string> = First extends `${infer Prefix}${Replace}${infer Last}` ? `${Prefix}${To}${Last}` : First

type ReplaceResult = ReplaceStr<"Guangguang's best friend is ?", "?", "Dongdong">;


type TrimStrRight<str extends string> = str extends `${infer Prefix}${' ' | '\n' | '\t'}` ? TrimStrRight<Prefix> : str

type TrimRightResult = TrimStrRight<'guang        '>;

type TrimStrLeft<str extends string> = str extends `${' ' | '\n' | '\t'}${infer Prefix}` ? TrimStrLeft<Prefix> : str

type TrimLeftResult = TrimStrLeft<'      dong'>;

type TrimStr<Str extends string> = TrimStrLeft<TrimStrRight<Str>>

type TrimResult = TrimStr<'      dong   '>;

type GetParameters<Func extends Function> = Func extends (...args:infer Args) => unknown ? Args : never

type ParametersResult = GetParameters<(name: string, age: number) => string>;

type constGetReturnType<Fn extends Function> = Fn extends (...args:any[]) => infer reun ? reun : never

type ReturnTypeResullt = constGetReturnType<(name: string) => 'dong'>;

class Dong {
  name: string;

  constructor() {
      this.name = "dong";
  }

  hello(this: Dong) {
      return 'hello, I\'m ' + this.name;
  }
}

const dong = new Dong();

// dong.hello.call({xxx:1});

type GetThisParameterType<T> = T extends (this:infer ThisType,...args:any[]) => any ? ThisType : never

type GetThisParameterTypeRes = GetThisParameterType<typeof dong.hello>;

type GetInstanceType<ConstructorType extends new (...args:any[])=>any > = ConstructorType extends new (...args:any[]) => infer ReturnType ? ReturnType : never

interface Person {
  name: string;
}

interface PersonConstructor {
  new(name: string): Person;
}

type GetInstanceTypeRes = GetInstanceType<PersonConstructor>;


type GetRefProps<Props> ='ref' extends keyof Props ? Props extends {ref?: infer RefReturn | undefined} ? RefReturn:never  :never

type GetRefPropsRes = GetRefProps<{ ref?: 1, name: 'dong'}>;
type GetRefPropsRes2 = GetRefProps<{ ref?: undefined, name: 'dong'}>;


type Push<Arr extends unknown[],Arr2> = [...Arr,Arr2]

type PushResult = Push<[1, 2, 3], 4>;