<script>
    import { goto } from "$app/navigation";
    import auth from "../../auth.service";

    let username = "";
    let password = "";
    let loginForm;

    function loginWithUsernameAndPassword() {
        if (loginForm.checkValidity()) {
            auth.login(username, password);
            goto("/account");
        }
        loginForm.classList.add("was-validated");
    }
</script>

<form
    class="box"
    on:submit|preventDefault={loginWithUsernameAndPassword}
    bind:this={loginForm}
>
    <h1 class="title is-1">Log In</h1>
    <div class="field">
        <label class="label" for="email">E-Mail</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" bind:value={username} required />
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
        </div>
    </div>
    <div class="field">
        <label class="label" for="password">Password</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input" type="password" bind:value={password} required/>
            <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
            </span>
        </div>
    </div>
    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Log In</button>
        </div>
    </div>
</form>
