<script>
    import { page } from "$app/stores";
    import { isAuthenticated, user, myFitnessuserId } from "../../store";
    import { jwt_token } from "../../store";
    import axios from "axios";

    const api_root = $page.url.origin;
    let id;

    let challenges = [];

    $: {
        id = $page.url.searchParams.get("id");

        if ($jwt_token !== "") {
            fetchMyFitnessuserId();
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
                alert("Could not get challenges");
                console.log(error);
            });
    }

    function fetchMyFitnessuserId() {
        var config = {
            method: "get",
            url: api_root + "/api/me/myinfo",
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
    <h1>My Created Challenges</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Challenge ID</th>
                <th scope="col">Description</th>
                <th scope="col">Type</th>
                <th scope="col">Wager</th>
                <th scope="col">State</th>
                <th scope="col">Fitnessuser Id1</th>
                <th scope="col">Fitnessuser Id2</th>
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
                        <td>{challenge.challengeState}</td>
                        <td>{challenge.fitnessuserId1}</td>
                        <td>{challenge.fitnessuserId2}</td>
                        <td>
                            {#if challenge.challengeState === "RUNNING"}
                                <span class="badge bg-secondary">Running</span>
                            {:else if challenge.challengeState === "FINISHED"}
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
{/if}

{#if $isAuthenticated && $user.user_roles && $user.user_roles.includes("fitnessuser")}
    <h1>My Competed Challenges</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Challenge ID</th>
                <th scope="col">Description</th>
                <th scope="col">Type</th>
                <th scope="col">Wager</th>
                <th scope="col">State</th>
                <th scope="col">Fitnessuser Id1</th>
                <th scope="col">Fitnessuser Id2</th>
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
                        <td>{challenge.challengeState}</td>
                        <td>{challenge.fitnessuserId1}</td>
                        <td>{challenge.fitnessuserId2}</td>
                        <td>
                            {#if challenge.challengeState === "RUNNING"}
                                <span class="badge bg-secondary">Running</span>
                            {:else if challenge.challengeState === "FINISHED"}
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
{/if}