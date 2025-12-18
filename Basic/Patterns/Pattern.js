// let n = 5;
// let pattern = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     pattern += "*";
//   }
//     pattern += "\n";
// }

//console.log(pattern);

let n = 6;

let pattern ="";

for(let i= 1;i<n; i++){
    for(let j =1; j<=i; j++){
        pattern += i;

    }
    pattern +="\n";
}

console.log(pattern);
