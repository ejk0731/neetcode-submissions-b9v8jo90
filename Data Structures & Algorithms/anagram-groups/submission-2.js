class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
   groupAnagrams(strs) {
  const group = {}; // sortedKey -> [original words]

  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!group[key]) group[key] = [];
    group[key].push(s);
  }

  return Object.values(group);
}
}