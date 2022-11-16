const arr = [1, 2, 3, 4, 5, 6];

const useEveryMethod = (arr) => {
    return arr.every(ele => ele < 12);
}
console.log(useEveryMethod(arr)); // returns true if array elements is less than 12

const newArr = [2, 3, 5];

const isSubset = (arr, newArr) => newArr.every(ele => arr.includes(ele));
console.log(isSubset(arr, newArr)); // returns true, if newArr elements are included in arr
