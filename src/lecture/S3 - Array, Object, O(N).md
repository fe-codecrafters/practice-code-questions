# Objects and Big O

- unordered, key value pairs
- no order, fast access, insert, remove

- Big O Notation
  - Insertion O(1)
  - Removal O(1)
  - Searching O(n) - Iterate to find one
  - Access O(1)
  
- Methods Big O
  - Object.keys() O(n)
  - Object.entries() O(n)
  - Object.values() O(n)
  - Object.hasOwnProperty() O(1) - Access - if you know the key

# Arrays

- ordered list
- when you need order
- It's not the only one for ordere list
- when you need fast access insertion, access

- Big O
  - insert, remove it depends
    - if you insert on front, js need to reindex all elements, so O(n)
    - if you insert on end, O(1)
  - searching O(n)
  - access O(1)

- Methods Big O
  - push O(1)
  - pop O(1)
  - shift O(N)
  - unshift O(N)
  - concat O(N + M) - first array length n + second array length m
  - slice O(N) - to copy, you need to look at all elements
  - splice O(N) - similar to shift, unshift
  - sort O(N * logN)
  - forEach, Map, Filter, reduce... O(N)


