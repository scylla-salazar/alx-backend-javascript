export default function iterateThroughObject(reportWithIterator) {
  const iterator = reportWithIterator;
  let result = '';
  
  let next = iterator.next();
  while (!next.done) {
    result += next.value;
    next = iterator.next();
    if (!next.done) {
      result += ' | ';
    }
  }
  
  return result;
}

