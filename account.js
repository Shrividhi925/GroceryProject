
//function executes on click of login button.
function validate(){
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var filter = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z]{3})+$/;
    var filter1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6}/;



    if(name =='')
    {
        alert("Please enter your name.");
    }
    else if(username =='')
    {
        alert("Please enter Username.");
    }
    else if(password== '')
    {
        alert("Enter the Password");
    }
    else if(!filter.test(username))
    {
        alert("Enter valid email id.");
    }
    else if(password.length < 8 || password.length > 8)
    {
        alert("Password should be minimum and maximum 8 characters");
    }
    else if(!filter1.test(password))
    {
        alert("Invalid Password");
    }
    else if(password !== confirm_password){
        alert("Password doesn't match");
    }
    else{
        alert("Registered Successfully");
        window.location = "index.html";
    }
}

    function clearFunc(){
        document.getElementById("username").value="";
        document.getElementById("password").value="";
    }

    function move(){
        window.location = "signin.html";
    }


