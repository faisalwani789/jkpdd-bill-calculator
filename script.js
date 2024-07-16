var button = document.getElementById("button");
function darkmode() {
    document.body.style.backgroundColor = "black";

}
// button.addEventListener('click', darkmode);
var bill;
// var units = document.getElementsByClassName("units")[0];



function display() {
   
    alert("the value is" + units2);
    console.log(units2);
}
function calculate() {
    var units = document.getElementById("in");
    var units2 = parseFloat(units.value);
    var Fixed_Charges=40;
    parseFloat(Fixed_Charges);

    // var units = document.getElementsByClassName("units")[0];
    if (units2 <= 200 && units2 >= 0) {
        bill = (units2 * 2.30);
        // return bill;
    }
    else if (units2 > 200 && units2 <= 400) {
        bill = (units2 - 200) * 4 + 460;
        // return bill;
    }
    else {
        bill = (units2 - 400) * 4.37 + 1266;
        // console.log(bill);
        // return bill;
    }
    let location=document.getElementsByClassName("bill")[0];
    location.innerHTML=bill+Fixed_Charges;


}
button = document.getElementById("btn");
button.addEventListener('click', calculate);


// var res = calculate();
// console.log(res);
// console.log(bill);
