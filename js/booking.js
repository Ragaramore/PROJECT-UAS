function submit() {
            
    let username = document.getElementById("nama").value;
    let ruangan = document.getElementById("ruangan").value;
    let jam = document.getElementById("jam").value;
    let kontak = document.getElementById("kontak").value;
    let telepon = document.getElementById("telepon").value;
    let email = document.getElementById("email").value;


    let error_username = document.getElementById("error_nama");
    let error_ruangan = document.getElementById("error_ruangan");
    let error_jam = document.getElementById("error_jam");
    let error_kontak = document.getElementById("error_kontak");
    let error_telepon = document.getElementById("error_telepon");
    let error_email = document.getElementById("error_email");
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
    if(ruangan == '') {
        error_ruangan.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_ruangan.style.display = 'none';
        }
    } 
    if(jam == '') {
        error_jam.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_jam.style.display = 'none';
        }
    }
    if(kontak== '') {
        error_kontak.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_kontak.style.display = 'none';
        }
    }
    if(telepon == '') {
        error_telepon.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_telepon.style.display = 'none';
        }
    }
    if(email == '') {
        error_email.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_email.style.display = 'none';
        }
    }
    if(username != '' && password != '' && email != '' && !ValidateEmail(email))  {
        form.style.display = 'none';
        success.style.display = 'block';

    }
    btnClear.addEventListener('click', () => {
        inputs.forEach(input =>  input.value = '');
    }); 

    




    
}
