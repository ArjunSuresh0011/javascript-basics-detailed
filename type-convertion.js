// the typeof keyword return the type of the datatype

let num = 24;
let fullName = "3500"
console.log(typeof num);
console.log(typeof fullName);


// converting number to string

let str = String(num)
console.log(typeof(str));

// converting string to number

let number = Number(fullName)
console.log(typeof(number));
console.log(number);

console.log("\n----shortcut methord to converting values-----\n");

//converting number to string in shortcut. we use (+"")

let string = num +""
console.log(`string : ${string}`);
console.log(typeof string+"\n");

// converting string to number using (+)

let numb = +fullName;
console.log(numb);
console.log(typeof numb);