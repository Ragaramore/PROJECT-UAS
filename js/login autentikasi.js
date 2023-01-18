function login() {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;




    if(username == '') {
        error_username.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_username.style.display = 'none';
        }  
    } 
    if(password == '') {
        error_password.style.display = 'block';

        const myTimeout = setTimeout(errorHide, 5000);

        function errorHide() {
            error_password.style.display = 'none';
        }
    } 
    if (username == "cloud" && password == "admin"){
        location.replace("admin.html") 

}
}