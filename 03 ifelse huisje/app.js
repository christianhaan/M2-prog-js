class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        
        //huis 1000pxl
        //dak links
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.lineTo(200,300);
        g.closePath();
        g.fill()
        
        //muur links
        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        
        //dak voor + muur voor
        g.moveTo(600,400);
        g.lineTo(700,200);
        g.lineTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.closePath();
        g.fill()
        g.stroke();



        //huis 100px
        //dak links
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.lineTo(20,30);
        g.closePath();
        g.fill()
        
        //muur links
        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        
        //dak voor + muur voor
        g.moveTo(60,40);
        g.lineTo(70,20);
        g.lineTo(80,30);
        g.lineTo(80,50);
        g.lineTo(60,60);
        g.fill();
        g.closePath();
        g.stroke();

        //raam + kleur
        let random = Math.random();
        console.log(random);
        
        if(random < 0.5)
        {
            g.fillStyle = "yellow"
        }
        else if (random >0.5)
        {
            g.fillStyle = "black"
        }
        
        g.beginPath();
        g.moveTo(425,450);
        g.lineTo(300,400);
        g.lineTo(300,450);
        g.lineTo(425,500);
        g.closePath();
        g.fill();
        g.stroke();
        
    }
}
let app = new App();
app.runApplication();

