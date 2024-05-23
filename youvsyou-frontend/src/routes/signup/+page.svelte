<script>
  import { isAuthenticated } from "../../store";
  import auth from "../../auth.service";

  let email = "";
  let password = "";
  let firstName = "";
  let lastName = "";
  let userName ="";
  let signupForm;
  let userTypes = ["fitnessuser", "fitnesscoach"];
  let selectedUserType = "";
  let picture = "";

  $: if ($isAuthenticated) {
    // reset the input values as soon as the user is registered.
    email = "";
    password = "";
  }

  function signup() {
    // form validation with bootstrap: see https://getbootstrap.com/docs/5.3/forms/validation/
    if (signupForm.checkValidity()) {
      auth.signup(email, password, firstName, lastName, selectedUserType, userName, picture);
    }
    signupForm.classList.add("was-validated");
  }
</script>

<form class="box" on:submit|preventDefault={signup} bind:this={signupForm}>
  <h1 class="title is-1">Sign up as a new User</h1>
  <div class="field">
    <label class="label" for="email">E-Mail</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="email" bind:value={email} required/>
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
    </div>
  </div>
  <div class="field">
    <label class="label" for="username">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" bind:value={userName}/>
      <span class="icon is-small is-left">
        <i class="fas fa-user-tie"></i>
      </span>
    </div>
  </div>
  <div class="field">
    <label class="label" for="profile picture">Profile Picture</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" bind:value={picture} placeholder="https://"/>
      <span class="icon is-small is-left">
        <i class="fas fa-images"></i>
      </span>
    </div>
  </div>
  <div class="field">
    <label class="label" for="firstname">First Name</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" bind:value={firstName}/>
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
    </div>
  </div>
  <div class="field">
    <label class="label" for="lastname">Last Name</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" bind:value={lastName}/>
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
    </div>
  </div>
  <div class="field">
    <label class="label" for="password">Password</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="password" bind:value={password} required/>
      <span class="icon is-small is-left">
        <i class="fas fa-key"></i>
      </span>
    </div>
  </div>
  <div class="field">
    <label class="label" for="usertype">User Type</label>
    <div class="control">
      <div class="select">
        <select bind:value={selectedUserType} required placeholder="Select a usertype">
          {#each userTypes as userType}
            <option value={userType}>{userType}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Sign up</button>
    </div>
  </div>
</form>

<!--
<h1 class="title is-1">Sign up</h1>
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Sign up</div>
        <div class="card-body">
          <form
            on:submit|preventDefault={signup}
            bind:this={signupForm}
            class="needs-validation"
            novalidate
          >
            <div class="mb-3">
              <label for="username" class="form-label">E-Mail</label>
              <input
                bind:value={email}
                type="email"
                class="form-control"
                id="username"
                name="username"
                required
              />
              <div class="invalid-feedback">
                Please provide an e-mail address.
              </div>
            </div>
            <div class="mb-3">
              <label for="first-name" class="form-label">First Name</label>
              <input
                bind:value={firstName}
                type="text"
                class="form-control"
                id="first-name"
                name="first-name"
              />
            </div>
            <div class="mb-3">
              <label for="last-name" class="form-label">Last Name</label>
              <input
                bind:value={lastName}
                type="text"
                class="form-control"
                id="last-name"
                name="last-name"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                bind:value={password}
                type="password"
                class="form-control"
                id="password"
                name="password"
                required
              />
              <div class="invalid-feedback">Please choose a password.</div>
            </div>
            <div class="mb-3">
              <label for="userType" class="form-label">User Type</label>
              <select
                bind:value={selectedUserType}
                class="form-select"
                required
              >
                {#each userTypes as userType}
                  <option value={userType}>{userType}</option>
                {/each}
              </select>
              <div class="invalid-feedback">Please select a user type.</div>
            </div>
            <div class="row align-items-end">
              <div class="col">
                <button type="submit" class="btn btn-primary">Sign up</button>
              </div>
              <div class="col-auto">
                <a href="/">Log in</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
-->
