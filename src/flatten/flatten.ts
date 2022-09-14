type ArbitrarilyNestedArray<Type> = Type[] | ArbitrarilyNestedArray<Type>[];

// can be use reduce, but it is more readable for my opinion
export const flatten = <Type>(sourceArray: ArbitrarilyNestedArray<Type>): Type[] => {
  const result: Type[] = [];

  for (const sourceItem of sourceArray) {
    if (Array.isArray(sourceItem)) {
      result.push(...flatten(sourceItem))
    } else {
      result.push(sourceItem);
    }
  }

  return result;
};
