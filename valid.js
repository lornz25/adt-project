function myfunction(event) {
    event.preventDefault(); // Prevent default form submission
    
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    
    if (username.trim() === "") {
        alert("Please enter your username.");
        return false;
    }
    
    if (password.trim() === "") {
        alert("Please enter your password.");
        return false;
    }
    
    if (username === "2022_cete_gandald@online.htcgsc.edu.ph" && password === "laurence") {
        alert("LOG IN SUCCESSFUL. YOU WILL BE REDIRECTED TO HOMEPAGE");
        window.location.href = "./homepage/home.html";
        return true;
    } else {
        alert("LOG IN FAILED, INVALID USERNAME OR PASSWORD");
        return false;
    }
}
