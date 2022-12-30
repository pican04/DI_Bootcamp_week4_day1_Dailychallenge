let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
//Console.log the name of their secret society. The output should be “ABJKPS”
let secretsociety ="";
for(let letter of names){
    secretsociety += letter[0]
}
console.log(secretsociety);

