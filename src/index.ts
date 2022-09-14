import flatten from './flatten';

const verifyFlatten = () => {
  const sourceArray = [ 1, [ 2, [ 3 ] ], 4 ];
  console.log(`Call with ${JSON.stringify(sourceArray)} return ${JSON.stringify(flatten(sourceArray))}`);
}

verifyFlatten();

