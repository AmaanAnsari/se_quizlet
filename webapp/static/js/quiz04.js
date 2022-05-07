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
        <strong>Arrays</strong>
    </p>
    <p>
        Given an array, <strong>A</strong>, of <strong>N</strong> integers, print <strong>A</strong>'s elements in reverse order as a single line of space-separated numbers.
    </p>

    <p><strong>Input Format</strong></p>
    <p>The first line contains an integer, <strong>N</strong> (the size of our array).</p>
    <p>The second line contains <strong>N</strong> space-separated integers that describe array <strong>A</strong>'s elements.</p>
</div>

`})


Vue.component('question-examples', {
template: `
<div>
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>

    <p>
    <pre><strong>Input:</strong>
    5
    2 2 3 4 6</pre></p>

    <p>
    <pre><strong>Output:</strong>
    6 4 3 2 2
    </pre></p>
</div>
`})


Vue.component('question-constraints', {
template: `
<div>
    <p></p>
    <p><strong>Constraints:</strong></p>

    <ul>
        <li>1 <= N <= 1000</li>
        <li>1 <= A[i] <= 10000, where A[i] is the <strong>i<sup>th</sup></strong> integer in the array.</li>
    </ul>
</div>
`})
