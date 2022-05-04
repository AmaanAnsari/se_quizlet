Vue.component('quiz-pane', {
template: `
  <div class="container-fluid">
    <div class="row">
	<run-or-submit></run-or-submit>
        <language-selection></language-selection>
        <div></div>
        <span class="placeholder col-12 bg-light"></span>

    </div>
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

Vue.component('run-or-submit', {
template: `
        <div class="col-md-4">
	<div class="row">
	<run-button></run-button>
	<submit-button></submit-button>
	</div>
	</div>
`})

Vue.component('submit-button', {
template: `
	<div class="col-md-6">
	<button type="button" class="btn btn-success">Submit Code</button>
	</div>
`})

Vue.component('run-button', {
template: `
        <div class="col-md-6">
        <button type="button" class="btn btn-outline-success">Run Code</button>
	</div>
`})

Vue.component('language-selection', {
template: `
    <div class="col-md-5">
    <div class="container-fluid pb-3">
        <div class="row">
            <div class="col-md-6"></div>
            <div class="dropdown col-md-6">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Select Programming Language
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Python3</a></li>
                <li><a class="dropdown-item" href="#">Java</a></li>
                <li><a class="dropdown-item" href="#">JavaScript</a></li>
                <li><a class="dropdown-item" href="#">Go</a></li>
                <li><a class="dropdown-item" href="#">C++</a></li>
                <li><a class="dropdown-item" href="#">Swift</a></li>
              </ul>
            </div>
        </div>
    </div>
    </div>
`})

Vue.component('question', {
template: `
	<div>
	<question-description></question-description>
	<question-examples></question-examples>
	<question-constraints></question-constraints>
	<question-follow-ups></question-follow-ups>
	</div>
`
})

Vue.component('question-description', {
template: `
<div>
    <p><strong>Problem Description:</strong></p>
    <p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is palindrome integer.</p>

    <p>An integer is a <strong>palindrome</strong> when it reads the same backward as forward.</p>

    <ul>
        <li>For example, <code>121</code> is a palindrome while <code>123</code> is not.</li>
    </ul>
</div>
`})

Vue.component('question-examples', {
template: `
<div>
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>

    <pre><strong>Input:</strong> x = 121
    <strong>Output:</strong> true
    <strong>Explanation:</strong> 121 reads as 121 from left to right and from right to left.
    </pre>

    <p><strong>Example 2:</strong></p>

    <pre><strong>Input:</strong> x = -121
    <strong>Output:</strong> false
    <strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
    </pre>

    <p><strong>Example 3:</strong></p>

    <pre><strong>Input:</strong> x = 10
    <strong>Output:</strong> false
    <strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.
    </pre>
</div>
`})

Vue.component('question-constraints', {
template: `
<div>
    <p>&nbsp;</p>
    <p><strong>Constraints:</strong></p>

    <ul>
        <li><code>-2<sup>31</sup>&nbsp;&lt;= x &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
    </ul>
</div>
`})

Vue.component('question-follow-ups', {
template: `
    <div>
    <p>&nbsp;</p>
    <strong>Follow up:</strong> Could you solve it without converting the integer to a string?
    </div>
`
})
