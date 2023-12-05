class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);
        

    }

    tekenHuis(g,x,y)
    {
        //huis 1000pxl
        //dak links
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(300+x,100+y);
        g.lineTo(700+x,200+y);
        g.lineTo(600+x,400+y);
        g.lineTo(200+x,300+y);
        g.lineTo(200+x,300+y);
        g.closePath();
        g.fill()
        
        //muur links
        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(200+x,300+y);
        g.lineTo(200+x,500+y);
        g.lineTo(600+x,600+y);
        g.lineTo(600+x,400+y);
        
        //dak voor + muur voor
        g.moveTo(600+x,400+y);
        g.lineTo(700+x,200+y);
        g.lineTo(800+x,300+y);
        g.lineTo(800+x,500+y);
        g.lineTo(600+x,600+y);
        g.fill()
        g.stroke();
    }
}
let app = new App();
app.runApplication();
let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d");
app.tekenHuis(g, 100, 100);
app.tekenHuis(g, 500, 500);