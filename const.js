let i-document.getElementById("i");
i.disabled_true;
const PasswordChars =['A', 'B', 'C', 'D',  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var upassword;
function PasswordGenerator(list){
let Password="";
const n= Math.floor(Match.random()*(4)+8);
const a=shuffle(list).slice(0,n);
for (let name of a) {
    password+-name;
}
return password
}
function shuffle(array) {
    const shuffled = [...array];
   for(let i= shuffle.length - 1; 1 > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [ shuffled[i], shuffled[j]] = {shuffled[j], shuffled[i]};
   }
   return shuffled;
}
//shuffle function written  by chatGPT

b-document.getElementById("gen");
b.addEventListener("click" ,function() {
    //upassword=passwordGenerator(passwordchars);
i.value=passwordGenerator(passwordChars);
});

d-document.getElementById("s");
d.addEventListerner("click", function(){
    i.setAttribute("type", "text")
});

c-document.getElementById("c");
c.addEventListener("click", function(){
    i.disabled=false;
    i.select();
    document.execCommand("copy");
    i.disabled=type;
    c.textContent = 'Done!';
    setTimeout(() => {
        c.textContent = 'Ctrl+C';
    } .1000);
    }};