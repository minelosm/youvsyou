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


    <h1>Welcome to YOUvsYOU</h1>
    <img src="/images/youvsyou.webp" />