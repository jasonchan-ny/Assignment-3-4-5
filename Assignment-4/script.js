function myFunction() {
    document.getElementById("output1").innerHTML = "I'm right!";
}

function myFunction2() {
    if (document.getElementById("output1").innerHTML = "I'm right!")
        document.body.innerHTML = document.body.innerHTML.replace("I'm right!", "He's lying, I'm right!");
}

function myAlert(msg) {
    alert("I thought I said don't hover over me??");
}

function aForm() {
    let username = document.forms["myForm"]["username"].value;
    let password = document.forms["myForm"]["password"].value;

    if (username.length < 1) {
        document.getElementById('error-username').innerHTML = "!"
    }
    if (password.length < 1) {
        document.getElementById('error-password').innerHTML = "!";
    }
    if (username.length < 1 || password.length < 1) {
        return false;
    }
    if (password != "12345678") {
        alert("C'mon, did you forget your password?");
        return false;
    }
    else{
        alert("Successfully submitted form!");
    }
}
