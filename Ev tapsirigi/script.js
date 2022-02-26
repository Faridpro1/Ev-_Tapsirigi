const text = document.getElementById("world");
const text2 = "Azerbaijan";
function text3() {
    if(text2.length%2==0){
        text2.push(1)
        console.log(text2);
    }
    if(text2.length%3){
        text2.push(2)
        console.log(text2);
    }
}

console.log(text3);