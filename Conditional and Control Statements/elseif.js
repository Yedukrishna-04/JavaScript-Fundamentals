var studentMarks = 95;

if (studentMarks > 90 && studentMarks <= 100) {
    console.log("Grade A");
}else if (studentMarks > 80 && studentMarks <= 90) {
    console.log("Grade B");
}else if(studentMarks > 70 && studentMarks <= 80){
    console.log("Grade C");
}else if(studentMarks > 60 && studentMarks <= 70){
    console.log("Grade D");
}else{
    console.log("Grade F");
    console.log("You have failed the exam. Please try again.");
}