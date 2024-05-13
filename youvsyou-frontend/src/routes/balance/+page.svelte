<script>
    import {
        isAuthenticated,
        user,
        myFitnessuserId,
        jwt_token,
    } from "../../store";
    import { page } from "$app/stores";
    import axios from "axios";
    import { deserialize } from "$app/forms";

    const api_root = $page.url.origin;

    let amount = 0;

    let account = {
        balance: 0.0,
        transactions: [],
    };

    $: {
        if ($jwt_token !== "") {
            fetchAccount();
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
            })
            .catch(function (error) {
                alert("Could not get fitnessuser id");
                console.log(error);
            });
    }

    function addBalance() {
        var config = {
            method: "put",
            url: api_root + "/api/balance/account/add?amount=" + amount,
            headers: {
                Authorization: "Bearer " + $jwt_token,
            },
        };

        axios(config)
            .then(function (response) {
                account.balance = response.data.balance;
                alert("Balance " + amount + " added successfully");
                fetchAccount();
            })
            .catch(function (error) {
                alert("Could not add balance");
                console.log(error);
            });
    }

    function fetchAccount() {
        var config = {
            method: "get",
            url: api_root + "/api/balance/account/myinfo",
            headers: { Authorization: "Bearer " + $jwt_token },
        };

        axios(config)
            .then(function (response) {
                account.balance = response.data.balance;
                account.transactions = response.data.transactions || [];
            })
            .catch(function (error) {
                alert("Could not get account");
                console.log(error);
            });
    }
</script>

{#if $isAuthenticated}
<div class="box has-background-warning">
    <p class="title is-1">Account Balance</p>
    <p class="subtitle is-3">
        Current Balance:
        <span class="icon">
            <i class="fa-solid fa-coins"></i>
        </span>
        {#if account.balance === null}
            0
        {:else}
        {account.balance}
        {/if}
    </p>
</div>

    <form class="box" on:submit|preventDefault={addBalance}>
        <h3 class="title is-3">Add Balance</h3>
        <div class="field">
            <label class="label" for="balance">Amount</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="integer" bind:value={amount} />
                <span class="icon is-small is-left">
                    <i class="fa-solid fa-coins"></i>
                </span>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-warning">
                    <span class="icon">
                        <i class="fa-solid fa-cart-plus"></i>
                    </span>
                    <span>Add Balance</span>
                </button>
            </div>
        </div>
    </form>

    {#if account.transactions.length > 0}
        <div class="box">
            <h3 class="title is-3">Transaction History</h3>
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {#each account.transactions as transaction}
                        {#if transaction.description.includes("wager")}
                            <tr class="is-danger is-light">
                                <td>{transaction.transactionDate}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.description}</td>
                            </tr>
                        {:else}
                            <tr class="is-success is-light">
                                <td>{transaction.transactionDate}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.description}</td>
                            </tr>
                        {/if}
                    {/each}
                </tbody>
            </table>
        </div>
    {:else}
        <div class="box">
            <p>No transactions found.</p>
        </div>
    {/if}
{/if}

<!--
{#if $isAuthenticated}
    <h1>Balance Account</h1>
    <p>Balance: {account.balance}</p>

    <form class="mb-5">
        <div class="row mb-3"></div>
        <div class="row mb-3">
            <div class="col">
                <label class="form-label" for="amount">Amount</label>
                <input
                    type="integer"
                    id="amount"
                    class="form-control"
                    bind:value={amount}
                />
            </div>
        </div>
        <button type="button" class="btn btn-warning" on:click={addBalance}
            >Add Balance</button
        >
    </form>

    {#if account.transactions.length > 0}
        <h2>Transaction History</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {#each account.transactions as transaction}
                    <tr>
                        <td>{transaction.transactionDate}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.description}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <p>No transactions found.</p>
    {/if}
{/if}
-->
