var img1 = document.getElementById("img1");
img1.onclick = function() {
var img1 =document.getElementById("img1").getAttribute ("src");
document.getElementById("mainImage").setAttribute("src",img1);
};

var img2 = document.getElementById("img2");
img2.onclick = function() {
var img2 =document.getElementById("img2").getAttribute ("src");
document.getElementById("mainImage").setAttribute("src",img2);
};
var img3 = document.getElementById("img3");
img3.onclick = function() {
var img3 =document.getElementById("img3").getAttribute ("src");
document.getElementById("mainImage").setAttribute("src",img3);
};
var img4 = document.getElementById("img4");
img4.onclick = function() {
var img4 =document.getElementById("img4").getAttribute ("src");
document.getElementById("mainImage").setAttribute("src",img4);
};
var img5 = document.getElementById("img5");
img5.onclick = function() {
var img5 =document.getElementById("img5").getAttribute ("src");
document.getElementById("mainImage").setAttribute("src",img5);
};


//=========================================================


// var mainImage = document.getElementById("mainImage");
// var srcAttributeValue = mainImage.getAttribute ("Id");
// alert(srcAttributeValue)

// var mainImage = document.getElementById("mainImage");
// mainImage.setAttribute ("src","img/img (1).jpg");


//=========================================================


// var homeBtn = document.getElementById ("homeBtn");
// homeBtn.onclick =function (){
// var content = document.getElementById("heading").innerHTML = "Hello World";
// var content = document.getElementById("paragraph").innerHTML = "This is home section";
// homeBtn.style.backgroundColor = "grey";
// alert(content);
// };
// var aboutBtn = document.getElementById ("aboutBtn");
// aboutBtn.onclick =function (){
// var content = document.getElementById("heading").innerHTML = "Hello this is about section";
// aboutBtn.style.backgroundColor="red";
// alert(content);
// };
// var contactBtn = document.getElementById ("contactBtn");
// contactBtn.onclick =function (){
// var content = document.getElementById("heading").innerHTML = "Hey this is contact";
// contactBtn.style.backgroundColor= "green";
// var content = document.getElementById("paragraph").innerHTML = " this is home paragraph";
// alert(content);
// };

//====================================================

// var redBtn = document.getElementById("redBtn");
// redBtn.onclick = function() {
//   var divOne = document.getElementById("divOne");
//   divOne.className = "class-one class-two"
// }

//====================================================

// var redColor = document.getElementById("redBtn");
// redColor.onclick = function () {
//   var divOne = document.getElementById("divOne");
//   divOne.style.backgroundColor = "red";
//   divOne.style.borderRadius = "15px";
// };

// var greenColor = document.getElementById("greenBtn");
// greenColor.onclick = function () {
//   var divOne = document.getElementById("divOne");
//   divOne.style.backgroundColor = "green";
//   divOne.style.borderRadius = "15px";
// };

// var blueColor = document.getElementById("blueBtn");
// blueColor.onclick = function () {
//   var divOne = document.getElementById("divOne");
//   divOne.style.backgroundColor = "blue";
//   divOne.style.borderRadius = "15px";
// };

// var defaultColor = document.getElementById("defaultBtn");
// defaultColor.onclick = function () {
//   var divOne = document.getElementById("divOne");
//   divOne.style.backgroundColor = "grey";
//   divOne.style.borderRadius = "15px";
// };

//============Calculator part==================//

// var btnElement = document.getElementById("btn");
// btnElement.onclick = function () {
// var startNumber = document.getElementById("startingNumber").value;
// var endNumber = document.getElementById("endingNumber").value;
// {}
// var res = " ";
// for (var i=startNumber; i <=endNumber; i++) {
//     res = res + i + ",";
// }

// document.getElementById("result").innerHTML=res;
// };

//-----------------------------------------------------------------------------------------------//
// 1st read variable startNumber + endingNumber; then it go to res variable and declare it .;
// after that {----- for (var i = startingNumber; i <= endingNumber; i++) -----} reads this file;
// then read it {-----   res = res + i + ","; -----} ;
// after that it reads i++ and i is promoted to (1++ = 2),
// then again read endingNumber and move to again res = res + i + ",";
//-----------------------------------------------------------------------------------------------//

//   for (var i=startNumber; i<=endNumber; i++) {
//       document.getElementById("result").innerHTML += i;
//   }

//-----------------------------------------------------------------------------------------------//
// vai i =1, (i <=) = 10, then  it go to result and print 1 after that it's moves like anti clock wise in (i++) and print 2
// again it moves to (i<=) = 10 and check the condition after condition is true then it get into result and again print.
//-----------------------------------------------------------------------------------------------//
