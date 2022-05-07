function next_question() {
    var d = document.getElementById("questionPane");
    console.log(d)
    
    d.setAttribute("src", "../js/quiz04.js");
    location.reload()
}

function send_post() {
    url = "https://httpbin.org/post"
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload  = function() {
        var jsonResponse = JSON.parse(xhr.responseText);
        console.log(jsonResponse)
     };
    xhr.send(JSON.stringify({
        value: "value"
    }));
}