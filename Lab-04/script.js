window.onload = () => {
  document.getElementById("Submit").disabled = true;
  document.getElementById("Reset").disabled = true;

  const form = document.getElementById("form");
  const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const regExAddr = /^[A-Za-z0-9'\.\-\s\,]/;
  const regExEmail =
    /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(northeastern)\.edu$/;
  const regExPhone = /^\d{3}\d{3}\d{4}$/;
  const regExAptNo = /^\d+$/;

  const display = (elementName, isInValid) => {
    if (isInValid) {
      // You cant access non form element like below error field using name
      // Hence use the rudimentary way - getElementById or other
      document.getElementById(`error_${elementName}`).style.display = "block";
      document.myForm[elementName].style.border = "2px solid red";
    } else {
      document.getElementById(`error_${elementName}`).style.display = "none";
      document.myForm[elementName].style.border = "";
    }
  };

  let isSalInvalid = true,
  isstateInValid = true,
  iscityInValid = true,
  isNameInValid = true,
  isEmailInValid = true,
  isPhoneNumberInValid = true;
  isAddressInValid = true;
  isAddress2InValid = true;
  isAptnoInValid = true;
  isZipCodeInValid = true;
  isFeedbackClassInValid = true;
  isRefInValid = true;
  iscommentsInValid = true;

  const validate = (event) => {
    var count = 
    console.log("input");
    const { id, value, name } = event.target;

    switch (id) {
      
      case "title":
        titles = document.querySelector('input[name="title"]:checked').value;
        if (!titles) {
          display(name, true);
          isSalInvalid = true;
        } else {
          display(name, false);
          isSalInvalid = false;
        }
        break;
      case "fname":
        if (!value.trim().toLowerCase().match(regExName)) {
          display(name, true);
          isNameInValid = true;
        } else {
          display(name, false);
          isNameInValid = false;
        }
        break;
      case "lname":
        if (!value.trim().toLowerCase().match(regExName)) {
          display(name, true);
          isNameInValid = true;
        } else {
          display(name, false);
          isNameInValid = false;
        }
        break;
      case "email":
        if (!value.trim().toLowerCase().match(regExEmail)) {
          display(name, true);
          isEmailInValid = true;
        } else {
          display(name, false);
          isEmailInValid = false;
        }
        break;
      case "phoneNumber":
        if (!value.trim().match(regExPhone)) {
          display(name, true);
          isPhoneNumberInValid = true;
        } else {
          display(name, false);
          isPhoneNumberInValid = false;
        }
        break;
      case "streetAddrs1":
        if (!value.trim().toLowerCase().match(regExAddr)) {
          display(name, true);
          isAddressInValid = true;
        } else {
          display(name, false);
          isAddressInValid = false;
        }
        break;
      case "streetAddrs2":
        if (!value.trim().toLowerCase().match(regExAddr)) {
          display(name, true);
          isAddress2InValid = true;
        } else {
          display(name, false);
          isAddress2InValid = false;
        }
        break;
      case "aptNum":
        if (!value.trim().match(regExAptNo)) {
          display(name, true);
          isAptnoInValid = true;
        } else {
          display(name, false);
          isAptnoInValid = false;
        }
        break;
      case "zipcode":
        if (!value.trim().match(regExAptNo)) {
          display(name, true);
          isZipCodeInValid = true;
        } else {
          display(name, false);
          isZipCodeInValid = false;
        }
        break;
      case "classFeedback":
        console.log("hahaah");
        var e = document.getElementById("classFeedback");
        var txtdisplay = document.getElementById("classes");
        var strUser = e.options[e.selectedIndex].value;

        var strUser1 = e.options[e.selectedIndex].text;
        if (!strUser) {
          display(name, true);
          isFeedbackClassInValid = true;
        } else {
          display(name, false);
          isFeedbackClassInValid = false;

          if (strUser1 == "INFO 5100") {
            alert("INFO 5100 SELECTED");

            txtdisplay.style.visibility = "visible";
            var cl1 = document.getElementById("classes");
            cl1.innerHTML =
              '<input type="checkbox" name="checkprof" id="checkprof1" value="Prof 1" onclick="onPresscheckbox(this)" style="display: inline;"/>Prof 1';
          }
          if (strUser1 == "INF0 6150") {
            alert("INFO 6150 SELECTED");
            // var txtdisplay = document.getElementById("classes");
            txtdisplay.style.visibility = "visible";
            var cl1 = document.getElementById("classes");
            cl1.innerHTML =
              '<input type="checkbox" name="checkprof" id="checkprof2" value="Prof 2" onclick="onPresscheckbox(this)" style="display: inline;"/>Prof 2';
          }
          if (strUser1 == "INFO 7210") {
            alert("info 7210 SELECTED");
            // var txtdisplay = document.getElementById("classes");
            txtdisplay.style.visibility = "visible";
            var cl1 = document.getElementById("classes");
            cl1.innerHTML =
              '<input type="checkbox" name="checkprof" id="checkprof3" value="Prof 3" onclick="onPresscheckbox(this)" style="display: inline;"/>Prof 3';
          }
          if (strUser1 == "INFO 9999") {
            alert("INFO 9999 SELECTED");
            // var txtdisplay = document.getElementById("classes");
            txtdisplay.style.visibility = "visible";
            var cl1 = document.getElementById("classes");
            cl1.innerHTML =
              '<input type="checkbox" name="checkprof" id="checkprof4" value="Prof 4" onclick="onPresscheckbox(this)" style="display: inline;"/>Prof 4';
          }
          if (strUser1 == "ENCP 6666") {
            alert("ENCP 6666 SELECTED");
            // var txtdisplay = document.getElementById("classes");
            txtdisplay.style.visibility = "visible";
            var cl1 = document.getElementById("classes");
            cl1.innerHTML =
              '<input type="checkbox" name="checkprof" id="checkprof5" value="Prof 5" onclick="onPresscheckbox(this)" style="display: inline;"/>Prof 5';
          }
        }

      break;

      case "sources":
        var srcs = document.querySelector('input[name="sources"]:checked').value;
console.log(srcs);
        if (!srcs) {
          display(name, true);
          isRefInValid = true;
        } else {
          display(name, false);
          isRefInValid = false;
          console.log("hi" + srcs);
        }
        break;
      case "comments":
        if (!value.trim().toLowerCase().match(regExName)) {
          display(name, true);
          iscommentsInValid = true;
        } else {
          display(name, false);
          iscommentsInValid = false;
          document.getElementById("Submit").disabled = false;

        }
        break;
      case "city":
        if (!value.trim().toLowerCase().match(regExName)) {
          display(name, true);
          iscityInValid = true;
        } else {
          display(name, false);
          iscityInValid = false;
        }
        break;

      case "state":
        if (!value.trim().toLowerCase().match(regExName)) {
          display(name, true);
          isstateInValid = true;
        } else {
          display(name, false);
          isstateInValid = false;
        }

        break;
    }

    // document.getElementById("Submit").disabled = false;
    document.getElementById("Reset").disabled = false;
  };

  function createTable() {
    // alert("tablebro");

    var trx = document.querySelector('input[name="checkprof"]:checked').value;
    var sar = document.querySelector('input[name="title"]:checked').value;
    var sources = document.querySelector('input[name="sources"]:checked').value;
    var tblfname = document.getElementById("fname").value;
    var tbllname = document.getElementById("lname").value;
    var tblfullname = tblfname + " " + tbllname;
    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    var list4 = [];
    var list5 = [];
    var list6 = [];
    var list7 = [];
    var list8 = [];
    var list9 = [];
    var list10 = [];
    var list11 = [];
    var list12 = [];
    var list13 = [];
    var list14 = [];
    var list15 = [];


    var n = 1;
    var x = 0;
    const elemsbro = [
      "fname",
      "lname",
      "email",
      "phoneNumber",
      "streetAddrs1",
      "streetAddrs2",
      "aptNum",
      "zipcode",
      "classFeedback",
    ];

    var AddRown = document.getElementById("tbss");
    var NewRow = AddRown.insertRow(n);

    list1[x] = sar;
    list2[x] = tblfullname;
    list3[x] = document.getElementById("email").value;
    list4[x] = document.getElementById("phoneNumber").value;
    list5[x] = document.getElementById("streetAddrs1").value;
    list6[x] = document.getElementById("streetAddrs2").value;
    list7[x] = document.getElementById("aptNum").value;
    // list14[x] = document.getElementById("city").value;
    // list15[x] = document.getElementById("state").value;
    list8[x] = document.getElementById("zipcode").value;
    list9[x] = document.getElementById("classFeedback").value;
    list10[x] = document.getElementById("proftext").value;
    list11[x] = trx;
    list12[x] = sources;
    list13[x] = document.getElementById("comments").value;
    list14[x] = document.getElementById("city").value;
    list15[x] = document.getElementById("state").value;

    var cel0 = NewRow.insertCell(0);
    var cel1 = NewRow.insertCell(1);
    var cel2 = NewRow.insertCell(2);
    var cel3 = NewRow.insertCell(3);
    var cel4 = NewRow.insertCell(4);
    var cel5 = NewRow.insertCell(5);
    var cel6 = NewRow.insertCell(6);
    var cel7 = NewRow.insertCell(7);

    var cel8 = NewRow.insertCell(8);
    var cel9 = NewRow.insertCell(9);
    var cel10 = NewRow.insertCell(10);
    var cel11 = NewRow.insertCell(11);
    var cel12 = NewRow.insertCell(12);
    var cel13 = NewRow.insertCell(13);
    var cel14 = NewRow.insertCell(14);

    cel0.innerHTML = list1[x];
    cel1.innerHTML = list2[x];
    cel2.innerHTML = list3[x];
    cel3.innerHTML = list4[x];
    cel4.innerHTML = list5[x];
    cel5.innerHTML = list6[x];
    cel6.innerHTML = list7[x];
    cel7.innerHTML = list8[x];

    cel8.innerHTML = list14[x];
    cel9.innerHTML = list15[x];
    cel10.innerHTML = list9[x];
    cel11.innerHTML = list10[x];
    cel12.innerHTML = list11[x];
    cel13.innerHTML = list12[x];
    cel14.innerHTML = list13[x];

    n++;
    x++;
  }
  // write a function submitted
  function submitted(e) {
    console.log("submitted loop");
    // To avoid page refresh
    e.preventDefault();
    // && !isEmailInValid && !isPhoneNumberInValid
    if (
      // !isSalInvalid &&
      !isNameInValid &&
      !isEmailInValid &&
      !isPhoneNumberInValid &&
      !isAddressInValid &&
      !isAptnoInValid &&
      !isZipCodeInValid &&
      // !isFeedbackClassInValid &&
      // //    !isRefInValid &&
      !iscommentsInValid
    ) {
      alert("Data entered successfully");
      // document.getElementById("Submit").disabled = false;

      createTable();
      console.log(myForm);
      document.getElementById("myForm").reset();
      document.getElementById("container2").style.visibility = "visible";
      document.getElementById("Submit").disabled = true;
      document.getElementById("Reset").disabled = true;
    } else {
      alert("Please enter all the details");
      if (!isEmailInValid) {
        document.getElementById("emailId").focus();
      }
    }
  }

  function resetted(e) {
    document.getElementById("myForm").reset();
    var txtdisplay = document.getElementById("classes");
    var txtfield = document.getElementById("thetextfield");

    txtdisplay.style.visibility = "hidden";
    txtfield.style.visibility = "hidden";
  }
  // Event Delegation
  // https://javascript.info/event-delegation
  document.myForm.addEventListener("input", validate);
  document.myForm.addEventListener("submit", submitted);
  document.myForm.addEventListener("reset", resetted);
};

function onPresscheckbox(checkbox) {
  console.log("insite checkbox");
  var text = document.getElementById("thetextfield");
  if (checkbox.checked == true) {
    text.style.visibility = "visible";
  } else {
    text.style.visibility = "hidden";
  }
}

