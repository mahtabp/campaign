import * as _ from 'lodash';

export function isNullOrEmpty(input: string): boolean {
  return (input === null || input === undefined || input === '');
}

export function positiveDivisors(originalNumber: number): number[] {
  let result = [];

  const half = Math.floor(originalNumber / 2);
  for(let index = 1; index < half; index++) {
    if(originalNumber % index == 0) {
      if (!_.includes(result, index)) {
        result.push(index);
        result.push(originalNumber / index);
      }
    }
  }
  return _.orderBy(result);
}

export function getTriangleArea(a: number, b: number, c: number) {
  if (!aretriangleDimensionsValid(a, b, c)) {
    throw new Error('Invalid input');
  }

  const perimeter = (a + b + c) / 2;
  const area = Math.sqrt(perimeter*(perimeter-a)*(perimeter-b)*(perimeter-c));
  return area;
}

function aretriangleDimensionsValid(a: number, b: number, c: number) : boolean {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a + b > c && a + c > b && b + c > a) return true;
  return false;
}

export function getMostCommon(array: number[]): number[] {
  if(array.length == 0) {
    return [];
  }
        
  let result: number[] = [];
  var tempArray = {};
  let maxCount = 1;
  for(var i = 0; i < array.length; i++)
  {
      var item = array[i];
      if(tempArray[item] == null) {
        tempArray[item] = 1;
      }
      else {
        tempArray[item]++;
      }

      if(tempArray[item] > maxCount)
      {
          maxCount = tempArray[item];
      }
  }
  
  for(var node in tempArray) {
    if(tempArray[node] == maxCount) {
      result.push(parseInt(node));
    }  
  }
  
  return result;
}
