type union = ['aaa','bbb'][number]

type BEM<Block extends string,Element extends string[],Modifiers extends string[]> = `${Block}__${Element[number]}--${Modifiers[number]}`

type bemResult = BEM<'guang', ['aaa', 'bbb'], ['warning', 'success']>;

