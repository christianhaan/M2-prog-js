class App{
    runApplication(){
        console.log("Hello World");
       
        let array = document.getElementsByTagName("h1");
        let arrayByClass = document.getElementsByClassName("owen");
        let data = document.getElementsByTagName("h1");
        
        console.log(typeof arrayByClass);

        arrayByClass[0].innerText = "hallo";
        arrayByClass[1].innerText = "revieuws";
        arrayByClass[2].innerText = "commentaar";
        arrayByClass[3].innerText = "chirstian haan";
        arrayByClass[4].innerText = "jan luykenstraat 43";
 
        for (let i = 0; i < data.length; i++) {
            arrayByClass[i].innerText = i +": "+data[i].textContent;
        }
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
        for (let i = 0; i < arrayByClass.length; i++) {
            console.log(arrayByClass[i].innerText);
        }
    }
}
let app = new App();
app.runApplication();