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

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">YOUvsYOU</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/challenges">Challenges</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={"/mychallenges?id=" + $myFitnessuserId}>My Challenges</a>
        </li>
      </ul>
      <div class="d-flex">
        {#if $isAuthenticated}
        <a class="navbar-text me-2" href="/balance">Balance</a>
        {/if}
      </div>
      <div class="d-flex">
        {#if $isAuthenticated}
        <a class="navbar-text me-2" href="/account">{$user.name}</a>
        <button type="button" class="btn btn-primary" on:click={auth.logout}>Log Out</button>
        {/if}
      </div>
      <div class="d-flex">
        {#if !$isAuthenticated}
        <a class="btn btn-primary me-2" href="/login">Log In</a>
        <a class="btn btn-primary" href="/signup">Sign Up</a>
        {/if}
      </div>
    </div>
  </div>
</nav>

<div class="container mt-3">
  <slot />
</div>
