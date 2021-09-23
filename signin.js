
//function executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var filter = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z]{3})+$/;
    // var filter1 = /^([A-Z0-9_\.\-])+([a-z]{6})+$/;
    var filter1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6}/;

    if(username =='')
    {
        alert("Please ener Username.");
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
    else{
        alert("Login Successfull");
        window.location = "index.html";
    }
}

    function clearFunc(){
        document.getElementById("username").value="";
        document.getElementById("password").value="";
    }

function move(){
    window.location = "account.html";
}


