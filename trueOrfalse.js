/* Falsy
false
0
 "";
undefined
null
NaN
*/
/*Truthy
    "0";
    [];
 */
let name = false;
console.log(name);

if(name){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}