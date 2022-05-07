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
