class App
{
    runApplication()
    {
        console.log("hello world!");
        let cars = ["Saab", "Volvo", "BMW"];
        console.log(cars);

        let array = ["artist1", "artist2", "artist3", "etc"];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
        console.log(i + ": "+element);
        }
        array.push("bob dylan", "prince");
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i +": "+element);
        }
        let indexToRemove = array.indexOf("bob dylan");
        array.splice(indexToRemove,1,"big bad voodoo daddy");
        array.splice(indexToRemove,2,"megadeth");
        
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i +": "+element);
        }
        
        const nummers = [2, 5, 7];
        console.log(nummers);
        for (let i = 0; i < nummers.length; i++) {
            const elements = nummers[i];
            console.log(elements);
        }
    }
}

let app = new App();
app.runApplication();
