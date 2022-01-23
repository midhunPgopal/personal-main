// Document is ready
$(document).ready(function () {
	
    // Validate Username
        $('#usercheck').hide();
        let usernameError = true;
        $('#name').keyup(function () {
            validateUsername();
        });
        
        function validateUsername() {
        let usernameValue = $('#name').val();
        if (usernameValue.length == '') {
        $('#name').show();
            usernameError = false;
            return false;
        }
        else if((usernameValue.length < 3)||
                (usernameValue.length > 10)) {
            $('#usercheck').show();
            $('#usercheck').html
    ("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        }
        else {
            $('#usercheck').hide();
        }
        }
    
    // Validate Email
        const email =
            document.getElementById('email');
        email.addEventListener('blur', ()=>{
        let regex =
    /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if(regex.test(s)){
            email.classList.remove(
                    'is-invalid');
            emailError = true;
            }
            else{
                email.classList.add(
                    'is-invalid');
                emailError = false;
            }
        })
        
    // Validate Username
    $('#usercheck').hide();
    let usernameError = true;
    $('#name').keyup(function () {
        validateUsername();
    });
    
    function validateUsername() {
    let usernameValue = $('#name').val();
    if (usernameValue.length == '') {
    $('#name').show();
        usernameError = false;
        return false;
    }
    else if((usernameValue.length < 3)||
            (usernameValue.length > 10)) {
        $('#usercheck').show();
        $('#usercheck').html
("**length of username must be between 3 and 10");
        usernameError = false;
        return false;
    }
    else {
        $('#usercheck').hide();
    }
    }

        // Validate Username
        $('#usercheck').hide();
        let usernameError = true;
        $('#name').keyup(function () {
            validateUsername();
        });
        
        function validateUsername() {
        let usernameValue = $('#name').val();
        if (usernameValue.length == '') {
        $('#name').show();
            usernameError = false;
            return false;
        }
        else if((usernameValue.length < 3)||
                (usernameValue.length > 10)) {
            $('#usercheck').show();
            $('#usercheck').html
    ("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        }
        else {
            $('#usercheck').hide();
        }
        }
        
    // Submit button
        $('#submitbtn').click(function () {
            validateUsername();
            validatePassword();
            validateConfirmPassword();
            validateEmail();
            if ((usernameError == true) &&
                (passwordError == true) &&
                (confirmPasswordError == true) &&
                (emailError == true)) {
                return true;
            } else {
                return false;
            }
        });
    });
    