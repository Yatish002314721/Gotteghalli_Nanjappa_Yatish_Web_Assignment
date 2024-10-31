$(document).ready(() => {
      $("#uname").on("input", () => {
          validateUName();
          checkValidity();
      });
  
      $("#email").on("input", () => {
          validateEmail();
          checkValidity();
      });
  
      $("#password").on("input", () => {
          validatePassword();
          checkValidity();
      });
  
      $("#cpassword").on("input", () => {
          validateConfirmPassword();
          checkValidity();
      });
  
    let UnameValid = false;
    let emailValid = false;
    let passwordValid = false;
    let confirmPasswordValid = false;
  
    const validateUName = () => {
      var name = $("#uname").val();
      let specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/g;
      if (name === "") {
        showError($("#uname"), $("#uname_error"), "Username cannot be empty");
      } else if (name != "" && name.length < 2) {
        showError(
          $("#uname"),
          $("#uname_error"),
          "Username is too short. Minimum length is 3 characters."
        );
      }
      else if(specialCharRegex.test(name)){
        showError(
          $("#uname"),
          $("#uname_error"),
          "Username cannot have special characters"
        );
      } else if (name.length > 15) {
        showError(
          $("#uname"),
          $("#uname_error"),
          "Username is too long. Maximum length is 15 characters."
        );
      } else {
          localStorage.setItem("name",$("#uname").val());
        showSuccess($("#uname"), $("#uname_error"), "");
        UnameValid = true;
      }
    }
  
    const validateEmail = () => {
      var email = $("#email").val();
      var emailRegex = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(northeastern)\.edu$/;
      var emailTest = emailRegex.test(email);
      if (email === "") {
        showError($("#email"), $("#email_error"), "Email cannot be empty");
      } else if (emailTest === true) {
        var emailSplit = email.split("@");
        var domain = emailSplit[1];
        if (domain != "northeastern.edu") {
          showError($("#email"), $("#email_error"), "Incorrect domain name");
        } else {
          showSuccess($("#email"), $("#email_error"), "");
          emailValid = true;
        }
      } else {
        showError($("#email"), $("#email_error"), "Incorrect email address");
      }
    }
  
    const validatePassword = () => {
      let alphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
      let lowercaseRegex = /[a-z]/g;
      let uppercaseRegex = /[A-Z]/g;
      let specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/g;
      var password = $("#password").val();
      let passwordStrength = $("#passwordStrength");
  
      if (password.length < 8) {
        showError(
          $("#password"),
          $("#pass_error"),
          "Passwords need to be 8 characters minimum"
        );
      } else if (!alphanumeric.test(password)) {
        showError(
          $("#password"),
          $("#pass_error"),
          "Please use letters and numbers"
        );
 
        passwordStrength.addClass("error");
        passwordStrength.html("Weak");
      } else if (password.length >= 8 && alphanumeric.test(password)) {
        if (
          !(
            lowercaseRegex.test(password) &&
            uppercaseRegex.test(password) &&
            specialCharRegex.test(password)
          )
        ) {
          showError(
            $("#password"),
            $("#pass_error"),
            "Please include least 1 uppercase, lowercase letters and one special character."
          );
     
          passwordStrength.removeClass("error").addClass("error");
          passwordStrength.html("Medium");
        } else {
          showSuccess($("#password"), $("#pass_error"), "");
          passwordStrength
            .removeClass("error")
            .addClass("success");
          passwordStrength.html("Strong");
          isPasswordValid = true;
          passwordValid = true;
        }
      }
    }
  
    function validateConfirmPassword(){
      var password = $("#password").val();
      var confirmPassword = $("#cpassword").val();
      console.log("cpass"+confirmPassword)
      if(password === confirmPassword){

          showSuccess($("#cpassword"), $("#cpass_error"), "");
          confirmPasswordValid = true;
      }
      else{
          showError($("#cpassword"),$("#cpass_error"),"Passwords dont match")
      }
  
    }
  
  
    function showSuccess(element, feedbackElement, message) {
      element.removeClass("error_form").addClass("success_form");
      feedbackElement
        .removeClass("error")
        .addClass("success")
        .text(message);
    }
  
    function showError(element, feedbackElement, message) {
      element.removeClass("success_form").addClass("error_form");
      feedbackElement
        .removeClass("success")
        .addClass("error")
        .text(message);
    }
  
    function storeNameInLocalStorage() {
      const name = $("#uname").val();
      localStorage.setItem("name", name);
    }
  
    $("#contact_submit").on("submit", function (event) {
      localStorage.setItem("name",$("#uname").val());
  })
  
  function checkValidity() {
    if (UnameValid && emailValid && passwordValid && confirmPasswordValid) {
      $("#contact_submit").prop("disabled", false);
      $("#contact_submit").click(function(){
        $("#contact")[0].reset();
        window.location.href = "./calc.html";
      })
    } else {
      $("#contact_submit").prop("disabled", true);
    }
  }
  checkValidity();
  
  });
  