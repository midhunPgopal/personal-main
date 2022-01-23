// Document is ready
$(document).ready(function () {

    // Validate Username
    $('#usercheck1').hide();
    let usernameError = true;
    $('#name').keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $('#name').val();
        if (usernameValue.length == '') {
            $('#usercheck1').show();
            usernameError = false;
            return false;
        } else if ((usernameValue.length < 3) || (usernameValue.length > 10)) {
            $('#usercheck1').show();
            $('#usercheck1').html("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        } else if(/[^a-zA-Z] + [^a-zA-Z] + $ /.test(usernameValue)) {
            $('#usercheck1').show();
            $('#usercheck1').html("**username can only be letters");
            usernameError = false;
            return false;
        } else {
            $('#usercheck1').hide();
        }
    }

     // Validate Email
    const email = document.getElementById('email');
    email.addEventListener('blur', () => {
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            email.classList.remove('is-invalid');
            emailError = true;
        } else {
            email.classList.add('is-invalid');
            emailError = false;
        }
    })

    // Validate subject
    $('#usercheck2').hide();
    let subjError = true;
    $('#subject').keyup(function () {
        validateSubject();
    });

    function validateSubject() {
        let subjValue = $('#subject').val();
        if (subjValue.length == '') {
            $('#usercheck2').show();
            subjError = false;
            return false;
        } else if ((subjValue.length < 5)) {
            $('#usercheck2').show();
            $('#usercheck2').html("**subject should be more than 5 characters");
            subjError = false;
            return false;
        } else {
            $('#usercheck2').hide();
        }
    }

    // Validate message
    $('#usercheck3').hide();
    let msgError = true;
    $('#message').keyup(function () {
        validateMessage();
    });

    function validateMessage() {
        let msgValue = $('#message').val();
        if (msgValue.length == '') {
            $('#usercheck3').show();
            msgError = false;
            return false;
        } else if ((msgValue.length < 10)) {
            $('#usercheck3').show();
            $('#usercheck3').html("**message should be more than 10 characters");
            msgError = false;
            return false;
        } else {
            $('#usercheck3').hide();
        }
    }


    // Submit button
    $("btn-submit").click( function () {
        validateUsername();
        validateEmail();
        validateSubject();
        validateMessage();
        if ((usernameError == true) &&
            (msgError == true) &&
            (subjError == true) &&
            (emailError == true)) {
                return true;
        } else {
            return false;
        }
    });
});

