class App
{
    runApplication()
    {
        console.log("hello world!");
        let appNaam = 'app naam = google';
        let versienummer = 'versie nummer = 0.95345';
        let versiedatum = new Date();
        let auther = 'auther = christian_haan';
        let copyright = 'copyright = leerlingen and co';
        let distributeur = 'distributeur = leerling haan';
        let darkmode = 'darkmode = false'
        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(auther);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();