Vue.component('navbar', {
props: ['navid'],
template: `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand" href="../index.html#page-top">Quizify</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="#references">References</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                            <li>{{navid}}</li>
                        </ul>
                    </div>
                </div>
            </nav>
`})

Vue.component('footbar', {
template: `
        <footer class="bg-light py-5">
            <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright &copy; 2021 - Company Name</div></div>
        </footer>
`
})

Vue.component('contact-form', {
template: `
<section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider" />
                        <p class="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!-->
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <!-- Name input-->
                            <form-name></form-name>
                            <!-- Email address input-->
                            <form-email></form-email>
                            <!-- Phone number input-->
                            <form-phone></form-phone>
                            <!-- Message input-->
                            <form-textarea></form-textarea>
                            <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted-->
                            <form-success></form-success>
                            <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form-->
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            <!-- Submit Button-->
                            <div class="d-grid"><button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>+1 (555) 123-4567</div>
                    </div>
                </div>
            </div>
        </section>

`
})

Vue.component('form-name', {
template:
`
<div class="form-floating mb-3">
    <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
    <label for="name">Full name</label>
    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
</div>
`
})

Vue.component('form-email', {
template:
`
<div class="form-floating mb-3">
    <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
    <label for="email">Email address</label>
    <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
    <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
</div>
`
})

Vue.component('form-phone', {
template:
`
<div class="form-floating mb-3">
    <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
    <label for="phone">Phone number</label>
    <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
</div>
`
})

Vue.component('form-textarea', {
template:
`
<div class="form-group">
    <textarea class="form-control" id="message" rows="20" type="text" placeholder="Enter your message here..."></textarea>
</div>
`
})

Vue.component('form-success', {
template:
`
<div class="d-none" id="submitSuccessMessage">
    <div class="text-center mb-3">
        <div class="fw-bolder">Form submission successful!</div>
        To activate this form, sign up at
        <br />
        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
    </div>
</div>
`})

new Vue({
  el: '#app',
//  data: {
//    message: 'Hello Vue.js!'
//  }
})