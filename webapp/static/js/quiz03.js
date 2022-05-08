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
        <strong id="riddle-headline" data-riddle-id="3">Conditional Statements</strong>
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
