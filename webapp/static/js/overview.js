window.onload = function() {
    user_add_history();
  };

 function user_add_history() {
    console.log("ausgeführt")
    
    user_name = getCookie("quizletIsAuthenticated")
    if (user_name) {
        tmpContent = document.getElementById("overview_header").innerHTML
        document.getElementById("overview_header").innerHTML = tmpContent + " - Welcome " + user_name
        url = "http://" + window.location.hostname + ":7998" + "/user/get/scores/" + user_name
        console.log("url: " + url)
        
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload  = function() {
            var jsonResponse = JSON.parse(xhr.responseText);
            console.log("Authenticaten was: " + jsonResponse)
            return
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
    xhr.send();
    }
    else {
        tmpContent = document.getElementById("overview_header").innerHTML
        document.getElementById("overview_header").innerHTML = tmpContent + " (not logged in)"
    }
    
    
    
}