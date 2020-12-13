// camelCase 

function cameCase(str) {
 return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
     return index === 0 ? word.toLowerCase() : word.toUpperCase();
   }).replace(/\s+/g, '');
}

console.log(cameCase("EquipmentClass name"));
console.log(cameCase("Equipment className"));
console.log(cameCase("equipment class name"));
console.log(cameCase("Equipment Class Name"));