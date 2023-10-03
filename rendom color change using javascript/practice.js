const btn = document.getElementById("button");
const rendomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";

    for(let i = 0 ; i < 6 ; i++){
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};

function changeremdomcolor(){
    document.body.style.backgroundColor = rendomColor();
}

btn.addEventListener("click", changeremdomcolor);
