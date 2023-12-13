//npm global command comes wth node
//npm --version
//local depndencies used in this project
//npm i <pakages>
// global dependencies used in any project
//npm install --globallly < pakagename> -g

const _ = require("lodash"); // external pakages use _ npm pakage as compare to node pakage use name

const items = [1, [2, [3],[4]]];
const newItems = _.flatMapDeep(items)
console.log(newItems);