<script>
  import "./styles.css";
  import { isAuthenticated, user } from "../store";
  import auth from "../auth.service";
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
      </ul>
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
