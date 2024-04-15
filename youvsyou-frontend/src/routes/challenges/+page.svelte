<script>
    import axios from "axios";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { jwt_token } from "../../store";

    const api_root = $page.url.origin;

    let challenges = [];
    let challenge = {
        name: null,
        description: null,
        startDate: null,
        endDate: null,
        wager: null,
        challengeType: null,
    };

    onMount(() => {
        getChallenges();
    });

    function getChallenges() {
        var config = {
            method: "get",
            url: api_root + "/api/challenge",
            headers: {Authorization: "Bearer "+$jwt_token},
        };

        axios(config)
            .then(function (response) {
                challenges = response.data;
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
            headers: {
                "Content-Type": "application/json",
            },
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
</script>

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
                <option value="WIGTHLOSS">WIGTHLOSS</option>
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

<h1>All Challenges</h1>
<table class="table">
    <thead>
        <tr>
            <th scope="col">Challenge ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Wager</th>
            <th scope="col">State</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Fitnessuser 1</th>
            <th scope="col">Fitnessuser 2</th>
            <th scope="col">View Challenge</th>
        </tr>
    </thead>
    <tbody>
        {#each challenges as challenge}
            <tr>
                <td>{challenge.id}</td>
                <td>{challenge.name}</td>
                <td>{challenge.description}</td>
                <td>{challenge.challengeType}</td>
                <td>{challenge.wager}</td>
                <td>{challenge.challengeState}</td>
                <td>{challenge.startDate}</td>
                <td>{challenge.endDate}</td>
                <td>{challenge.fitnessuserId1}</td>
                <td>{challenge.fitnessuserId2}</td>
                <td>
                    <button>
                        <a href={`/challenge?id=${challenge.id}`}>View</a>
                    </button>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
