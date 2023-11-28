class App
{
    runApplication()
    {
        console.log("hello world!");
        
        let title = document.getElementById("newstitle");
        console.log(title);
        
        let newsitem1 = document.getElementsByClassName("gamenews")[0];
        console.log(newsitem1);

        let newsitem2 = document.getElementsByClassName("gamenews")[1];
        console.log(newsitem2);

        //random kleur titel
        let random = Math.random();
        console.log(random)
        if(random < 0.2)
        {
            title.style.backgroundColor = "#FF4382";
        }
        else if (random <0.6)
        {
            title.style.backgroundColor = "#336483";
        }
        else if (random <0.75)
        {
            title.style.backgroundColor = "#58FA58";
        }
        else if (random >0.75)
        {
            title.style.backgroundColor = "#642EFE";
        }


        //random kleur regel2
        let regel2 = Math.random();
        console.log(regel2);
        if(regel2 <0.2)
        {
            newsitem1.style.backgroundColor = "#4f2db3";
        }
        else if (regel2 <0.6)
        {
            newsitem1.style.backgroundColor = "#38da3d";
        }
        else if (regel2 <0.75)
        {
            newsitem1.style.backgroundColor = "#871a28";
        }
        else if (regel2 >0.75)
        {
            newsitem1.style.backgroundColor = "#bbb408";
        }


        //random kleur regel3
        let regel3 = Math.random();
        console.log(regel3);
        if(regel3 <0.2)
        {
            newsitem2.style.backgroundColor = "#4e6218";
        }
        else if (regel3 <0.6)
        {
            newsitem2.style.backgroundColor = "#fd8877";
        }
        else if (regel3 <0.75)
        {
            newsitem2.style.backgroundColor = "#34eeaf";
        }
        else if (regel3 >0.75)
        {
            newsitem2.style.backgroundColor = "#219092";
        }
    }
}

let app = new App();
app.runApplication();





//tags van html bestand naar js halen:
    //let (variable naam) = document.getElementById("tag naam van html bestand");
    //console.log(variable naam van hierboven);
//document.getElementById kan ook document.getElementClassName zijn als je als tag class gebruikt om meerdere HTML taggs te krijgen in een [array]