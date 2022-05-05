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
        <strong>The Fibonacci Sequence</strong>
    </p>
    <p>The Fibonacci sequence appears in nature all around us, in the arrangement of seeds in a sunflower and the spiral of a nautilus for example. </p>

    <p>
        The Fibonacci sequence begins with
        <code>fibonacci(0) = 0</code>
        and
        <code>fibonacci(1) = 1</code>
        as its first and second terms. After these first two elements, each subsequent element is equal to the sum of the previous two elements.
    </p>
    <p>Programmatically:</p>
    <ul>
        <li>
            <code>fibonacci(0) = 0</code>
        </li>
        <li>
            <code>fibonacci(1) = 1</code>
        </li>
        <li>
            <code>fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)</code>
        </li>
    </ul>

    <p>Given <strong>n</strong>, return the <strong>n<sup>th</sup></strong> number in the sequence</p>

</div>
`})


Vue.component('question-examples', {
template: `
<div>
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>

    <p>
    <pre><strong>Input:</strong>
    4</pre></p>

    <p>
    <pre><strong>Output:</strong>
    3</pre></p>

    <p>
    <pre><strong>Explanation:</strong>
    The Fibonacci sequence to <strong>4</strong> is <strong>fs = [0, 1, 1, 2, 3]</strong>, with zero-based indexing,
    <strong>fs[4] = 3</strong>.
    </pre></p>

    <p><strong>Example 2:</strong></p>

    <p>
    <pre><strong>Input:</strong>
    6</pre></p>

    <p>
    <pre><strong>Output:</strong>
    8</pre></p>

    <p>
    <pre><strong>Explanation:</strong>
    The Fibonacci sequence to <strong>6</strong> is <strong>fs = [0, 1, 1, 2, 3, 5, 8]</strong>, with zero-based indexing,
    <strong>fs[6] = 8</strong>.
    </pre></p>

</div>
`})


Vue.component('question-constraints', {
template: `
<div>
    <p></p>
    <p><strong>Constraints:</strong></p>

    <ul>
        <li>0 < n <= 30</li>
    </ul>
</div>
`})
