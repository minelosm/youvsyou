<script>
    import axios from "axios";
    import { isAuthenticated, user } from "../../store";
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
    {#if $user.user_roles && $user.user_roles-length > 0}
    <p>
        <b>
            Roles:
        </b>
        {$user.user_roles}
    </p>
{/if}
</div>
{:else}
<p>
    You are not logged in.
</p>
{/if}