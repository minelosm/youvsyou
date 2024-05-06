<script>
    import { isAuthenticated, user, myFitnessuserId, jwt_token } from "../../store";
    import { page } from "$app/stores";
    import axios from "axios";

    const api_root = $page.url.origin;

    let amount = 0;

    let account = {
        iban: null,
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
                Authorization: "Bearer " + $jwt_token },
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
                if (response.data.iban != null) {
                    account.iban = response.data.iban;
                }
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
    <h1>Balance Account</h1>
    <p>Balance: {account.balance}</p>
    <p>IBAN: {account.iban}</p>

    <form class="mb-5">
    <div class="row mb-3">
        <div class="col">
            <label class="form-label" for="iban">IBAN</label>
            {#if account.iban == null}
                <input
                    type="text"
                    id="iban"
                    class="form-control"
                    bind:value={account.iban}
                />
            {:else}
                <input
                    type="text"
                    id="IBAN"
                    class="form-control"
                    bind:value={account.iban}
                    readonly
                />
            {/if}
        </div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <label class="form-label" for="amount">Amount</label>
            <input
                type="integer"
                id="amount"
                class="form-control"
                bind:value={amount}
                >
        </div>
    </div>
    <button type="button" class="btn btn-warning" on:click={addBalance}>Add Balance</button>
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
