
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