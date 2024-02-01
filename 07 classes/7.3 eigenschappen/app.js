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
        this.greeting = "Greetings!"
    }
    
    showGreeting()
    {
        console.log("greeting van binnen: " +this.greeting)
    }

}

class Goodbye
{
    constructor()
    {
        this.bye = "bye bye!"
    }
    
    showbye()
    {
        console.log("bye van binnen: " +this.bye)
    }
}

let greet = new Greet();
console.log('greeting van buiten:  ' +greet.greeting)
greet.showGreeting();

let bye = new Goodbye();
console.log('bye van buiten:  ' +bye.bye)
bye.showbye();


let app = new App();
app.runApplication();