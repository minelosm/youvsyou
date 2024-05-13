<script>
    import { page } from "$app/stores";
    import { jwt_token } from "../../store";
    import axios from "axios";

    const api_root = $page.url.origin;
    let id;
    let challenge = {
        id: null,
        name: null,
        description: null,
        startDate: null,
        endDate: null,
        wager: null,
        challengeType: null,
        challengeState: null,
        fitnesscoachId: null,
    };

    $: {
        id = $page.url.searchParams.get("id");
        getChallenge();
    }

    function getChallenge() {
        var config = {
            method: "get",
            url: api_root + "/api/challenge/" + id,
            headers: { Authorization: "Bearer " + $jwt_token },
        };

        axios(config)
            .then(function (response) {
                challenge = response.data;
            })
            .catch(function (error) {
                alert("Could not get challenge with id: " + id);
                console.log(error);
            });
    }
</script>

<div class="card full-height-card">
    <header class="card-header">
        <p class="card-header-title">
            {challenge.name}<span class="tag is-info is-light"
                >{challenge.challengeType}</span
            >
        </p>
        <button class="card-header-icon" aria-label="more options">
            <span class="icon">
                <i class="fas fa-dumbbell" aria-hidden="true"></i>
            </span>
        </button>
    </header>
    <div class="card-content">
        <div class="content">
            {challenge.description}
        </div>
        <div class="content">
            <i class="fa-solid fa-sack-dollar"></i>
            {challenge.wager} CHF
        </div>
        <div class="content">
            <i class="fas fa-calendar-alt"></i>
            {challenge.startDate} - {challenge.endDate}
        </div>
        <div class="content">
            {#if challenge.challengeState === "OPEN"}
                <i class="fas fa-check"></i>
                {challenge.challengeState} to compete
            {:else if challenge.challengeState === "WAITING"}
                <i class="fas fa-clock"></i>
                {challenge.challengeState} for a competitor
            {/if}
        </div>
    </div>
</div>
