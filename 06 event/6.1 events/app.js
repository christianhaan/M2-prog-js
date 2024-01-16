class App
{
    runApplication()
    {
        console.log("hello world!");

        uiButton.addEventListener("click", (e) => {
            const para = document.createElement("p");
            const node = document.createTextNode("This is new.");
            para.appendChild(node);
            document.body.appendChild(para);
        });

        zelfbutton.addEventListener("click", () => {
            console.log("click!");
        });
    }
}

let app = new App();
app.runApplication();