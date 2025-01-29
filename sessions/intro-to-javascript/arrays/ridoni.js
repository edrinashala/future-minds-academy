const number = [
    "Ensa","Edrina","Laisa","Korabi"

]
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log("for loop", element);
}

names.forEach((element) => {
    console.log("forEach", element);
});


let uppercaseNames = names.map((element) => element.toUpperCase());
console.log("map", uppercaseNames);


let longNames = names.filter((element) => element.length > 4);
console.log("filter", longNames);


let concatenatedNames = names.reduce((accumulator, currentName) => accumulator + " " + currentName, "");
console.log("reduce", concatenatedNames);