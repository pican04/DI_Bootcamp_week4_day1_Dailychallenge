//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
let texte = "";
for(let item in details){
    texte = texte +" " +item + " " + details[item]
}
console.log(texte)