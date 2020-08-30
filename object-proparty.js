const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannnaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeppJol'}
];
// const output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const names = students.map(s => s.name);
//     output.push(names);
// }
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
const bigger1 = students.find(s => s.id>40);
console.log(bigger1);