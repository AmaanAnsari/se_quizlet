Vue.component('quiz-pane', {
template: `
  <div class="container-fluid">
    <div class="rows">
    <submit-button></submit-button>
    <run-button></run-button>
    <language-selection></language-selection>
    <next-button></next-button>
    </div>
    <span class="placeholder col-12 bg-light"></span>


    <div class="row">
      <question-view></question-view>
      <programming-view></programming-view>
      <execution-view></execution-view>
    </div>
  </div>
`
})



Vue.component('programming-view', {
template: `
        <div class="col-md-4">
            <div class="container bg-light border rounded-3">
                <form-textarea></form-textarea>
            </div>
        </div>

`
})

Vue.component('execution-view', {
template: `
  <div class="col-md-3">
  <div class="bg-light border rounded-3">
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br>

  </div>
  </div>
`
})


Vue.component('language-selection', {
template: `
    <div class="top-row"

    <div class="pb-3">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Select Programming Language
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Python3</a></li>
                <li><a class="dropdown-item" href="#">Java</a></li>
              </ul>
            </div>
        </div>
    </div>
    </div>
`})


Vue.component('next-button', {
template: `
    <div class="top-row"

        <button type="button" class="btn btn-outline-success">Next Question</button>
	</div>
`})


Vue.component('run-button', {
template: `
    <div class="top-row"
    <div class="run-button">
        <button type="button" class="btn btn-outline-success" id="run-btn">Run Code</button>
    </div>
	</div>
`})

Vue.component('submit-button', {
template: `
    <div class="top-row"

	<button type="button" class="btn btn-success">Submit Code</button>
	</div>
`})
