alert("Xush kelibsiz!");
var firstName = prompt("Yoqtirgan taomingizni kiriting!");
var paragraph = document.createElement("p");
paragraph.textContent = "Sizning yoqtirgan taomingiz : " + firstName;
document.body.appendChild(paragraph);
document.querySelector("p").style.textAlign = "center";
document.querySelector("p").style.marginTop = "300px";
document.querySelector("p").style.fontSize = "24px";
document.querySelector("p").style.fontWeight = "600";