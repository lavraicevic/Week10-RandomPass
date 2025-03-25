function check(){
    let loewCheck = lowercase.checked
    let upCheck = uppercase.checked
    let numCheck = numbers.checked
    let symCheck = symbols.checked

    let checkList = [loewCheck, upCheck, numCheck, symCheck];

    let result = checkList.filter((res)=> res == true)

    const boxes = document.querySelectorAll(".strength-box");

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
            box.style.backgroundColor = "white";
            box.style.borderColor = "white";
        });

        boxes[0].style.backgroundColor = "orange";
        boxes[0].style.borderColor = "orange";

        boxes[1].style.backgroundColor = "orange";
        boxes[1].style.borderColor = "orange";

        boxes[2].style.backgroundColor = "orange";
        boxes[2].style.borderColor = "orange";

    } if(result.length === 4) {
        boxes.forEach(box => {
            box.style.backgroundColor = "green";
            box.style.borderColor = "green";
        });
    }
}

const charLen = document.getElementById("charLen");
const range = document.getElementById("range");

charLen.textContent = range.value;

range.addEventListener('input', e => {
    charLen.textContent = range.value;
})

const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

lowercase.addEventListener("change", () => check());

uppercase.addEventListener("change", () => check());

numbers.addEventListener("change", () => check());

symbols.addEventListener("change", () => check());


function generatePassword(){

    let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let numbersChars = "0123456789";
    let symbolsChars = "~!@#$%^&*_+-?><";

    return(uppercaseChars);
    
}


function generateChar(generator){
    let character =  generator.charAt(Math.floor(Math.random() * 26));

    return character
}

console.log(generateChar(generatePassword()))