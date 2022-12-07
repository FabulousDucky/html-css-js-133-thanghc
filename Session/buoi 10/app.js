const form = document.querySelector("#form");
const inputName = document.querySelector("#name");
const inputPass = document.querySelector("#password");
form.addEventListener("submit", (e) => {
    e.preventDefault();
console.log(inputName.value);
console.log(inputPass.value);
const div = document.createElement("div")
div.classList.add("todo");
div.innerHTML = `
<h1>${inputName.value}</h1>
<h2>${inputPass.value}</h2>
`;
document.querySelector("body").appendChild(div);
});
