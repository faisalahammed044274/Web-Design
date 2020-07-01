// $ (selector).Action()

// $("#btn").click(function () {
//   var firstName = $("#firstName").val();
//   var lastName = $("#lastName").val();
//   var fullName = firstName + " " + lastName;
//   $("#fullName").val(fullName);
// });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// $("#firstName").keyup(function () {
//   var firstName = $("#firstName").val();
//   $("#res1").text(firstName);
// });
// $("#lastName").keyup(function () {
//   var lastName = $("#lastName").val();
//   $("#res2").text(lastName);
// });

// $("#lastName").keyup(function () {
//     var lastName = $("#lastName").val();
//     $("#res2").text(lastName);
//   });

// $("#lastName").blur(function () {
//     var firstName = $("#firstName").val();
//     var lastName = $("#lastName").val();
//     var fullName = firstName + " " +lastName;
//     $("#res3").text(fullName);
//   });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// $("#scrollDiv").scroll(function (){
//   $ ("#h2").css("display", "block").fadeOut(1000);
// });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var firstScrollPosition = 0;

// $("#scrollDiv").scroll(function (){
//   var scrollPosition = $("#scrollDiv").scrollTop();
//   if (scrollPosition > firstScrollPosition) {
//     $("#h2").text("You are Scrolling Down");
//   } else {
//     $("#h2").text("You are Scrolling Up");
//   }
//   firstScrollPosition = scrollPosition;
// });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var scrollDivPosition = $("#scrollDiv").position();

// alert(scrollDivPosition.left);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

$(window).scroll(function () {
  var windowScrollPosition = $(window).scrollTop();
  // $("#p1").text(windowScrollPosition);
  var stickyDiv = $("#stickyDiv").position();
  // $("#p2").text(stickyDiv.top);
  if (windowScrollPosition >= stickyDiv.top) {
    $("#stickyDiv").css({
      position: "fixed",
      top: "5px",
    });
  } else {
    $("#stickyDiv").css({
      position: "relative",
      top: "0px",
    });
  }
});
