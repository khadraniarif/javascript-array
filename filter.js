/*
 * creates a new array based on the condition matched, passed in the array
*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//here it will create a new array, where the elements lenght is greater than 6

const filteredArr = words.filter(word => word.length > 6);
console.log(filteredArr);
