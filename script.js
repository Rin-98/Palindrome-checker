const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

let fliterInput;

checkBtn.addEventListener("click", () => {
    let reverseInput = fliterInput.split("").reverse().join("");
    result.style.display = "block";
    if (fliterInput != reverseInput) {
        return result.innerHTML = `No, <span>"${textInput.value}"</span> isn't a Palindrome!`;
    }
    result.innerHTML = `Yes, <span>"${textInput.value}"</span> is a Palindrome!`;
})

textInput.addEventListener("keyup", () => {
    fliterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (fliterInput) {
        return checkBtn.classList.add("active");
    }
    result.style.display = "none";
    checkBtn.classList.remove("active");
});