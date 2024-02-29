// const data = [
// {name: 'John', age: 25},
// {name: 'Alice', age: 30},
// {name: 'Bob', age: 20}

// ];
// const greaternumber= data.filter(data=>data.age>20)
// console.log(greaternumber)
// function add() {
//     let counter = 0;
//     counter += 1;
//     return counter;
// }
// add();
// add();
// add();
const add = ( function(){
    let counter= 0;
    return function() {counter += 1; return counter}
})();
add();
add();
add();
console.log(add())