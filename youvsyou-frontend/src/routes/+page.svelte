<script>
    import { isAuthenticated } from "../store";
    import auth from "../auth.service";

    let username = "";
    let password = "";
    let loginForm;

    function loginWithUsernameAndPassword() {
        // form validation with bootstrap: see https://getbootstrap.com/docs/5.3/forms/validation/
        if (loginForm.checkValidity()) {
            console.log("login");
            auth.login(username, password);
        }
        loginForm.classList.add("was-validated");
    }
</script>

<section class="hero is-primary is-bold is-large">
    <div class="hero-body">
        <div class="container">
            <h1 class="title">Welcome to YOUvsYOU</h1>
            <h2 class="subtitle">Empower your fitness journey today!</h2>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div
            class="box"
            style="background: url('/gif/gym_gif.gif') no-repeat center center; background-size: cover;"
        >
            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>Get Started with Challenges!</strong> <br />
                            Join a challenge today and track your progress.
                        </p>
                    </div>
                    <button class="button is-link">Join Now</button>
                </div>
            </article>
        </div>
    </div>
</section>

<footer class="footer">
    <div class="content has-text-centered">
        <p>
            <strong>YOUvsYOU</strong> by
            <a href="https://example.com">YOUR COMPANY</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                >CC BY NC SA 4.0</a
            >.
        </p>
    </div>
</footer>
