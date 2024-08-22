const number = 7;
let strCase = " ";
let lineCase = "";

for (i = 0; i < number ; i++) {
    for (j=0 ; j< number ; j++) {
        lineCase += strCase;
       if (strCase == " "){
        strCase = "#";
       } else {
        strCase = " "
       }
    }
    console.log(lineCase);
    lineCase ="";
    if (number % 2 == 0) {
    if (strCase == " ") {
        strCase = "#";
       } else {
        strCase = " "
       }
    }
}