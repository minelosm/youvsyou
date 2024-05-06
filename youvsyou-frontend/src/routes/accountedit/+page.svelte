<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { isAuthenticated, user, jwt_token, myFitnessuserId } from "../../store";
    import axios from "axios";
    import { goto } from "$app/navigation";

    const api_root = $page.url.origin;

    let oldFitnessuser = {
        id: null,
        email: $user.email,
        name: null,
        birthDate: null,
        height: null,
        weight: null,
    };

    let newFitnessuser = {
        email: $user.email,
        birthDate: null,
        height: null,
        weight: null,
    };

    onMount(() => {
        if ($jwt_token !== "") {
            fetchMyFitnessuserId();
        }
    });

    function fetchMyFitnessuserId() {
        var config = {
            method: "get",
            url: api_root + "/api/service/me/myinfo",
            headers: { Authorization: "Bearer " + $jwt_token },
        };

        axios(config)
            .then(function (response) {
                $myFitnessuserId = response.data.id;
                oldFitnessuser = response.data;
            })
            .catch(function (error) {
                alert("Could not get fitnessuser id");
                console.log(error);
            });
    }

    function editUser() {
        var config = {
            method: "put",
            url: api_root + "/api/fitnessuser/edit/" + $user.email,
            headers: { Authorization: "Bearer " + $jwt_token },
            data: newFitnessuser,
        };

        axios(config)
            .then(function (response) {
                alert("User Information edited successfully");
                goto("/account");
            })
            .catch(function (error) {
                alert("Error editing user information");
                console.log(error);
            });
    }
</script>
{#if $isAuthenticated && $user.user_roles === "fitnesscoach"}
    <h2>Fullfillment Account Details</h2>

    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
            type="email"
            class="form-control"
            id="email"
            placeholder={$user.email}
            readonly
        />
    </div>
    <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <textarea class="form-control" id="username" rows="3"
            >{$user.username}</textarea
        >
    </div>
    <button type="submit" class="btn btn-primary">Edit Changes</button>
{/if}

{#if $isAuthenticated && $user.user_roles == "fitnessuser" && oldFitnessuser.birthDate == null}
    <h2>Fullfillment Account Details</h2>

    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
            type="email"
            class="form-control"
            placeholder={$user.email}
            readonly
        />
    </div>
    <div class="mb-3">
        <label for="birthDate" class="form-label">Birth Date</label>
        <input
            type="text"
            name="birthDate"
            class="form-control"
            id="birthDate"
            bind:value={newFitnessuser.birthDate}
        />
    </div>
    <div class="mb-3">
        <label for="height" class="form-label">Height</label>
        <input type="text" name="height" class="form-control" id="height" bind:value={newFitnessuser.height} />
    </div>
    <div class="mb-3">
        <label for="weight" class="form-label">Weight</label>
        <input type="text" name="weight" class="form-control" id="weight" bind:value={newFitnessuser.weight} />
    </div>
    <button type="button" class="btn btn-primary" on:click={editUser}
        >Edit Changes
    </button>
{:else}
<h1>Can't edit account</h1>
<p>Account was already edited</p>
{/if}
