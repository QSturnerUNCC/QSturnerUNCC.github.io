let userName = prompt("Hello! Enter your name below:", "Type your name here");
let userStatus = prompt("How are you doing today?", "Type here");

const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const companyName = "Sturner Studios";

function formatTime() {
    var hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    var am_pm = d.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    var seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    time = hours + ":" + minutes + ":" + seconds + " " + am_pm;

    return time;
}

function createAccount() {
    let email = prompt("Enter your email below:", "Type here");
    let password = prompt("Enter a password:", "Type here");
    let encryptedPassword = "";

    for (let i = 0; i < password.length - 1; i++) {
        encryptedPassword += "*";
    }

    document.getElementById("displayAcc").innerHTML = "Account creation successful! <br /><br />Email: " + email + "<br />Password: " + encryptedPassword;
}

function songRecommendation() {
    const songLibrary = {
        rap: ["Still Trappin\' - Lil Durk & King Von", "Status - NAV (feat. Lil Uzi Vert)", "PAID MY DUES - NF", "Dior - Pop Smoke", "Numb Numb Juice - Schoolboy Q"],
        rock: ["I Will Not Bow - Breaking Benjamin", "Killing In the Name - Rage Against the Machine", "No One Like You - Scorpions", "Iron Man - Black Sabbath", "Symphony of Destruction - Megadeth"],
        rnb: ["Blinding Lights - The Weeknd", "Overtime - Bryson Tiller", "High For This - The Weeknd", "SLOW DANCING IN THE DARK - Joji", "The Zone (feat. Drake) - The Weeknd", "No Guidance (feat. Drake) - Chris Brown"],
        pop: ["dropout - brakence", "MONTERO (Call Me By Your Name) - Lil Nas X", "Don't Go - Skrillex, Justin Bieber & Don Toliver", "off the table - Ariana Grande & The Weeknd", "Don\'t Start Now - Dua Lipa"]
    };

    let userGenre = prompt("What genre of music would you like to be recommended? (Choices: rap, rock, rnb, pop):", "Type here");

    userGenre = userGenre.toLocaleLowerCase(userGenre);
    var randomNum = null;
    let songName = undefined;

    if (userGenre === "rap") {
        randomNum = Math.floor(Math.random() * ((songLibrary.rap.length - 1)+ 1));
        songName = songLibrary.rap[randomNum];
        document.getElementById("displaySong").innerHTML = "Check out " + songName + "!";
    } else if (userGenre === "rock") {
        randomNum = Math.floor(Math.random() * ((songLibrary.rock.length - 1) + 1));
        songName = songLibrary.rock[randomNum];
        document.getElementById("displaySong").innerHTML = "We think you\'ll enjoy " + songName + "!";
    } else if (userGenre === "rnb") {
        randomNum = Math.floor(Math.random() * ((songLibrary.rnb.length - 1) + 1));
        songName = songLibrary.rnb[randomNum];
        document.getElementById("displaySong").innerHTML = "Maybe you'll like " + songName + "!";
    } else {
        randomNum = Math.floor(Math.random() * ((songLibrary.pop.length - 1) + 1));
        songName = songLibrary.pop[randomNum];
        document.getElementById("displaySong").innerHTML = "How about " + songName + "?";
    }
}

function generateInsult() {
    const insults = ["You are more disappointing than an unsalted pretzel!", "Hold still. I'm trying to imagine you with a personality.", 
    "Your face makes onions cry!", "Don't be ashamed of who you are, that's your parents' job.", "I thought of you today. It reminded me to take out the trash.", 
    "OH MY GOD! IT SPEAKS!"];

    let randomNum = Math.floor(Math.random() * (5 + 1));

    document.getElementById("displayInsult").innerHTML = insults[randomNum];
}

function calculateSquareRoot() {
    let userNum = prompt("Enter the number you would like to take the square root of:")
    let squareRoot = Math.sqrt(userNum);

    document.getElementById("displaySquareRoot").innerHTML = "The square root of " + userNum + " is: " + squareRoot;
}

function calculateMPG() {
    let miles = prompt("Enter the number of miles driven:");
    miles = parseFloat(miles);
    let gallons = prompt("Enter the number of gallons used:");
    gallons = parseFloat(gallons);
    let mpg = miles / gallons;
    mpg = parseInt(mpg);

    document.getElementById("displayMPG").innerHTML = "Miles per Gallon = " + mpg;
}