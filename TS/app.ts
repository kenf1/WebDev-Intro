//print input
let message: string = "Hello";
console.log(message);

//check type using ifelse
if (typeof message == "string"){
    console.log("Var `message` is type `string`")
} else {
    console.log("Var `message` is NOT type `string`")
}

//shorter notation
typeof message == "string"? console.log("IS type `string`"): console.log("NOT type `string`")