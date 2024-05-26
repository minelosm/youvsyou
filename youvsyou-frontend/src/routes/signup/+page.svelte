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
    email = "";
    password = "";
  }

  function signup() {
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
