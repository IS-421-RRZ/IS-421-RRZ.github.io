function checkForm(form) {


//roberti
 var goodColor = "#66cc66";
 var badColor = "#ff6666";

    // checks to make sure no fields are empty
    if (form.firstname.value == "" || form.lastname.value == "" || form.username.value == "" || form.password.value == ""
        || form.passwordconfirm.value == "" || form.email.value == "" || form.emailcheck.value == "") {
        alert("Error: One of the fields is empty! Do not leave any fields empty!");
        return false;
    }

    // checks to make sure passwords match
    
 if(password.value == passwordconfirm.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        passwordconfirm.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!"
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        passwordconfirm.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
    // checks to make sure emails match
    if (form.email.value != form.emailcheck.value) {
        alert("Error: Emails do not match!");
        form.email.focus();
        return false;
    }

    // regular expressions needed
    var name = /^[A-z]+$/;
    var pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var email = /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    // validate firstname, lastname, and username
    if (!name.test(form.firstname.value) || !name.test(form.lastname.value) || !name.test(form.username.value)) {
        alert("Error: Firstname, lastname, username contains invalid characters!");
        return false;
    }

    // validate password
    if (!pass.test(form.password.value)) {
        alert("Error: Password not strong enough");
        return false;
    }

    // validate email
    if (!email.test(form.email.value)) {
        alert("Error: mail not valid");
        return false;
    }

    // all tests passed, submit form
    return alert('successful submit');
}
