import{o as g}from"./auth0-spa-js.production.esm.D13UjCU2.js";import{a as c,j as u,u as l}from"./store.CfQOhxLI.js";import{g as d}from"./entry.B8i4fb81.js";const n={auth0_domain:"dev-gmrk0dyb2x6q64ad.us.auth0.com",auth0_client_id:"JKgVCghDdbXOOlMQNqcrdchmRXtl9HX6"};let r;async function m(){r=await g({domain:n.auth0_domain,clientId:n.auth0_client_id})}function f(o,i,t=null,a=null){var e={method:"post",url:`https://${n.auth0_domain}/dbconnections/signup`,data:{client_id:n.auth0_client_id,email:o,password:i,connection:"Username-Password-Authentication"}};t&&t.length>0&&(e.data.given_name=t),a&&a.length>0&&(e.data.family_name=a),c(e).then(s=>{setTimeout(()=>{h(o,i,!0)},2e3)}).catch(function(s){alert("signup failed: "+s),console.log(s)})}function h(o,i,t=!1){var a={method:"post",url:`https://${n.auth0_domain}/oauth/token`,data:{grant_type:"password",username:o,password:i,audience:`https://${n.auth0_domain}/api/v2/`,scope:"openid profile email",client_id:n.auth0_client_id}};c(a).then(e=>{const{id_token:s,access_token:p}=e.data;u.set(s),console.log(s),_(p),t&&setTimeout(()=>{d("/")},500)}).catch(function(e){alert("login failed"),console.log(e)})}function _(o){var i={method:"get",url:`https://${n.auth0_domain}/oauth/userinfo`,headers:{"Content-Type":"application/json",Authorization:"Bearer "+o}};c(i).then(t=>{const a=t.data;l.set(a)}).catch(function(t){alert("getUserInfo failed"),console.log(t)})}async function w(){try{await m(),l.set({}),u.set(""),await r.logout({logoutParams:{returnTo:window.location.origin}})}catch(o){console.error(o)}d("/")}const C={signup:f,login:h,logout:w};export{C as a};
