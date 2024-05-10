<script>
  import axios from "axios";
  import { page } from "$app/stores";
  import "./styles.css";
  import auth from "../auth.service";
  import { jwt_token } from "../store";
  import { isAuthenticated, user, myFitnessuserId } from "../store";

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

  $: {
    if ($jwt_token !== "") {
      fetchMyFitnessuserId();
    }
  }
</script>

<nav class="navbar is-white">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="/images/youvsyou_logo.png" alt="youvsyou_logo">YOUvsYOU</a>
    <div class="navbar-burger" id="navbarBurger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarMenu" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/challenges">Challenges</a>
      <a class="navbar-item" href={"/mychallenges?id=" + $myFitnessuserId}>My Challenges</a>
    </div>

    <div class="navbar-end">
      {#if $isAuthenticated}
        <a class="navbar-item" href="/balance">Balance</a>
        <a class="navbar-item" href="/account">{$user.name}</a>
        <div class="navbar-item">
          <button class="button is-primary" on:click={auth.logout}>
            <span class="icon">
              <i class="fas fa-sign-out-alt"></i>
            </span>
            <span>Log Out</span></button>
        </div>
      {/if}
      {#if !$isAuthenticated}
        <div class="navbar-item">
          <button class="button is-info is-rounded" href="/login">
            <span class="icon">
              <i class="fas fa-sign-in-alt"></i>
            </span>
            <span>Log In</span></button>
        </div>
        <div class="navbar-item">
          <button class="button is-info is-rounded" href="/signup"><span class="icon">
            <i class="fas fa-user-circle"></i>
          </span>
          <span>Sign Up</span></button>
        </div>
      {/if}
    </div>
  </div>
</nav>

<div class="container mt-3">
  <slot />
</div>
