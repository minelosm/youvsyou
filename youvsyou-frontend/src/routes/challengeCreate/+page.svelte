<script>
    import axios from "axios";
    import { page } from "$app/stores";
    import { jwt_token } from "../../store";
    import { isAuthenticated, user, myFitnessuserId } from "../../store";


    let loading = true;
    let signupForm;

    const api_root = $page.url.origin;

    let challenge = {
        name: null,
        startDate: null,
        endDate: null,
        wager: null,
        challengeType: null,
        fitnesscoachId: $myFitnessuserId,
        fitnesscenter: null
    };


    $: {
        if ($jwt_token !== "") {
            fetchMyFitnessuserId();
        }
    }

    function createChallenge() {
        fetchMyFitnessuserId();
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
            })
            .catch(function (error) {
                alert("Could not create Challenge. Please provide a fitnesscenter in your Account.");
                console.log(error);
            })
            .finally(() => {
                loading = false;
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
                challenge.fitnesscenter = response.data.fitnesscenter;
                console.log(response.data);
            })
            .catch(function (error) {
                alert("Could not get fitnessuser id");
                console.log(error);
            });
    }
</script>

{#if $isAuthenticated && $user.user_roles && $user.user_roles.includes("fitnesscoach")}
    <form class="box" on:submit|preventDefault={createChallenge} bind:this={signupForm}>
        <h1 class="title is-1">Create a Challenge</h1>
        <div class="field">
            <label class="label" for="text">Challenge Name</label>
            <div class="control has-icons-left has-icons-right">
                <input
                    class="input"
                    type="text"
                    bind:value={challenge.name}
                    required
                />
                <span class="icon is-small is-left">
                    <i class="fa-solid fa-tag"></i>
                </span>
            </div>
        </div>
        <div class="field">
            <label class="label" for="startdate">Start Date</label>
            <div class="control has-icons-left has-icons-right">
                <input
                    class="input"
                    type="text"
                    bind:value={challenge.startDate}
                />
                <span class="icon is-small is-left">
                    <i class="fa-regular fa-calendar-days"></i>
                </span>
            </div>
        </div>
        <div class="field">
            <label class="label" for="enddate">End Date</label>
            <div class="control has-icons-left has-icons-right">
                <input
                    class="input"
                    type="text"
                    bind:value={challenge.endDate}
                />
                <span class="icon is-small is-left">
                    <i class="fa-regular fa-calendar-days"></i>
                </span>
            </div>
        </div>
        <div class="field">
            <label class="label" for="wager">Wager</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" bind:value={challenge.wager} />
                <span class="icon is-small is-left">
                    <i class="fa-solid fa-sack-dollar"></i>
                </span>
            </div>
        </div>
        <div class="field">
            <label class="label" for="challengetype">Challenge Type</label>
            <div class="control">
                <div class="select">
                    <select bind:value={challenge.challengeType}>
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
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Create Challenge</button>
            </div>
        </div>
    </form>
{/if}
