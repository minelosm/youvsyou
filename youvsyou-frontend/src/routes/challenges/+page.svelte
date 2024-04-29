<script>
    import axios from "axios";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { jwt_token } from "../../store";
    import { isAuthenticated, user, myFitnessuserId } from "../../store";

    const api_root = $page.url.origin;

    let currentPage;
    let nrOfPages = 0;
    let defaultPageSize = 4;

    let challenges = [];
    let challenge = {
        name: null,
        description: null,
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
            })
            .catch(function (error) {
                alert("Could not get challenges");
                console.log(error);
            });
    }

    function createChallenge() {
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

    function fetchMyFitnessuserId() {
        var config = {
            method: "get",
            url: api_root + "/api/me/fitnessuser",
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
                <label class="form-label" for="description">Description</label>
                <input
                    bind:value={challenge.description}
                    class="form-control"
                    id="name"
                    type="description"
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
        <button type="button" class="btn btn-primary" on:click={createChallenge}
            >Submit</button
        >
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

<table class="table">
    <thead>
        <tr>
            <th scope="col">Challenge ID</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Wager</th>
            <th scope="col">Fitnesscoach Id</th>
            <th scope="col">State</th>
            <th scope="col">Fitnessuser Id1</th>
            <th scope="col">Fitnessuser Id2</th>
            <th scope="col">Actions</th>
            <th scope="col">Actions</th>
            <th scope="col">View Single</th>
        </tr>
    </thead>
    <tbody>
        {#each challenges as challenge}
            <tr>
                <td>{challenge.id}</td>
                <td>{challenge.description}</td>
                <td>{challenge.challengeType}</td>
                <td>{challenge.wager}</td>
                <td>{challenge.fitnesscoachId}</td>
                <td>{challenge.challengeState}</td>
                <td>{challenge.fitnessuserId1}</td>
                <td>{challenge.fitnessuserId2}</td>
                <td>
                    {#if challenge.challengeState === "RUNNING"}
                        <span class="badge bg-secondary">Running</span>
                    {:else if challenge.fitnessuserId1 === null || challenge.fitnessuserId2 === null}
                        {#if $isAuthenticated && $user.user_roles && $user.user_roles.includes("fitnessuser") && challenge.fitnessuserId1 !== $myFitnessuserId && challenge.fitnessuserId2 !== $myFitnessuserId}
                            <button
                                type="button"
                                class="btn btn-primary btn-sm"
                                on:click={() => {
                                    competeToMe(challenge.id);
                                }}
                            >
                                Compete to me
                            </button>
                        {/if}
                    {/if}
                </td>
                <td>
                    {#if challenge.challengeState === "FINISHED"}
                        <span class="badge bg-success">Finished</span>
                    {/if}
                </td>
                <td>
                    <a href={"/challenge?id=" + challenge.id}>View</a>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<nav>
    <ul class="pagination">
        {#each Array(nrOfPages) as _, i}
            <li class="page-item">
                <a
                    class="page-link"
                    class:active={currentPage == i + 1}
                    href={"/challenges?page=" + (i + 1)}
                    >{i + 1}
                </a>
            </li>
        {/each}
    </ul>
</nav>
