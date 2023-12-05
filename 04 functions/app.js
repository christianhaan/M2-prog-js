
function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;
}
let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
heeftEenResultaat();


let x = 9;
let a =3;
let b =4;
let c =89;
let y = (a*(x*x) )+ (b*x) +c;
console.log(y);


function ax2bcWiskunde(x,a,b,c)
{
    let vraag = (a*(x*x) )+ (b*x) +c;
    return vraag;
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);


let u = 9;
let h = 8;
let l = 45;
let logY = Math.log(1) + h * Math.pow(u,2) * Math.random();
console.log(logY);


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