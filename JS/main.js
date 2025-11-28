// let isRaing = false;
// let isCloudy = false;

// if (isRaing || isCloudy) {
//     console.log("Don't forget to take umbrella!");
    
// } else {
//     console.log("Sky is normal! Enjoy the weather!");
// }

// If hour is between 12 am to 1pm -> Good Morning

let hrs = new Date().getHours();

if (hrs >= 0 && hrs < 13) {
    console.log("Goog Moring");
}
else if (hrs >= 13 && hrs < 17) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}