<script>
    import { page } from "$app/stores";
    import { isAuthenticated, user, myFitnessuserId } from "../../store";
    import { jwt_token } from "../../store";
    import axios from "axios";

    const api_root = $page.url.origin;
    let id;
    let winnerEmail = "";
    let winnerId = null;

    let currentPage;
    let nrOfPages = 0;
    let defaultPageSize = 4;

    let winnerUserData = [];

    let challenges = [];

    $: {
        id = $page.url.searchParams.get("id");

        if ($jwt_token !== "") {
            fetchMyFitnessuserId();
            console.log($myFitnessuserId);
        }
        getChallenges();
    }

    function getChallenges() {
        var config = {
            method: "get",
            url: api_root + "/api/challenge/fitness/" + id,
            headers: { Authorization: "Bearer " + $jwt_token },
        };

        axios(config)
            .then(function (response) {
                challenges = response.data;
            })
            .catch(function (error) {
                alert(
                    "Could not get challenges. There are no challenges associated to you. Create a chellenge or compete in one.",
                );
                console.log(error);
            });
    }

    function finishChallenge(challengeId, winnerEmail) {
        var config = {
            method: "put",
            url:
                api_root +
                "/api/service/finishchallenge?challengeId=" +
                challengeId +
                "&winnerEmail=" +
                winnerEmail,
            headers: { Authorization: "Bearer " + $jwt_token },
        };

        axios(config)
            .then(function (response) {
                alert("Challenge set as finished");
                getChallenges();
            })
            .catch(function (error) {
                alert("Could not finish challenge");
                console.log(error);
            });
    }

    function getWinnerEmail(winnerId) {
        var config = {
            method: "get",
            url: api_root + "/api/fitnessuser/" + winnerId,
            headers: { Authorization: "Bearer " + $jwt_token },
        };
        axios(config)
            .then(function (response) {
                winnerUserData = response.data;
                winnerEmail = response.data.email;
                console.log(winnerUserData);
                console.log(winnerEmail);
            })
            .catch(function (error) {
                alert("Could not get fitnessuser id");
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

    function saveWinnerIdFrom1(id) {
        winnerId = id;
        console.log(winnerId);
        getWinnerEmail(winnerId);
    }

    function saveWinnerIdFrom2(id) {
        winnerId = id;
        console.log(winnerId);
        getWinnerEmail(winnerId);
    }

    function deleteChallenge(challengeId, fitnesscoachId) {
        var config = {
            method: "delete",
            url:
                api_root +
                "/api/challenge/" +
                fitnesscoachId +
                "/" +
                challengeId,
            headers: { Authorization: "Bearer " + $jwt_token },
        };

        axios(config)
            .then(function (response) {
                alert("Challenge deleted");
                getChallenges();
            })
            .catch(function (error) {
                alert(
                    "Could not delete challenge, Challenge is already running or finished",
                );
                console.log(error);
            });
    }
</script>

{#if $isAuthenticated && $user.user_roles && $user.user_roles.includes("fitnesscoach")}
    <div class="box">
        <h1 class="title is-1">My Created Challenges</h1>
        <p class="subtitle is-3">from {$user.email}</p>
    </div>

    <div class="columns is-multiline">
        {#each challenges as challenge}
            <div class="column is-half">
                <div class="card full-height-card">
                    <header class="card-header">
                        <p class="card-header-title">
                            {challenge.name}<span class="tag is-info is-light"
                                >{challenge.challengeType}</span
                            >
                        </p>
                        <button
                            class="card-header-icon"
                            aria-label="more options"
                        >
                            <span class="icon">
                                <i class="fas fa-dumbbell" aria-hidden="true"
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
                            {:else if challenge.challengeState === "RUNNING"}
                                <i class="fa-solid fa-hourglass-start"></i>
                                is {challenge.challengeState}
                            {:else if challenge.challengeState === "FINISHED"}
                                <i class="fa-solid fa-flag-checkered"></i>
                                challenge is {challenge.challengeState}
                            {/if}
                        </div>
                        {#if challenge.challengeState != "FINISHED"}
                            <div class="content">
                                <i class="fa-solid fa-trophy"></i>
                                Winner: {winnerEmail}
                            </div>
                        {/if}
                    </div>
                    <footer class="card-footer">
                        {#if challenge.challengeState === "OPEN"}
                            <button
                                class="card-footer-item button is-danger"
                                on:click={deleteChallenge(
                                    challenge.id,
                                    $myFitnessuserId,
                                )}>Delete Challenge</button
                            >
                        {:else if challenge.challengeState === "RUNNING"}
                            <a
                                href="#"
                                on:click={saveWinnerIdFrom1(
                                    challenge.fitnessuserId1,
                                )}
                                class="card-footer-item"
                                >Choose Winner User 1: {challenge.fitnessuserEmail1}</a
                            >
                            <a
                                href="#"
                                on:click={finishChallenge(
                                    challenge.id,
                                    winnerEmail,
                                )}
                                class="card-footer-item">Finish Challenge</a
                            >
                            <a
                                href="#"
                                on:click={saveWinnerIdFrom2(
                                    challenge.fitnessuserId2,
                                )}
                                class="card-footer-item"
                                >Choose Winner User 2: {challenge.fitnessuserEmail2}</a
                            >
                        {:else if challenge.challengeState === "WAITING"}
                            <b>One User already joined</b>
                        {:else if challenge.challengeState === "FINISHED"}
                            <b>Check Balance Account for Wager</b>
                        {/if}
                    </footer>
                </div>
            </div>
        {/each}
    </div>

    <nav class="pagination" aria-label="pagination">
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
{/if}

{#if $isAuthenticated && $user.user_roles && $user.user_roles.includes("fitnessuser")}
    <div class="box">
        <h1 class="title is-1">My Competed Challenges</h1>
        <p class="subtitle is-3">from {$user.email}</p>
    </div>

    <div class="columns is-multiline">
        {#each challenges as challenge}
            {#if challenge.fitnessuserId1 === $myFitnessuserId || challenge.fitnessuserId2 === $myFitnessuserId}
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
                                {#if challenge.challengeState === "OPEN"}
                                    <i class="fas fa-check"></i>
                                    {challenge.challengeState} to compete
                                {:else if challenge.challengeState === "WAITING"}
                                    <i class="fas fa-clock"></i>
                                    {challenge.challengeState} for a competitor
                                {:else if challenge.challengeState === "RUNNING"}
                                    <i class="fa-solid fa-hourglass-start"></i>
                                    is {challenge.challengeState}
                                {:else if challenge.challengeState === "FINISHED"}
                                    <i class="fa-solid fa-flag-checkered"></i>
                                    challenge is {challenge.challengeState}
                                {/if}
                            </div>
                        </div>
                        <footer class="card-footer">
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

    <nav class="pagination" aria-label="pagination">
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
{/if}

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
