<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { isAuthenticated, user, jwt_token, myFitnessuserId } from "../../store";
    import axios from "axios";
    import { goto } from "$app/navigation";

    const api_root = $page.url.origin;

    let signupForm;

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

    let oldFitnesscoach = {
        id: null,
        email: $user.email,
        name: null,
        fitnesscenter: null,
    };

    let newFitnesscoach = {
        fitnesscenter: null,
    }

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
                if($user.user_roles === "fitnessuser") {
                    $myFitnessuserId = response.data.id;
                    oldFitnessuser = response.data;
                } else {
                    $myFitnessuserId = response.data.id;
                    oldFitnesscoach = response.data;
                }
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

    function editCoach() {
        var config = {
            method: "put",
            url: api_root + "/api/fitnesscoach/edit/" + $user.email,
            headers: { Authorization: "Bearer " + $jwt_token },
            data: newFitnesscoach,
        };

        axios(config)
            .then(function (response) {
                alert("Coach Information edited successfully");
                goto("/account");
            })
            .catch(function (error) {
                alert("Error editing coach information");
                console.log(error);
            });
    }
</script>
{#if $isAuthenticated && $user.user_roles.includes("fitnesscoach") && oldFitnesscoach.fitnesscenter == null}
    <form class="box" on:submit|preventDefault={editCoach} bind:this={signupForm}>
        <h1 class="title is-1">Fullfill Account Details</h1>
        <div class="field">
            <label for="fitnesscenter">Fitnesscenter</label>
            <div class="control has-icons-left has-icons-right">
                <input type="text" class="input" bind:value={newFitnesscoach.fitnesscenter}>
                <span class="icon is-small is-left">
                    <i class="fa-solid fa-weight-hanging"></i>
                </span>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
        </div>
    </form>
{/if}

{#if $isAuthenticated && $user.user_roles.includes("fitnessuser") && oldFitnessuser.birthDate == null}
<form class="box" on:submit|preventDefault={editUser} bind:this={signupForm}>
    <h1 class="title is-1">Fullfill Account Details</h1>
    <div class="field">
        <label for="birthDate">Birth Date</label>
        <div class="control has-icons-left has-icons-right">
            <input type="text" class="input" bind:value={newFitnessuser.birthDate}>
            <span class="icon is-small is-left">
                <i class="fa-solid fa-baby"></i>
            </span>
        </div>
    </div>
    <div class="field">
        <label for="height">Height</label>
        <div class="control has-icons-left has-icons-right">
            <input type="text" class="input" bind:value={newFitnessuser.height}>
            <span class="icon is-small is-left">
                <i class="fa-solid fa-person"></i>
            </span>
        </div>
    </div>
    <div class="field">
        <label for="weight">Weight</label>
        <div class="control has-icons-left has-icons-right">
            <input type="text" class="input" bind:value={newFitnessuser.weight}>
            <span class="icon is-small is-left">
                <i class="fa-solid fa-weight-scale"></i>
            </span>
        </div>
    </div>
    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Submit</button>
        </div>
    </div>
</form>
{/if}

{#if oldFitnessuser.birthDate != null || oldFitnesscoach.fitnesscenter != null} 
<h1 class="title is-1">Can't edit account</h1>
<p class="subtitle is-3">Account was already edited</p>
{/if}
