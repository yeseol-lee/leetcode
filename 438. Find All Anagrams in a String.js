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

  // // make p to hashMap
  // for (let i = 0; i < p.length; i++) {
  //   pObject[p[i]] ? pObject[p[i]]++ : (pObject[p[i]] = 1);
  // }

  console.log('pObject: ', pObject);

  for (let i = 0; i < s.length - p.length + 1; i++) {
    let pObject = {};
    // make p to hashMap
    for (let j = 0; j < p.length; j++) {
      pObject[p[j]] ? pObject[p[j]]++ : (pObject[p[j]] = 1);
    }

    console.log('i: ', i);
    console.log('pObject: ', pObject);

    let k = i;
    let check = true;
    while (k < i + p.length && check) {
      console.log('hello k: ', k, 'i: ', i);
      //   console.log('pObject: ', pObject);
      if (pObject[s[k]]) {
        console.log('o');
        pObject[s[k]]--;
      } else {
        check = false;
      }
      k++;
    }

    // anagram인 경우
    if (check) {
      console.log('check true');
      result.push(i);

      // sliding window로 다음요소가 anagram인지 확인
      while (i + p.length < s.length && s[i] === s[i + p.length]) {
        i++;
        result.push(i);
      }
      i++;
    }
  }

  return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));

// // Hash Table, String, Sliding Window
// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {number[]}
//  */
// var findAnagrams = function (s, p) {
//   let result = [];

//   for (let i = 0; i < s.length - p.length + 1; i++) {
//     let pObject = {};
//     // make p to hashMap
//     for (let j = 0; j < p.length; j++) {
//       pObject[p[j]] ? pObject[p[j]]++ : (pObject[p[j]] = 1);
//     }

//     let k = i;
//     let check = true;
//     while (k < i + p.length && check) {
//       if (pObject[s[k]]) {
//         pObject[s[k]]--;
//       } else {
//         check = false;
//       }
//       k++;
//     }

//     if (check) {
//       result.push(i);
//     }
//   }

//   return result;
// };
