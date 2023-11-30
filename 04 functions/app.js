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

let app = new App();
app.runApplication();