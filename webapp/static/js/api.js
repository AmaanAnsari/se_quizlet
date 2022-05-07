
window.onload = function() {
    //yourFunction(param1, param2);
  };

function next_question() {
    var d = document.getElementById("questionPane");
    console.log(d)
    
    d.setAttribute("src", "../js/quiz04.js");
    location.reload()
}

function send_post() {
    url = "/user/login"
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload  = function() {
        var jsonResponse = JSON.parse(xhr.responseText);
        console.log(jsonResponse)
     };
    xhr.send(JSON.stringify({
        user_name: "Mondbaum",
        user_password: "pass"
    }));
}

function send_post_with_this(pBtn) {
    url_name = pBtn.getAttribute("data-url");
    console.log(url_name)
}

function post_check_code() {
    user_id = "none";
    user_code = document.getElementById("user-code").value;
    console.log("User entered: " +  user_code);
    language = document.getElementById("language").value;
    url = "/user-check-syntax/" + language
    console.log("User choose: " + url)
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload  = function() {
        var jsonResponse = JSON.parse(xhr.responseText);
        responseView = document.getElementById("response");
        if (jsonResponse["successful"] == true) {
            responseView.value = "Congrats your code executs smoothly. Press submit to check whether it passes the test cases.";
        }
        else {
            responseView.value = jsonResponse["error_message"];
        }
     };
    xhr.send(JSON.stringify({
        user_id : user_id,
        user_code : user_code
    }));
}

function post_run_code() {
    url = "/user/login"
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload  = function() {
        var jsonResponse = JSON.parse(xhr.responseText);
        console.log(jsonResponse)
     };
    xhr.send(JSON.stringify({
        user_name: "Mondbaum",
        user_password: "pass"
    }));
}