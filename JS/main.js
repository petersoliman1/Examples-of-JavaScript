/*Start Login Form*/
function validata(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    if(name.length < 5){
        alert("Please Enter Valid Name")
        return false;
    }
    else if(email.indexOf("@") == -1 || email.length < 6){
        alert("Please Enter Valid Email")
        return false;
    }
    else if(phone.length != 11){
        alert("Please Enter Valid Phone Number")
        return false;
    }
    else if(password.length < 8){
        alert("Please Enter Your Passowrd")
        return false;
    }
    alert("Form Sucessfully");
    return true;
}

const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
/*End Login Form*/


/*Start Background And Welcome*/
function whatName() {
    var yourName = prompt("what is your name ?");

    document.getElementById("name").innerHTML = "Welcom" + " " + yourName;
}
whatName();
/*Start Background And Welcome*/


/*Start Arithmetic transactions*/
//Addition
var x = 5;
var y = 2;
var z = x + y;
document.getElementById("Addition").innerHTML = z;

//Subtraction
var x = 5;
var y = 2;
var z = x - y;
document.getElementById("Subtraction").innerHTML = z;

//Multiplication
var x = 5;
var y = 2;
var z = x * y;
document.getElementById("Multiplication").innerHTML = z;

//Division
var x = 5;
var y = 2;
var z = x / y;
document.getElementById("Division").innerHTML = z;

//Modulus 
var x = 5;
var y = 2;
var z = x % y;
document.getElementById("Modulus").innerHTML = z;

//Exponentiation 
var x = 5;
document.getElementById("Exponentiation").innerHTML = x ** 2;

//Exponentiation 
var x = 5;
x++;
var z = x;
document.getElementById("Increment").innerHTML = z;
/*End Arithmetic transactions*/

/*Start Arithmetic-Mean*/
//Arithmetic-Mean 
var u = 50;
var v = 20;
var w = 100;
var x = 200;
var y = 100;
var z = u + v + w + x + y;
document.getElementById("Arithmetic-Mean").innerHTML = z / 2;
/*End Arithmetic-Mean*/

/*Start CV and personal information*/
document.getElementById("personal").style.display = "block";
function Hide() {
document.getElementById("personal").style.display = "none";
}

document.getElementById("personal").style.display = "none";
function display() {
document.getElementById("personal").style.display = "block";
}
/*End CV and personal information*/

/*Start Array*/
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
document.getElementById("number").innerHTML = numbers[0] +" "+ numbers[2] +" "+ numbers[4] +" "+ numbers[6] +" "+ numbers[8] +" "+ numbers[10] +" "+ numbers[12] +" "+ numbers[14];
/*End Array*/
