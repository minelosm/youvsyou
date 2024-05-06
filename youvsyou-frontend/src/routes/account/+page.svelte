<script>
    import { isAuthenticated, user, myFitnessuserId, jwt_token } from "../../store";
    import { page } from "$app/stores";
    import axios from "axios";

    const api_root = $page.url.origin;

    let fitnessuser = {
        id: null,
        email: $user.email,
        name: null,
        birthDate: null,
        height: null,
        weight: null,
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
<h1>
    Account Details
</h1>

<div>
    <p>
        <img src="{$user.picture}" alt="{$user.picture}"/>
    </p>
    <p>
        Username: {$user.username}
    </p>
    {#if $user.user_roles && $user.user_roles-length > 0}
    <p>
        <b>
            Roles:
        </b>
        {$user.user_roles}
    </p>
{/if}
    <p>
        First Name: {$user.given_name}
    </p>
    <p>
        Surname: {$user.family_name}
    <p>
        Email: {$user.email}
    </p>
    <p>
        Nickname: {$user.nickname}
    </p>
    {#if $user.user_roles && $user.user_roles.length > 0}
    <p>
        <b>
            Roles:
        </b>
        {$user.user_roles}
    </p>

    {#if $isAuthenticated && fitnessuser.birthDate == null}
    <button type="button" class="btn btn-warning">
        <a href="/accountedit">Edit Account</a>
    </button>
    {/if}
{/if}
</div>
{:else}
<p>
    You are not logged in.
</p>
{/if}