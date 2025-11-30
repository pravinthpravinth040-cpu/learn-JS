// for-of loop 

const person = {
    Name: "pravinth",
    Age: 18,
};

for(let key in person){
    console.log(key + ": " + person[key]);
}


let colours = ["red", "green", "blue"];

for(let index in colours){
    console.log(colours[index]);
    
}

for(let colour of colours){
    console.log("colour" + ": " + colour);
}