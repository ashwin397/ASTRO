let username;
let password;
let email;

document.getElementById("submit1").onclick = function(){
    username = document.getElementById("name").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    feedback = document.getElementById("feedback").value;
    
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    localStorage.setItem('feed', feedback);
    localStorage.setItem('userName', username);
    window.alert("you are signed in");
    console.log("user signed in");
    document.getElementById("h3").textContent = "Welcome back " + username;  
}


window.onload = function() {
let storedName = localStorage.getItem('userName');
if (storedName) {
document.getElementById('h3').textContent = "Welcome back " + storedName;
}
};

document.getElementById('logout').onclick = function(){
    localStorage.removeItem('userName');
    localStorage.removeItem('feed');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
}

document.getElementById('infor').onclick = function(){
    let storedName = localStorage.getItem('userName');
    let storedpass = localStorage.getItem('password');
    let storedfeed = localStorage.getItem('feed');
    let storedemail = localStorage.getItem('email');
    pass = window.prompt("enter password");
    if (pass == storedpass) {
        window.alert("name:" + storedName);
        window.alert("password:" + storedpass);
        window.alert("feedback:" + storedfeed);
        window.alert("email:" + storedemail);
    }
}