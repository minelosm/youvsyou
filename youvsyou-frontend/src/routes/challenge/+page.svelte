<script>
    import { page } from "$app/stores";
    import { jwt_token } from "../../store";
    import axios from "axios";

    const api_root = $page.url.origin;
    let id;
    let challenge = {
        id: null,
        name: null,
        description: null,
        startDate: null,
        endDate: null,
        wager: null,
        challengeType: null,
        challengeState: null

    };

    $: {
        id = $page.url.searchParams.get("id");
        getChallenge();
    }

    function getChallenge() {
        var config = {
            method: "get",
            url: api_root + "/api/challenge/" + id,
            headers: { Authorization: "Bearer " + $jwt_token },
        };

        axios(config)
            .then(function (response) {
                challenge = response.data;
            })
            .catch(function (error) {
                alert("Could not get challenge with id: " + id);
                console.log(error);
            });
    }
</script>

<h1>Freelancer Details</h1>
<p>ID: {challenge.id}</p>
<p>Name: {challenge.name}</p>
<p>Description: {challenge.description}</p>
