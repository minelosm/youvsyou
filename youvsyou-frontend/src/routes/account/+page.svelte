<script>
    import {
        isAuthenticated,
        user,
        myFitnessuserId,
        jwt_token,
    } from "../../store";
    import { page } from "$app/stores";
    import axios from "axios";
    import { goto } from "$app/navigation";

    function goToPage(page) {
        goto(page);
    }

    const api_root = $page.url.origin;

    let fitnessuser = {
        id: null,
        email: $user.email,
        name: null,
        birthDate: null,
        height: null,
        weight: null,
        fitnesscenter: null,
    };

    $: {
        if ($jwt_token !== "") {
            fetchMyFitnessuserId();
        }
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
                fitnessuser = response.data;
            })
            .catch(function (error) {
                alert("Could not get fitnessuser id");
                console.log(error);
            });
    }
</script>

{#if $isAuthenticated}
    <h1 class="title is-1">Account Details</h1>
    <p class="subtitle is-3">for <b>{$user.given_name} {$user.family_name}</b></p>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-96x96">
                        <img src={$user.picture} alt={$user.picture} />
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{$user.nickname}</p>
                    <p class="subtitle is-6">{$user.email}</p>
                </div>
            </div>
            <div class="content">
                <p>
                    <b>First Name:</b>
                    {$user.given_name}
                </p>
                <p>
                    <b>Surname:</b>
                    {$user.family_name}
                </p>
                {#if $user.user_roles && $user.user_roles.length > 0}
                    <p>
                        <b>Roles:</b>
                        {$user.user_roles}
                    </p>
                {/if}
            </div>
        </div>
    </div>

    {#if $user.user_roles && $user.user_roles.includes("fitnessuser") && fitnessuser.birthDate == null}
        <div class="box">
            <h1 class="title is-1">You can Fullfill your Account here</h1>
            <button class="button is-fullwidth is-success" on:click={() => goToPage("/accountedit")}>
                <span class="icon">
                    <i class="fa-solid fa-user-pen"></i>
                </span>
                <span>Fullfill Account</span>
            </button>
        </div>
    {/if}

    {#if $user.user_roles && $user.user_roles.includes("fitnesscoach") && fitnessuser.fitnesscenter == null}
        <div class="box">
            <h1 class="title is-1">You can Fullfill your Account here</h1>
            <button class="button is-fullwidth is-success" on:click={() => goToPage("/accountedit")}>
                <span class="icon">
                    <i class="fa-solid fa-user-pen"></i>
                </span>
                <span>Fullfill Account</span>
            </button>
        </div>
    {/if}
{:else}
    <h1 class="title is-1">Waiting...</h1>
{/if}
