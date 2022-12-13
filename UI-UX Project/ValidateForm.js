function validateFrm() {

    var flag;

    if (chkbox1.checked == false && chkbox2.checked == false &&
        chkbox3.checked == false && chkbox4.checked == false) {
        document.getElementById("chk_option_error").style.visibility = "visible";
        flag = false;
    }
    else {
        alert("Form Submitted Successfully...")
        flag = true;
    }

    return flag;
}

function hiddenLbl() {
    document.getElementById("chk_option_error").style.visibility = "hidden";
}

function myFocusin(x) {
    x.style.background = "yellow";
}

function myFocusin1(x) {
    x.type = "date";
    x.style.background = "yellow";
}

function myFocusout(x) {
    x.value = x.value.toUpperCase();
    x.style.background = "whitesmoke";
}

function myFocusout1(x) {
    x.value = x.value.toLowerCase();
    x.style.background = "whitesmoke";
}

function myFocusout2(x) {
    x.style.background = "whitesmoke";
}

function myFocusout3(x) {
    x.type = "text";
    x.style.background = "whitesmoke";
}

function validatePwd() {
    if (pwd.value != rpwd.value) {
        alert("Password Does Not Match...");
        document.getElementById("rpwd").value = "";
        document.getElementById("pwd").focus();
    }
    document.getElementById("rpwd").style.background = "whitesmoke";
}

function SetCalender() {
    var currentDate = new Date();
    var cDate = currentDate.getDate()
    var cMonth = currentDate.getMonth() + 1;
    var cYear = currentDate.getFullYear()

    var maxYear = cYear - 18;
    var minYear = cYear - 100;

    if (cMonth < 10) {
        cMonth = '0' + cMonth.toString();
    }

    if (cDate < 10) {
        cDate = '0' + cDate.toString();
    }

    var maxYear1 = maxYear + '-' + cMonth + '-' + cDate;
    var minYear1 = minYear + '-' + cMonth + '-' + cDate;

    document.getElementById("datefield").setAttribute("max", maxYear1);
    document.getElementById("datefield").setAttribute("min", minYear1);
}