
function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}


function superMooieglobalfuntion()
{
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");

}



class App
{
    runApplication()
    {
        console.log("hello world!");
        superMooieglobalfuntion();
    }
}


superMooieglobalfuntion();
superMooieglobalfuntion();
argumentsAreHandy("Super Shout Out");
argumentsAreHandy("Super Shout Out");
argumentsAreHandy("hou het netjes!");

let app = new App();
app.runApplication();