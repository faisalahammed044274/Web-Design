function checkFirstName() {
  var firstName = $("#firstName").val();
  var reg = /^[a-zA-Z -.]{2,10}$/;
  if (reg.test(firstName)) {
    $("#firstNameError").text(" ");
    return true;
  } else {
    $("#firstNameError").text(
      "First name should be 2 to 10 character & please enter your name"
    );
    return false;
  }
}

$("#firstName").keyup(function () {
  checkFirstName();
});

function checkLastName() {
  var lastName = $("#lastName").val();
  var reg = /^[a-zA-Z -.]{2,10}$/;
  if (reg.test(lastName)) {
    $("#lastNameError").text(" ");
    return true;
  } else {
    $("#lastNameError").text(
      "Last name should be 2 to 10 character and please use the name"
    );
    return false;
  }
}

$("#lastName").keyup(function () {
  checkLastName();
});

function checkEmailAddress() {
  var emailAddress = $("#emailAddress").val();
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(emailAddress)) {
    $("#emailAddressError").text(" ");
    return true;
  } else {
    $("#emailAddressError").text("Invalid Email Address");
    return false;
  }
}

$("#emailAddress").keyup(function () {
  checkEmailAddress();
});

function checkPassword() {
  var password = $("#password").val();
  var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  if (reg.test(password)) {
    $("#passwordError").text(" ");
    return true;
  } else {
    $("#passwordError").text(
      "Password must have 1 lowercase & uppercase letter, 1 Number & 1 Special Character"
    );
    return false;
  }
}

$("#password").blur(function () {
  checkPassword();
});
$("#password").keyup(function () {
  $("#passwordError").text(" ");
});

$("#password").click(function () {
  checkPassword();
});

function checkConfirmPassword() {
  var confirmPassword = $("#confirmPassword").val();
  var password = $("#password").val();
  if (password == confirmPassword) {
    $("#confirmPasswordError").text(" ");
    return true;
  } else {
    $("#confirmPasswordError").text("Password doesn't match");
    return false;
  }
}

$("#confirmPassword").blur(function () {
  checkConfirmPassword();
});

$("#confirmPassword").keyup(function () {
  $("#confirmPasswordError").text(" ");
});

$("#confirmPassword").click(function () {
  $("#confirmPasswordError").text("Password & Confirm password should be same");
});

$("#showHide").click(function () {
  var attrValue = $("#password").attr("type");
  if (attrValue == "password") {
    $("#password").attr("type", "text");
  } else {
    $("#password").attr("type", "password");
  }
});

function checkGenderInfo() {
  var genderInfo = $("input[type='radio']:checked").val();
  if (genderInfo == "male" || genderInfo == "female") {
    $("#genderError").text(" ");
    return true;
  } else {
    $("#genderError").text("Please give your gender info");
    return false;
  }
}

function checkDivisionName() {
  var divisionValue = $("#division").val();
  if (divisionValue == " ") {
    $("#divisionError").text("Please give your district info");
    return false;
  } else {
    $("#divisionError").text(" ");
    return true;
  }
}

$("#form").submit(function () {
  if (
    checkFirstName() == true &&
    checkLastName() == true &&
    checkEmailAddress() == true &&
    checkPassword() == true &&
    checkConfirmPassword() == true &&
    checkGenderInfo() == true &&
    checkDivisionName() == true
  ) {
    return true;
  } else {
    return false;
  }
});

$(window).scroll(function () {
  var menuPosition = $("#menu").position();
  var windowScrollPosition = $(window).scrollTop();
  if (windowScrollPosition >= menuPosition.top) {
    $("#menuUl").css({
      position: "fixed",
      top: "0px",
      width: "90%",
    });
  } else {
    $("#menuUl").css({
      position: "relative",
      top: "0px",
    });
  }
});
