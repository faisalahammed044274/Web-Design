$("#red").click(function () {
  $("#red").css({
    color: "red",
    "font-size": "50px",
    "background-color": "yellow",
    "text-align": "center",
  });
});

// var redHeading = document.getElementById("red");
// redHeading.onclick = function() {
//  var content = document.getElementById("red");
//  content.style.color = "red";
// };

//===================================================

function demo() {
  var dateTime = new Date();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var date = dateTime.getDate();
  var month = dateTime.getMonth();
  var year = dateTime.getUTCFullYear();

  document.getElementById("watch").innerHTML =
    hours +
    " : " +
    minutes +
    " : " +
    seconds +
    " <br/> " +
    date +
    "/" +
    month +
    "/" +
    year;
}

setInterval(demo, 1000);

//===================================================

var imageData = [
  "img/img (5).jpg",
  "img/img (2).jpg",
  "img/img (3).jpg",
  "img/img (4).jpg",
];
var index = 0;
function changeImage() {
  var mainImage = document.getElementById("mainImage");
  mainImage.setAttribute("src", imageData[index]);
  index++;
  if (index > imageData.length) {
    index = 0;
  }
}

setInterval(changeImage, 2000);

// var img1 = document.getElementById("img1");
// img1.onclick = function() {
// var img1 =document.getElementById("img1").getAttribute ("src");
// document.getElementById("mainImage").setAttribute("src",img1);
// };

// var img2 = document.getElementById("img2");
// img2.onclick = function() {
// var img2 =document.getElementById("img2").getAttribute ("src");
// document.getElementById("mainImage").setAttribute("src",img2);
// };
// var img3 = document.getElementById("img3");
// img3.onclick = function() {
// var img3 =document.getElementById("img3").getAttribute ("src");
// document.getElementById("mainImage").setAttribute("src",img3);
// };
// var img4 = document.getElementById("img4");
// img4.onclick = function() {
// var img4 =document.getElementById("img4").getAttribute ("src");
// document.getElementById("mainImage").setAttribute("src",img4);
// };
// var img5 = document.getElementById("img5");
// img5.onclick = function() {
// var img5 =document.getElementById("img5").getAttribute ("src");
// document.getElementById("mainImage").setAttribute("src",img5);
// };

//========================================
