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
                <form-textarea-code></form-textarea-code>
                <form-textarea-response></form-textarea-response>
                
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
    <form>
      <select id="language" class="dropdown">
        <option value="invalid">Select Programming Language ...</option>
        <option value="python" selected="selected">Python3</option>
        <option value="javascript">JavaScript</option>
      </select>
    </form>
`})


Vue.component('next-button', {
template: `
    <div class="top-row"

        <button type="button" class="btn btn-outline-success" data-url="test.com" onclick="send_post_with_this(this)">Next Question</button>
	</div>
`})


Vue.component('run-button', {
template: `
    <div class="top-row"
    <div class="run-button">
        <button type="button" class="btn btn-outline-success" id="run-btn" onclick="post_check_code();">Run Code</button>
    </div>
	</div>
`})

Vue.component('submit-button', {
template: `
  <div class="top-row"
	  <button type="button" class="btn btn-success" id="submit-btn" onclick="post_check_code();">Submit Code</button>
	</div>
`})

