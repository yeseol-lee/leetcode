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

  for (let i = 0; i < s.length - p.length + 1; i++) {
    let pObjectCopy = { ...pObject };

    let k = i;
    let check = true;
    let nonExistingLetter = false;
    while (k < i + p.length && check) {
      if (pObjectCopy[s[k]]) {
        pObjectCopy[s[k]]--;
      } else if (pObjectCopy[s[k]] === 0) {
        check = false;
      } else {
        nonExistingLetter = true;
        check = false;
      }
      k++;
    }

    // anagram인 경우
    if (check) {
      result.push(i);

      // sliding window로 다음요소가 anagram인지 확인
      while (i + p.length < s.length && s[i] === s[i + p.length]) {
        i++;
        result.push(i);
      }
      i++;
    }

    // p에 존재하지 않는 letter가 있는 경우 i를 그 다음 index로 이동
    if (nonExistingLetter) {
      i = k - 1;
    }
  }
  return result;
};
