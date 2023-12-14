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
        console.log(element);
        }

        const nummers = ["2", "5", "7"];
        for (let index =  0; index < array.length; index++) {
            const nummers = array[index];
        console.log(nummers);
        }
    }
}

let app = new App();
app.runApplication();
