const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "!@#$%&*()?/,.`"

function generate() {
    const length = parseInt(document.getElementById("passwordLength").value);
    const includeUpper = document.getElementById("includeUppercase").checked;
    const includeNumber = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    let chars = lowerCase;
    if (includeUpper) chars += upperCase;
    if (includeNumber) chars += number;
    if (includeSymbols) chars += symbol;

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("passwordResult").textContent = password;
}

