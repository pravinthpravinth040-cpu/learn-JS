//If statements

let testScore = 65;
let grade;
let collegeStudent = false;

if (testScore>=90) {
    grade = `A`
}else if (testScore>=80){
    grade =`B`
}else if (testScore>=70){
    grade =`C`
}else if (testScore>=60){
    grade =`D`
}
 else{
    if (collegeStudent) {
        grade =`RA`
    }else{
        grade = `F`
    }
    grade = `F`
 }   
console.log(grade);