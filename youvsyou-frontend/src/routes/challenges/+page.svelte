<script>
    import axios from "axios";
    import { page } from "$app/stores";
    import { jwt_token } from "../../store";
    import { isAuthenticated, user, myFitnessuserId } from "../../store";

    let loading = true;

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

    function createChallenge() {
        loading = true;
        var config = {
            method: "post",
            url: api_root + "/api/challenge",
            headers: { Authorization: "Bearer " + $jwt_token },
            data: challenge,
        };

        axios(config)
            .then(function (response) {
                alert("Challenge created");
                getChallenges();
            })
            .catch(function (error) {
                alert("Could not create Challenge");
                console.log(error);
            })
            .finally(() => {
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
                alert("Could not compete to me");
                console.log(error);
            });
    }

    function finishChallenge(challengeId) {
        var config = {
            method: "put",
            url:
                api_root +
                "/api/service/finishchallenge?challengeId=" +
                challengeId,
            headers: { Authorization: "Bearer " + $jwt_token },
        };
        axios(config)
            .then(function (response) {
                getChallenges();
            })
            .catch(function (error) {
                alert("Could not finish the challenge");
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
</script>

<p>{$myFitnessuserId}</p>

{#if $isAuthenticated && $user.user_roles && $user.user_roles.includes("fitnesscoach")}
    <h1 class="mt-3">Create Challenge</h1>
    <form class="mb-5">
        <div class="row mb-3">
            <div class="col">
                <label class="form-label" for="name">Name</label>
                <input
                    bind:value={challenge.name}
                    class="form-control"
                    id="name"
                    type="text"
                />
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <label class="form-label" for="startDate">Start Date</label>
                <input
                    bind:value={challenge.startDate}
                    class="form-control"
                    id="startDate"
                    type="text"
                />
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <label class="form-label" for="endDate">End Date</label>
                <input
                    bind:value={challenge.endDate}
                    class="form-control"
                    id="endDate"
                    type="text"
                />
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <label class="form-label" for="type">Challenge Type</label>
                <select
                    bind:value={challenge.challengeType}
                    class="form-select"
                    id="type"
                >
                    <option value="SPEED">SPEED</option>
                    <option value="POWER">POWER</option>
                    <option value="WEIGTHLOSS">WEIGTHLOSS</option>
                    <option value="MUSCLEBUILDING">MUSCLEBUILDING</option>
                    <option value="CARDIO">CARDIO</option>
                    <option value="STAMINA">STAMINA</option>
                    <option value="AGILITY">AGILITY</option>
                    <option value="REACTION">REACTION</option>
                </select>
            </div>
            <div class="col">
                <label class="form-label" for="wager">Wager</label>
                <input
                    bind:value={challenge.wager}
                    class="form-control"
                    id="wager"
                    type="number"
                />
            </div>
        </div>
        <button
            type="button"
            class="btn btn-primary"
            on:click={createChallenge}
            disabled={loading}
        >
            {#if loading}
                <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                ></span>
                Loading...
            {:else}
                Create Challenge
            {/if}
        </button>
    </form>
{/if}

<h1>All Challenges</h1>

<div class="row my-3">
    <div class="col-auto">
        <label for="" class="col-form-label">Wager: </label>
    </div>
    <div class="col-3">
        <input
            class="form-control"
            type="number"
            placeholder="min"
            bind:value={wagerMin}
        />
    </div>
    <div class="col-auto">
        <label for="" class="col-form-label">Challenge Type: </label>
    </div>
    <div class="col-3">
        <select
            bind:value={challengeType}
            class="form-select"
            id="type"
            type="text"
        >
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
    <div class="col-3">
        <a
            class="btn btn-primary"
            href={"/challenges?page=1&challengeType=" +
                challengeType +
                "&wagerMin=" +
                wagerMin}
            role="button">Apply</a
        >
    </div>
</div>

<div class="columns">
    {#each challenges as challenge}
    {#if challenge.challengeState === "OPEN" || challenge.challengeState === "WAITING"}
        <div class="column is-one-third">
            <div class="card">
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
                        <i class="fas fa-money-bill"></i>
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
                <footer class="card-footer">
                    <a href="#" on:click={competeToMe} class="card-footer-item"
                        >Compete to me</a
                    >
                    <a
                        href={"/challenge?id=" + challenge.id}
                        class="card-footer-item">Detail</a
                    >
                </footer>
            </div>
        </div>
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