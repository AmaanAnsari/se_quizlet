
window.onload = function() {
    //yourFunction(param1, param2);
    obj = document.getElementById("userString");
    console.log(obj)
    if(obj && getCookie("quizletIsAuthenticated")) {
        objText = "User " + getCookie("quizletIsAuthenticated") + " ist aktuell angemeldet";
        obj.innerHTML = objText
    }
    else {
        objText = "kein User ist aktuell angemeldet"
        obj.innerHTML = objText
    }
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
    user_id = "invalid";
    user_code = document.getElementById("user-code").value;
    console.log("User entered: " +  user_code);
    language = document.getElementById("language").value;
    url = "/user-check-syntax/" + language
    console.log("User choose: " + url)

    responseView = document.getElementById("response");
    if (language == "invalid") responseView.value = "You forgot to choose your programming language"

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



function post_test_code() {
    user_id = getCookie("quizletIsAuthenticated");
    console.log("user: "+  user_id)
    if (!user_id) user_id = "invalid"
    user_code = document.getElementById("user-code").value;
    console.log("User entered: " +  user_code);
    language = document.getElementById("language").value;
    url = "/user-execute-code/" + language
    console.log("User choose: " + url)
    riddle_id = document.getElementById("riddle-headline").getAttribute("data-riddle-id")

    responseView = document.getElementById("response");
    if (language == "invalid") responseView.value = "You forgot to choose your programming language"

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload  = function() {
        var jsonResponse = JSON.parse(xhr.responseText);
        submitView = document.getElementById("submitResponse")
        submitView.value = jsonResponse["result"]
     };
    xhr.send(JSON.stringify({
        user_id : user_id,
        user_code : user_code,
        riddle_id : riddle_id
    }));
}

function post_user_db(pBtn) {
    console.log("ausgeführt")
    
    user_name = document.getElementById("input_email").value;
    console.log("User entered: " +  user_name);
    user_password = document.getElementById("input_password").value;
    console.log("User choose: " + user_password)

    url_end = pBtn.getAttribute("data-url")
    url = "http://" + window.location.hostname + ":7998" + url_end
    console.log("url: " + url)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload  = function() {
        var jsonResponse = JSON.parse(xhr.responseText);
        console.log("Authenticaten was: " + jsonResponse)
        if (jsonResponse == "false") {
            document.getElementById("output-field").innerHTML  = "Wrong Credentials, try again!"
        }
        else{
            // document.cookie = "quizletIsAuthenticated=" + user_name + "; SameSite=None"
            document.getElementById("output-field").innerHTML  = "Success, you'll be redirected!"
            setCookie("quizletIsAuthenticated", user_name, 1)
            console.log(getCookie("quizletIsAuthenticated"))
            window.location.replace("../pages/quiz.html")
        }
        
        

     };
    xhr.send(JSON.stringify({
        user_name : user_name,
        user_password : user_password
    }));
}

function post_signup(pBtn) {
    console.log("ausgeführt")
    
    user_name = document.getElementById("input_email").value;
    console.log("User entered: " +  user_name);
    user_password = document.getElementById("input_password").value;
    console.log("User choose: " + user_password)

    url_end = pBtn.getAttribute("data-url")
    url = "http://" + window.location.hostname + ":7998" + url_end
    console.log("url: " + url)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload  = function() {

        console.log(xhr.responseText)

        if (xhr.status == 200) {
            document.getElementById("output-field").innerHTML  = "Thanks for signing up. You'll be redirected to login"
            setTimeout(() => {
                window.location.replace("../pages/login-page.html")
             }, 3000)
            
        }
        else{
            var jsonResponse = JSON.parse(xhr.responseText);
            document.getElementById("output-field").innerHTML  = jsonResponse["error"]
        }
        
     };
    xhr.send(JSON.stringify({
        user_name : user_name,
        user_password : user_password
    }));
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}