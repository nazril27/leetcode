/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  let count = 0;
  
  while (true) {
    if (students[0] === sandwiches[0]) {
        students.shift();
        sandwiches.shift();
        count = 0;
    } else {
        const stu = students.shift();
        students.push(stu);
        count++;
    }

    if (count === students.length) break;

  }

  return students.length;
};

const students = [1,1,1,0,0,1];
const sandwiches = [1,0,0,0,1,1];

console.log(countStudents(students, sandwiches));