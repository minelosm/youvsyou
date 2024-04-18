import { writable, derived } from "svelte/store";
import axios from "axios";

export const jwt_token = writable("");
export const myFitnessuserId = writable(null);
// user 
export const user = writable({});
let sessionUser = sessionStorage.getItem("user");
if (sessionUser) {
    user.set(JSON.parse(sessionUser));
} else {
    // create the key "user" in the session storage if it doesn't exist yet
    sessionStorage.setItem("user", {});
}
// update the user in the sessionStorage on changes
user.subscribe(user => sessionStorage.setItem("user", JSON.stringify(user)));


// isAuthenticated: we assume that users are authenticated if the property "user.name" exists
export const isAuthenticated = derived(
    user,
    $user => $user && $user.name
);

// update the jwt_token and myFitnessuserID in the sessionStorage on changes
jwt_token.subscribe(jwt_token => {
    sessionStorage.setItem("jwt_token", jwt_token);
    if (jwt_token === "") {
        myFitnessuserId.set(null)
    } else {
        var config = {
            method: "get",
            url: window.location.origin + "/api/me/fitnessuser",
            headers: { Authorization: "Bearer " + jwt_token },
        };
        axios(config)
            .then(function (response) {
                myFitnessuserId.set(response.data.id);
            })
            .catch(function (error) {
                alert("Could not get Fitnessuser associated to current user");
                console.log(error);
            });
    }
});
