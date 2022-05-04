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
        <strong>Conditional Statements</strong>
    </p>
    <p>
        Given an integer, <strong>n</strong>, perform the following conditional actions:
    </p>
    <ul>
        <li>If <strong>n</strong> is odd, print Weird</li>
        <li>If <strong>n</strong> is even and in the inclusive range of <strong>2</strong> to <strong>5</strong>, print Not Weird</li>
        <li>If <strong>n</strong> is even and in the inclusive range of <strong>6</strong> to <strong>20</strong>, print Weird</li>
        <li>If <strong>n</strong> is even and greater than <strong>20</strong>, print Not Weird</li>
    </ul>
    <p>
        Complete the stub code provided in your editor to print whether or not <strong>n</strong> is weird.
    </p>

    <p><strong>Input Format</strong></p>
    <p>A single line containing a positive integer, <strong>n</strong>.</p>
</div>
`})


Vue.component('question-examples', {
template: `
<div>
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>

    <p>
    <pre><strong>Input:</strong>
    5</pre></p>

    <p>
    <pre><strong>Output:</strong>
    Weird
    </pre></p>

    <p><strong>Example 2:</strong></p>

    <p>
    <pre><strong>Input:</strong>
    18</pre></p>

    <p>
    <pre><strong>Output:</strong>
    Weird
    </pre></p>
</div>
`})


Vue.component('question-constraints', {
template: `
<div>
    <p></p>
    <p><strong>Constraints:</strong></p>

    <ul>
        <li>1 <= n <= 100</li>
    </ul>
</div>
`})
