<script>
    import axios from "axios";
    import { page } from "$app/stores";
    import { jwt_token } from "../../store";
    import { isAuthenticated, user, myFitnessuserId } from "../../store";

    let loading = true;
    let filter = false;

    const api_root = $page.url.origin;

    let currentPage;
    let nrOfPages = 0;
    let defaultPageSize = 4;

    let challenges = [];
    let challenge = {
        name: null,
        startDate: null,
        endDate: null,
        wager: null,
        challengeType: null,
        fitnesscoachId: $myFitnessuserId,
    };

    let wagerMin;
    let challengeType;

    $: {
        if ($jwt_token !== "") {
            fetchMyFitnessuserId();
            let searchParams = $page.url.searchParams;
            if (searchParams.has("page")) {
                currentPage = searchParams.get("page");
            } else {
                currentPage = "1";
            }
            getChallenges();
        }
    }

    function getChallenges() {
        loading = true;
        let query =
            "?pageSize=" + defaultPageSize + "&pageNumber=" + currentPage;

        if (wagerMin) {
            query += "&min=" + wagerMin;
        }
        if (challengeType && challengeType !== "ALL") {
            query += "&type=" + challengeType;
        }

        var config = {
            method: "get",
            url: api_root + "/api/challenge" + query,
            headers: { Authorization: "Bearer " + $jwt_token },
        };

        axios(config)
            .then(function (response) {
                challenges = response.data.content;
                nrOfPages = response.data.totalPages;
                loading = false;
            })
            .catch(function (error) {
                alert("Could not get challenges");
                console.log(error);
                loading = false;
            });
    }

    function competeToMe(challengeId) {
        var config = {
            method: "put",
            url:
                api_root +
                "/api/service/me/competechallenge?challengeId=" +
                challengeId,
            headers: { Authorization: "Bearer " + $jwt_token },
        };
        axios(config)
            .then(function (response) {
                getChallenges();
            })
            .catch(function (error) {
                alert("Could not compete to the challenge, Balance Account is too low");
                console.log(error);
            });
    }

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

    function clearFilter() {
        wagerMin = null;
        challengeType = null;
        filter = false;
        getChallenges();
    }

    function filterChallenges() {
        filter = true;
        getChallenges();
    }
</script>

<style>
    .full-height-card {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.full-height-card .card-content {
    flex-grow: 1;
}
</style>

<h1 class="title is-1">All Challenges</h1>

<div class="box">
    <div class="field">
        <label for="wager" class="label">Wager: </label>
        <div class="control">
            <input
                class="input"
                type="number"
                placeholder="min"
                bind:value={wagerMin}
            />
        </div>
    </div>
    <div class="field">
        <label for="challengetype" class="label">Challenge Type: </label>
        <div class="control">
            <div class="select">
                <select bind:value={challengeType}>
                    <option value="ALL"></option>
                    <option value="STAMINA">STAMINA</option>
                    <option value="MUSCLEBUILDING">MUSCLEBUILDING</option>
                    <option value="SPEED">SPEED</option>
                    <option value="POWER">POWER</option>
                    <option value="WEIGTHLOSS">WEIGTHLOSS</option>
                    <option value="CARDIO">CARDIO</option>
                    <option value="AGILITY">AGILITY</option>
                    <option value="REACTION">REACTION</option>
                </select>
            </div>
        </div>
    </div>
    <div class="field">
        <button class="button is-success" on:click={filterChallenges}>
            <span class="icon is-small">
                <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <span>Search</span>
        </button>
    </div>
    {#if filter}
        <div class="field">
            <button class="button is-danger" on:click={clearFilter}>
                <span class="icon is-small">
                    <i class="fa-solid fa-xmark"></i>
                </span>
                <span>Clear Filter</span>
            </button>
        </div>
    {/if}
</div>

<div class="columns">
    {#each challenges as challenge}
        {#if challenge.challengeState === "OPEN" || challenge.challengeState === "WAITING"}
            {#if challenge.fitnessuserId1 !== $myFitnessuserId}
                {#if challenge.fitnessuserId2 !== $myFitnessuserId}
                    <div class="column is-one-third">
                        <div class="card full-height-card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    {challenge.name}<span
                                        class="tag is-info is-light"
                                        >{challenge.challengeType}</span
                                    >
                                </p>
                                <button
                                    class="card-header-icon"
                                    aria-label="more options"
                                >
                                    <span class="icon">
                                        <i
                                            class="fas fa-dumbbell"
                                            aria-hidden="true"
                                        ></i>
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
                                    <i class="fa-solid fa-weight-hanging"></i>
                                    {challenge.fitnesscenter}
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
                            <footer class="card-footer">
                                {#if $user.user_roles.includes("fitnessuser")}
                                <a
                                    href="#"
                                    on:click={competeToMe(challenge.id)}
                                    class="card-footer-item">Compete to me</a
                                >
                                {/if}
                                <a
                                    href={"/challenge?id=" + challenge.id}
                                    class="card-footer-item">Detail</a
                                >
                            </footer>
                        </div>
                    </div>
                {/if}
            {/if}
        {/if}
    {/each}
</div>

<nav class="pagination" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
        {#each Array(nrOfPages) as _, i}
            <li>
                <a
                    class="pagination-link is-current"
                    aria-label="Page 1"
                    class:active={currentPage == i + 1}
                    href={"/challenges?page=" + (i + 1)}
                    >{i + 1}
                </a>
            </li>
        {/each}
    </ul>
</nav>
