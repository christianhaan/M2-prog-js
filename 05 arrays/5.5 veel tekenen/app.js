class App
{
    runApplication()
    {
        console.log("hello world!");

        function tekenCirkel()
        {
            g.beginpath();
            g.arc(400,300,20,0,Math.PI*2);
            g.stroke();
            g.fill();
            g.closepath();
        }
    }
}

let app = new App();
app.runApplication();

