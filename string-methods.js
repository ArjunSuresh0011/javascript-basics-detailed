// we use string methords for different purpase

// trim() Returns a string with removed whitespaces

let fullName = "  Arjun Suresh   "
console.log(fullName.trim());
console.log("\n-------------------------------------------------------------------------------------\n")

//toUpperCase()	Returns a string converted to uppercase letters

console.log(fullName.toUpperCase());
console.log(
  "\n-------------------------------------------------------------------------------------\n"
);

// toLowerCase()

console.log(fullName.toLowerCase())
console.log(
  "\n-------------------------------------------------------------------------------------\n"
);

// slice()

console.log(fullName.slice(0,7));
console.log(
  "\n-------------------------------------------------------------------------------------\n"
);

// repeat() copys of the string

console.log(fullName.repeat(3));
console.log(
  "\n-------------------------------------------------------------------------------------\n"
);

// replace() => replaces the string with another

console.log(fullName.replace('Suresh','Sathi'));
console.log(
  "\n-------------------------------------------------------------------------------------\n"
);

// valueOf()

console.log(fullName.valueOf());

