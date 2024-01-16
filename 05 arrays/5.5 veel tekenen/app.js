class App
{
    runApplication()
    {
        console.log("hello world!");

        let g = canvasId.getContext('2d');

        function tekenCirkel(x, y)
        {
            g.beginPath();
            g.arc(x,y,20,0,Math.PI*2);
            g.stroke();
            g.fill();
            g.closePath();
        }

        for (let i = 0; i < 200; i++) {
            tekenCirkel(Math.random() * window.innerWidth, Math.random() *window.innerHeight);   
        }
    }
}

let app = new App();
app.runApplication();

