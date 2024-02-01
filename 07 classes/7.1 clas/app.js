class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
    }
}
class Greet
{
    constructor()
    {
        console.log("Greetings!");
    }
}

class Goodbye
{
    constructor()
    {
        console.log("bye bye!");
    }
}

let greet = new Greet();
let bye = new Goodbye();
let app = new App();
app.runApplication();