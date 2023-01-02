type BuildArray<
    Length extends number, 
    Ele = unknown, 
    Arr extends unknown[] = []
> = Arr['length'] extends Length ? Arr : BuildArray<Length,Ele,[...Arr,Ele]>

type Add<Num1 extends number,Num2 extends number> = [...BuildArray<Num1>,...BuildArray<Num2>]['length']

type AddResult = Add<32, 25>;

type Subtract<num1 extends number,num2 extends number> = BuildArray<num1> extends [...Arr1:BuildArray<num2>,...Arr2: infer Rest] ? Rest['length'] : never

type SubtractResult = Subtract<33, 12>;