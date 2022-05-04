Vue.component('quiz-pane', {
template: `
  <div class="container-fluid">
    <div class="rows">
    <submit-button></submit-button>
    <run-button></run-button>
    <language-selection></language-selection>
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



// Vue.component('run-or-submit', {
// template: `
//     <div class="top-row"
//
// 	<div class="top">
//
// 	<run-button></run-button>
// 	<submit-button></submit-button>
// 	</div>
// 	</div>
// `})



Vue.component('run-button', {
template: `
    <div class="top-row"

        <button type="button" class="btn btn-outline-success">Run Code</button>
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

// Vue.component('question-description', {
// template: `
// <div>
//     <p><strong>Problem Description:</strong></p>
//     <p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is palindrome integer.</p>
//
//     <p>An integer is a <strong>palindrome</strong> when it reads the same backward as forward.</p>
//
//     <ul>
//         <li>For example, <code>121</code> is a palindrome while <code>123</code> is not.</li>
//     </ul>
// </div>
// `})

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

    <p>Given <code>n</code>, return the <code>n<sup>th</sup></code> number in the sequence</p>

</div>
`})




// Vue.component('question-examples', {
// template: `
// <div>
//     <p>&nbsp;</p>
//     <p><strong>Example 1:</strong></p>
//
//     <pre><strong>Input:</strong> x = 121
//     <strong>Output:</strong> true
//     <strong>Explanation:</strong> 121 reads as 121 from left to right and from right to left.
//     </pre>
//
//     <p><strong>Example 2:</strong></p>
//
//     <pre><strong>Input:</strong> x = -121
//     <strong>Output:</strong> false
//     <strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
//     </pre>
//
//     <p><strong>Example 3:</strong></p>
//
//     <pre><strong>Input:</strong> x = 10
//     <strong>Output:</strong> false
//     <strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.
//     </pre>
// </div>
// `})


Vue.component('question-examples', {
template: `
<div>
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>

    <pre><strong>Input:</strong> n = 4
    <strong>Output:</strong> 3
    <strong>Explanation:</strong>

    The Fibonacci sequence to <strong>5</strong> is
    <strong>fs = [0, 1, 1, 2, 3]</strong>, with zero-based indexing,
    <strong>fs[5] = 3 </strong>,
    </pre>

    <p><strong>Example 2:</strong></p>

    <pre><strong>Input:</strong> n = 6
    <strong>Output:</strong> 8
    <strong>Explanation:</strong>

    The Fibonacci sequence to <strong>5</strong> is
    <strong>fs = [0, 1, 1, 2, 3, 5, 8]</strong>, with zero-based indexing,
    <strong>fs[5] = 5 </strong>,
    </pre>

</div>
`})

// Vue.component('question-constraints', {
// template: `
// <div>
//     <p>&nbsp;</p>
//     <p><strong>Constraints:</strong></p>
//
//     <ul>
//         <li><code>-2<sup>31</sup>&nbsp;&lt;= x &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
//     </ul>
// </div>
// `})

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
