// Hash Table, String, Sliding Window
// object 복사가 안됨;
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let pObject = {};
  let result = [];

  // make p to hashMap
  for (let i = 0; i < p.length; i++) {
    pObject[p[i]] ? pObject[p[i]]++ : (pObject[p[i]] = 1);
  }

  console.log('pObject: ', pObject);

  for (let i = 0; i < s.length - p.length + 1; i++) {
    let pObjectForCheck = pObject;
    console.log('pObjectForCheck: ', pObjectForCheck);
    console.log('pObject: ', pObject);

    let k = i;
    let check = true;
    while (k < i + p.length && check) {
      console.log('hello k: ', k, 'i: ', i);
      //   console.log('pObjectForCheck: ', pObjectForCheck);
      if (pObjectForCheck[p[k]]) {
        pObjectForCheck[p[k]]--;
      } else {
        check = false;
      }
      k++;
    }

    if (check) {
      console.log('check true');
      result.push(i);
      // s[i+p.length]가 없으면?
      //   if(s[i] === s[i+p.length]) {
      //     result.push(i+1)
      //   } else {

      //   }
    }
  }

  return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));

// const test = (p) => {
//   let pObject = {};

//   return pObject;
// };

// console.log(test('abbdac'));
