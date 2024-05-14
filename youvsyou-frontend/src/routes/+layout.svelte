<script>
  import axios from "axios";
  import { page } from "$app/stores";
  import "./styles.css";
  import auth from "../auth.service";
  import { jwt_token } from "../store";
  import { isAuthenticated, user, myFitnessuserId } from "../store";
  import { goto } from "$app/navigation";

  const api_root = $page.url.origin;

  function fetchMyFitnessuserId() {
    var config = {
      method: "get",
      url: api_root + "/api/service/me/myinfo",
      headers: { Authorization: "Bearer " + $jwt_token },
    };

    axios(config)
      .then(function (response) {
        $myFitnessuserId = response.data.id;
      })
      .catch(function (error) {
        alert("Could not get fitnessuser id");
        console.log(error);
      });
  }

  function goToPage(page) {
    goto(page);
  }

  $: {
    if ($jwt_token !== "") {
      fetchMyFitnessuserId();
    }
  }
</script>

<nav class="navbar is-white">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="/images/youvsyou_logo.png" alt="youvsyou_logo"/>YOUvsYOU</a
    >
    <div class="navbar-burger" id="navbarBurger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarMenu" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item">
        <button
          class="button is-primary is-rounded"
          on:click={() => goToPage("/challenges")}
        >
          <span class="icon">
            <i class="fa-solid fa-list"></i>
          </span>
          <span>Challenges</span>
        </button>
      </div>
      {#if $isAuthenticated}
      <div class="navbar-item">
        <button
          class="button is-primary is-rounded"
          on:click={() => goToPage("/mychallenges?id=" + $myFitnessuserId)}
        >
          <span class="icon">
            <i class="fa-solid fa-bookmark"></i>
          </span>
          <span>My Challenges</span>
        </button>
      </div>
      {/if}
      {#if $isAuthenticated && $user.user_roles.includes("fitnesscoach")}
      <div class="navbar-item">
        <button
          class="button is-success is-rounded"
          on:click={() => goToPage("/challengeCreate")}
        >
          <span class="icon">
            <i class="fa-solid fa-plus"></i>
          </span>
          <span>Create Challenge</span>
        </button>
      </div>
      {/if}
    </div>

    <div class="navbar-end">
      {#if $isAuthenticated}
        <div class="navbar-item">
          <button
            class="button is-warning is-rounded"
            on:click={() => goToPage("/balance")}
          >
            <span class="icon">
              <i class="fas fa-wallet"></i>
            </span>
            <span>Balance</span>
          </button>
        </div>
        <div class="navbar-item">
          <button
            class="button is-link is-rounded"
            on:click={() => goToPage("/account")}
          >
            <span class="icon">
              <i class="fas fa-user"></i>
            </span>
            <span>Account</span>
          </button>
        </div>
        <div class="navbar-item">
          <button class="button is-danger is-rounded" on:click={auth.logout}>
            <span class="icon">
              <i class="fas fa-sign-out-alt"></i>
            </span>
            <span>Log Out</span>
          </button>
        </div>
      {/if}
      {#if !$isAuthenticated}
        <div class="navbar-item">
          <button
            class="button is-info is-rounded"
            on:click={() => goToPage("/login")}
          >
            <span class="icon">
              <i class="fas fa-sign-in-alt"></i>
            </span>
            <span>Log In</span>
          </button>
        </div>
        <div class="navbar-item">
          <button
            class="button is-info is-rounded"
            on:click={() => goToPage("/signup")}
          >
            <span class="icon">
              <i class="fas fa-user-circle"></i>
            </span>
            <span>Sign Up</span>
          </button>
        </div>
      {/if}
    </div>
  </div>
</nav>

<div class="container mt-3">
  <slot />
</div>
