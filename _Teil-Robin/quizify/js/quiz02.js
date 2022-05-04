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

Vue.component('question-view', {
template: `
    <div class="col-md-5">
        <div class="bg-light border rounded-3">
            <question></question>
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

Vue.component('question', {
template: `
	<div>
	<question-description></question-description>
	<question-examples></question-examples>
	<question-constraints></question-constraints>
	</div>
`
})


Vue.component('question-description', {
template: `
<div>
    <p>
        <strong>Nested Loops</strong>
    </p>
    <p>
        Given a string, <strong>S</strong>, of length <strong>N</strong> that is indexed from <strong>0</strong> to <strong>N - 1</strong>, print its even-indexed and odd-indexed characters as <strong>2</strong> space-separated strings on a single line (see the Sample below for more detail).
    </p>
    <p><strong>Input Format</strong></p>
    <p>The first line contains an integer, <strong>T</strong> (the number of test cases).</p>
    <p>Each line <strong>i</strong> of the <strong>T</strong> subsequent lines contain a string, <strong>S</strong>.</p>
</div>
`})


Vue.component('question-examples', {
template: `
<div>
    <p>&nbsp;</p>
    <p><strong>Example:</strong></p>

    <p>
    <pre><strong>Input:</strong>
    2
    Hello
    World</pre></p>

    <p>
    <pre><strong>Output:</strong>
    Hlo el
    Wrd ol
    </p></pre>
</div>
`})


Vue.component('question-constraints', {
template: `
<div>
    <p></p>
    <p><strong>Constraints:</strong></p>

    <ul>
        <li>1 <= T <= 10</li>
        <li>2 <= length of S <= 10000</li>
    </ul>
</div>
`})
