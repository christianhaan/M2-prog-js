
let uiButton = document.getElementById("uiButton");
console.log("hello world!");
uiButton.addEventListener("click", () => {
    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);
    document.body.appendChild(para);
});


uiButton = document.getElementById("zelfdoen");
console.log("hello world!");
uiButton.addEventListener("click", () => {
    const img = document.createElement("img");
    const para = document.createElement("h1");
    const p = document.createElement("p");
    const node = document.createTextNode("IT's a me");
    const p1 = document.createTextNode("hello world");
    img.src="http://www.google.com/intl/en_com/images/logo_plain.png";
    para.appendChild(node);
    p.appendChild(p1);
    document.body.appendChild(para);
    document.body.appendChild(p);
    document.body.appendChild(img)
});