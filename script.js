function check(){
    let upCheck = uppercase.checked
    let numCheck = numbers.checked
    let symCheck = symbols.checked

    let checkList = [upCheck, numCheck, symCheck];

    let result = checkList.filter((res)=> res == true)

    const boxes = document.querySelectorAll(".strength-box");
    console.log(boxes);

    if(result.length == 0){

        boxes.forEach(box => {
            box.style.backgroundColor = "white";
            box.style.borderColor = "white";
        });

    } if(result.length == 1){
        boxes.forEach(box => {
            box.style.backgroundColor = "white";
            box.style.borderColor = "white";
        });

        boxes[0].style.backgroundColor = "darkred";
        boxes[0].style.borderColor = "darkred";

    } if(result.length == 2){

        boxes.forEach(box => {
            box.style.backgroundColor = "white";
            box.style.borderColor = "white";
        });
        
        boxes[0].style.backgroundColor = "gold";
        boxes[0].style.borderColor = "gold";

        boxes[1].style.backgroundColor = "gold";
        boxes[1].style.borderColor = "gold";

    } if(result.length == 3){
        boxes.forEach(box => {
            box.style.backgroundColor = "green";
            box.style.borderColor = "green";
        })
    }
}

const charLen = document.getElementById("charLen");
const range = document.getElementById("range");

charLen.textContent = range.value;

range.addEventListener('input', e => {
    charLen.textContent = range.value;
})

const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

uppercase.addEventListener("change", () => check());

numbers.addEventListener("change", () => check());

symbols.addEventListener("change", () => check());

