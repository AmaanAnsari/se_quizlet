Vue.component('quiz-pane', {
template: `
  <div class="container-fluid">

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
        <strong id="riddle-headline" data-riddle-id="1">Loops</strong>
    </p>
    <p>
        In this challenge, we're going to use loops to help us do some simple math.
    </p>
    <p>
        Given an integer <strong>N</strong>, print its first <strong>5</strong> multiples. Each multiple <strong>N x i</strong> (where 1 <= i <= 5) should be sperated by commas.
    </p>
</div>
`})


Vue.component('question-examples', {
template: `
<div>
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>

    <p>
    <pre><strong>Input:</strong>
    3</pre></p>

    <p>
    <pre><strong>Output:</strong>
    3, 6, 9, 12, 15
    </pre></p>

    <p><strong>Example 2:</strong></p>

    <p>
    <pre><strong>Input:</strong>
    5</pre></p>

    <p>
    <pre><strong>Output:</strong>
    5, 10, 15, 20, 25
    </pre></p>
</div>
`})


Vue.component('question-constraints', {
template: `
<div>
    <p><strong>Constraints:</strong></p>

    <ul>
        <li>2 <= N <= 20</li>
    </ul>
</div>
`})
