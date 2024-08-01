// var myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
/*
document.querySelector("html").onclick = function() 
{
    alert("please don't click!!");
}
document.querySelector("h1").onclick = function () 
{
    alert("what do you want to do????");
}
*/
var myImage = document.querySelector("img");
myImage.onclick = function () {
    let mysrc = myImage.getAttribute("src")

    if (mysrc == "images/attack_on_grace.jpg")
        myImage.setAttribute("src", "images/my_picture.jpg");
    else
        myImage.setAttribute("src", "images/attack_on_grace.jpg"); 
}
var myButton = document.querySelector("button")
var myHeading = document.querySelector("h1")


function setUserName () {
    let myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Hello, " + myName;

    if(!myName || myName===null) {
        
        setUserName();
    } else {
        let storedName = localStorage.getItem("name");
        myHeading.innerHTML = "Hello, " + storedName;
    }
}
myButton.onclick = function () {
    setUserName();
}