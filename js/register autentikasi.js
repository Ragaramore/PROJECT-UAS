function submitForm() {
            
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let nama = document.getElementById("nama").value;
    let cek = document.getElementById("cek").value;

    let error_username = document.getElementById("error_username");
    let error_email = document.getElementById("error_email");
    let error_password = document.getElementById("error_password");
    let error_nama = document.getElementById("error_nama");
    let error_cek = document.getElementById("error_cek");
    let btnClear = document.querySelector('button');
    let inputs = document.querySelectorAll('input');



    
    function ValidateEmail() {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.match(validRegex)) {
            // alert("Valid email address!");
            // email.focus();
            return true;

        } else {
            alert("Invalid email address!");
            // email.focus();
            return false;
        }

    }

    if(username == '') {
        error_username.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_username.style.display = 'none';
        }  
    } 
    if(email == '') {
        error_email.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_email.style.display = 'none';
        }
    } 
    if(password == '') {
        error_password.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_password.style.display = 'none';
        }
    }
    if(nama == '') {
        error_nama.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_nama.style.display = 'none';
        }  
    } 
    if(cek == '') {
        error_cek.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_cek.style.display = 'none';
        }  
    }
    btnClear.addEventListener('click', () => {
        inputs.forEach(input =>  input.value = '');
    }); 
    if(username != '' && password != '' && email != '' && !ValidateEmail(email))  {
        form.style.display = 'none';
        success.style.display = 'block';
    }
    

    




    
}
