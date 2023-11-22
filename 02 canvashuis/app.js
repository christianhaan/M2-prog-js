class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillStyle = "blue";
        g.fillRect(0,0,10,10);
        g.fillStyle = "red";
    }
}

let app = new App();
app.runApplication();

