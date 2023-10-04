// const btn = document.getElementById("button");
// const rendomColor = () => {
//     let val = "0123456789ABCDEF";
//     let cons = "#";

//     for(let i = 0 ; i < 6 ; i++){
//         cons = cons + val[Math.floor(Math.random() * 16)];
//     }
//     return cons;
// };

// function changeremdomcolor(){
//     document.body.style.backgroundColor = rendomColor();
// }

// btn.addEventListener("click", changeremdomcolor);

const incbtn = document.getElementById("incrementbtn");
const decbtn = document.getElementById("decrementbtn");
const resetbtn = document.getElementById("resetbtn");
const displyvalue = document.getElementById("displayvalue");


decbtn.addEventListener("click", () =>{
    const value = Number(displyvalue.innerText);
    if(value > 0){
        displyvalue.innerText = value - 1;
    }else{
        alert("Negative value not allowed");
    }
});

incbtn.addEventListener("click", () =>{
    const value = Number(displyvalue.innerText);
    if(value >= 10){
        alert("more then 1000 value are not allowed");
    }else{
        displyvalue.innerText = value + 1;
    }
});

resetbtn.addEventListener("click", () => {
    displyvalue.innerText = 0;
});






