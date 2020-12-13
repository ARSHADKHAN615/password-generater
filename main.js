const copyBtn = document.getElementById("pg-btn");
const P_lengthEl = document.getElementById("length");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const passwordTxt = document.getElementById("password_txt");
const generatorBtn = document.getElementById("generator");

copyBtn.addEventListener("click", function() {
    // CREATE TEXTAREA AND SET VALUE passwordTxt HTML 
    const textarea = document.createElement("textarea");
    // if (!passwordTxt) {
    //     return;
    // }
    textarea.value = passwordTxt.innerHTML;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();


    // COPY POPUP ALERT 
    const copyBox = document.createElement("div");
    copyBox.classList.add("copyBox");
    document.body.appendChild(copyBox);
    copyBox.innerHTML = "COPY SUCCESSFULLY"
    setInterval(() => {
        copyBox.remove();
    }, 2000);

})


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const symbol = "!@#$%^&*()_+=~<>";


function getUpperCase() {
    return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getLowerCase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbol[Math.floor(Math.random() * symbol.length)];
}

// console.log(getSymbol());

function generatePassword() {
    const lent = P_lengthEl.value;
    password = "";
    for (a = 0; a < lent; a++) {
        const x = getPasswordValue();
        password += x;
    }
    passwordTxt.innerHTML = password;
}

function getPasswordValue() {
    let valueArray = [];

    if (upperEl.checked) {
        valueArray.push(getUpperCase())
    }
    if (lowerEl.checked) {
        valueArray.push(getLowerCase())
    }
    if (numberEl.checked) {
        valueArray.push(getNumbers())
    }
    if (symbolEl.checked) {
        valueArray.push(getSymbol())
    }

    if (valueArray.length === 0) {
        return "12"
    } else {
        return valueArray[Math.floor(Math.random() * valueArray.length)];
    }
}

generatorBtn.addEventListener("click", generatePassword);