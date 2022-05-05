function next_question() {
    var d = document.getElementById("questionPane");
    console.log(d)
    
    d.setAttribute("src", "../js/quiz04.js");
    location.reload()
}