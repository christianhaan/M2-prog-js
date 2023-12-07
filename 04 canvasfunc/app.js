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

    //kerstboom
    tekenKerstboom(g,x,y)
    {

        
        
        //stam
        g.fillStyle = '#3A1f04'
        g.fillRect(500+x, 690+y, 60, 90);
        g.fill();

                

        //bladeren
        g.beginPath();
        g.moveTo(530, 450);
        g.lineTo(430, 700);
        g.lineTo(630, 700);
        g.closePath();
        g.fillStyle = '#00ff00';
        g.fill();

        //ballen
        g.beginPath();
        g.arc(530,570,10,0,Math.PI*2);
        g.closePath();
        g.stroke();
        g.fillStyle = "#ffff00";
        g.fill();

        g.beginPath();
        g.arc(520,580,10,0,Math.PI*2);
        g.closePath();
        g.stroke();
        g.fillStyle = "#ffff00";
        g.fill();

        g.beginPath();
        g.arc(510,590,10,0,Math.PI*2);
        g.closePath();
        g.stroke();
        g.fillStyle = "#ffff00";
        g.fill();

        g.beginPath();
        g.arc(500,600,10,0,Math.PI*2);
        g.closePath();
        g.stroke();
        g.fillStyle = "#ffff00";
        g.fill();

        g.beginPath();
        g.arc(540,610,10,0,Math.PI*2);
        g.closePath();
        g.stroke();
        g.fillStyle = "#ffff00";
        g.fill();

        g.beginPath();
        g.arc(550,620,10,0,Math.PI*2);
        g.closePath();
        g.stroke();
        g.fillStyle = "#ffff00";
        g.fill();

        g.beginPath();
        g.arc(530,600,10,0,Math.PI*2);
        g.closePath();
        g.stroke();
        g.fillStyle = "#ffff00";
        g.fill();

        g.beginPath();
        g.arc(565,650,10,0,Math.PI*2);
        g.closePath();
        g.stroke();
        g.fillStyle = "#ffff00";
        g.fill();

        g.beginPath();
        g.arc(560,690,10,0,Math.PI*2);
        g.closePath();
        g.stroke();
        g.fillStyle = "#ffff00";
        g.fill();

        g.beginPath();
        g.arc(555,670,10,0,Math.PI*2);
        g.closePath();
        g.stroke();
        g.fillStyle = "#ffff00";
        g.fill();

        //piek
        g.fillStyle = '#3A1F04'
        g.fillRect(500,400,60,90);
        g.fill();
    }
}
let app = new App();
app.runApplication();
let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d");
//app.tekenHuis(g, 100, 100);
//app.tekenHuis(g, 500, 500);
app.tekenKerstboom(g, 0 ,0);
app.piek();