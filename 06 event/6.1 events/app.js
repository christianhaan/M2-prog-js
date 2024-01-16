class App
{
    runApplication()
    {
        console.log("hello world!");

        uiButton.addEventListener("click", () => {
            console.log("click!")
        });
    }
}

let app = new App();
app.runApplication();