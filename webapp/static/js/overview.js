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
            console.log("Scores" + jsonResponse)

            
            for (let i = 1; i < 6; i++) {
                // console.log(i)
                obj = document.getElementById("entry-" + i);
                // console.log(obj)
                objTxt = obj.innerHTML;
                console.log(objTxt)
                console.log(jsonResponse["scores"][i])
                if(jsonResponse["scores"][i] == -1) {
                    obj.innerHTML = objTxt + " (tried, but failed)";
                }
                else if(jsonResponse["scores"][i] != 0) {
                    obj.innerHTML = objTxt + " (done, " + (jsonResponse["scores"][i]*100) + "%)"; 
                    
                }
            }
           
        };
        xhr.send();
    }
    else {
        tmpContent = document.getElementById("overview_header").innerHTML
        document.getElementById("overview_header").innerHTML = tmpContent + " (not logged in)"
    }
}