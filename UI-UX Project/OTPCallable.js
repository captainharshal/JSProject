/*  Function to Generate OTP */
function GenerateOTP() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    document.getElementById("txtOTP").value = OTP
}

/* Validating OTP Function */
function ValidOTP() {
    var str1 = removeSpaces(document.getElementById('txtOTP').value);
    var str2 = removeSpaces(document.getElementById('txtCompare').value);

    if (str2 == "") { return 0 }
    else if (str1 == str2) { return 1 }
    else { return 2 }
}

/* Remove spaces from OTP */
function removeSpaces(string) {
    return string.split(' ').join('');
}

/* Refresh One Time Password */
function Refreshbtn() {
    setup = 0;
    GenerateOTP();
    countdown();
    document.getElementById("txtCompare").value = '';
    document.getElementById("btnrefresh").disabled = true;
}

/* Compare One Time Password */
function Checkbtn() {
    var returnValue = ValidOTP();
    if (returnValue == 0) {
        window.alert('Field Should Not Be Empty...');
    }
    else if (returnValue == 1) {
        window.alert('OTP Match Successfully...');
        setup = 1
        mins = -1;
        secs = mins * 60;
        minutes.value = '';
        seconds.value = '';
        document.getElementById("txtOTP").value = ''
        document.getElementById("txtCompare").value = '';
        document.getElementById("btnrefresh").disabled = false;
    }
    else {
        window.alert('OTP Mismatch, Please Re-Enter OTP...');
        document.getElementById("txtCompare").value = '';
    }
}


//set minutes
var mins = 1;

//calculate the seconds
var secs = mins * 60;

//set initial value
var setup = 0;

//countdown function is evoked when page is loaded
function countdown() {
    setTimeout('Decrement()', 60);
}

//Decrement function decrement the value.
function Decrement() {
    if (document.getElementById) {
        var minutes = document.getElementById("minutes");
        var seconds = document.getElementById("seconds");

        //if less than a minute remaining
        //Display only seconds value.
        if (seconds < 59) {
            seconds.value = secs;
        }

        //Display both minutes and seconds
        //getminutes and getseconds is used to
        //get minutes and seconds
        else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }
        //when less than a minute remaining
        //colour of the minutes and seconds
        //changes to red
        if (mins < 1) {
            minutes.style.color = "red";
            seconds.style.color = "red";
        }
        //if seconds becomes zero,
        //then page alert time up
        if (mins < 0) {
            if (setup == 0) {
                alert('Time Out');
                mins = 1;
                secs = mins * 60;
                minutes.value = '';
                seconds.value = '';
                document.getElementById("txtOTP").value = '';
                document.getElementById("txtCompare").value = '';
                document.getElementById("btnrefresh").disabled = false;
                document.getElementById("btnrefresh").focus();
            }
            else if (setup == 1) {
                mins = 1;
                secs = mins * 60;
                minutes.value = '';
                seconds.value = '';
                document.getElementById("txtOTP").value = '';
                document.getElementById("btnrefresh").disabled = false;

            }
        }
        //if seconds > 0 then seconds is decremented
        else {
            secs--;
            setTimeout('Decrement()', 1000);
        }
    }
}

function getminutes() {
    //minutes is seconds divided by 60, rounded down
    mins = Math.floor(secs / 60);
    return mins;
}

function getseconds() {
    //take minutes remaining (as seconds) away
    //from total seconds remaining
    return secs - Math.round(mins * 60);
}