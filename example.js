// [x] camelCase 

function cameCase(str) {
 return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
     return index === 0 ? word.toLowerCase() : word.toUpperCase();
   }).replace(/\s+/g, '');
}

console.log(cameCase("EquipmentClass name"));
console.log(cameCase("Equipment className"));
console.log(cameCase("equipment class name"));
console.log(cameCase("Equipment Class Name"));



// [x] find next higher number with same digits

function nextBigger(n) {
  let d = n.toString().split('');
//   find the pivot,the point(from right) where i > i - 1
     
  let p = -1;
 for (let i = d.length - 1; i > 0; i--) {
    if(d[i] > d[i - 1]) {
       p = i - 1;
       break; 
    }         
  }
// if we are unable to find the pivot, skip
  if(p == -1) return p;
  
  // splice the digits in the pivot
  let right = d.splice(p);
  console.log(right);

  // extract pivot
  var pv = right.splice(0, 1)[0];
 console.log(pv);
    // find the lowest number > pv
   var mm = null, mmi = null;
   for (let i = 0; i < right.length; i++) {
       if(right[i] > pv) {
          if(mm == null || right[i] < mm) {
              mm = right[i];
              mmi = i;
          }    
       }       
   }
   if(mmi == null) return -1;
  
   right.splice(mmi, 1);
   right.push(pv);
   right = right.sort();

    // concat the left + new pivot + right part
  var ret = +d.concat([mm]).concat(right).join('');
  if (ret < n) return -1;

  return ret;
}

console.log(nextBigger(21581957621));




// [x] Missing digits

let missingNumber = function(num) {
  const length = num.length;
  let sum = ((length + 1) *  length) / 2;
  
  for (let i = 0; i < length; i++) {
     sum = sum - num[i];    
  }
  return sum;
}




