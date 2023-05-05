function matchPassword() {
}
var pw1 = document.getElementById("pswd1").value; var pw2 = document.getElementById("pswd2").value; if(pw1 == "") {
document.getElementById("message1").innerHTML = "**Fill the password please!";
return false;
//check empty confirm password field
if(pw2 == "") {
}
I
document.getElementById("message2").innerHTML = "**Enter the password please!";
return false;
//minimum password Length validation
if(pw1. Length < 8) {
}
document.getElementById("message1").innerHTML = "**Password Length must be atleast 8 characters";
return false;
//maximum Length of password validation
if(pw1.Length > 15) {
}
document.getElementById("message1").innerHTML = "**Password Length must not exceed 15 characters";
return false;
if(pw1 != pw2) {
document.getElementById("message2").innerHTML = "**Passwords are not same";
return false;
}
//check empty confirm password field if(pw2 == "") {
}
document.getElementById("message2").innerHTML = "**Enter the password please!";
return false;
//minimum password Length validation
if(pw1. Length <8) {
}
7
document.getElementById("message1").innerHTML = "**Password Length must be atleast 8 characters";
return false;
//maximum Length of password validation
if(pw1.Length > 15) (
}
document.getElementById("message1").innerHTML = "**Password Length must not exceed 15 characters";
return false;
if(pw1 = pw2) {
document.getElementById("message2").innerHTML = "**Passwords are not same";
return false;
} else {
alert ("Your password created successfully");
document.write("JavaScript form has been submitted successfully");
}
}
