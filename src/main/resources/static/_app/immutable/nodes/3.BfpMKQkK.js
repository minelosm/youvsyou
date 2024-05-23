import{s as ye,n as $,c as x,a as ze,b as Pe}from"../chunks/scheduler.D14OqvYY.js";import{S as Le,i as Se,m as de,g as T,d as r,e as f,c as _,k as P,l as p,s as I,t as B,f as D,a as E,b as j,h as a,j as y,n as Ne}from"../chunks/index.BzgZtzQZ.js";import{m as Ve,j as Ue,u as qe,i as Ge,a as Oe}from"../chunks/store.BY1jNIC8.js";import{p as Re}from"../chunks/stores.D7hZxBcF.js";import{g as Ye}from"../chunks/entry.Bfe3KXsj.js";function We(i){let e,n="Waiting...";return{c(){e=f("h1"),e.textContent=n,this.h()},l(o){e=_(o,"H1",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-1wfdhs8"&&(e.textContent=n),this.h()},h(){p(e,"class","title is-1")},m(o,s){T(o,e,s)},p:$,d(o){o&&r(e)}}}function Je(i){let e,n="Account Details",o,s,l,c,d=i[1].given_name+"",h,b,m=i[1].family_name+"",z,L,A,v,F,S,U,H,ee,te,he,V,q,K=i[1].nickname+"",le,me,G,Q=i[1].email+"",se,ve,w,M,O,Ie="First Name:",pe,X=i[1].given_name+"",ie,be,N,R,De="Surname:",Ce,Z=i[1].family_name+"",ne,ge,ae,ke=i[1].user_roles&&i[1].user_roles.includes("fitnessuser")&&i[0].birthDate==null,Y,Ee=i[1].user_roles&&i[1].user_roles.includes("fitnesscoach")&&i[0].fitnesscenter==null,W,C=i[1].user_roles&&i[1].user_roles.length>0&&Be(i),g=ke&&je(i),k=Ee&&Me(i);return{c(){e=f("h1"),e.textContent=n,o=I(),s=f("p"),l=B("for "),c=f("b"),h=B(d),b=I(),z=B(m),L=I(),A=f("div"),v=f("div"),F=f("div"),S=f("div"),U=f("figure"),H=f("img"),he=I(),V=f("div"),q=f("p"),le=B(K),me=I(),G=f("p"),se=B(Q),ve=I(),w=f("div"),M=f("p"),O=f("b"),O.textContent=Ie,pe=I(),ie=B(X),be=I(),N=f("p"),R=f("b"),R.textContent=De,Ce=I(),ne=B(Z),ge=I(),C&&C.c(),ae=I(),g&&g.c(),Y=I(),k&&k.c(),W=de(),this.h()},l(t){e=_(t,"H1",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-1gdhzbi"&&(e.textContent=n),o=D(t),s=_(t,"P",{class:!0});var u=E(s);l=j(u,"for "),c=_(u,"B",{});var re=E(c);h=j(re,d),b=D(re),z=j(re,m),re.forEach(r),u.forEach(r),L=D(t),A=_(t,"DIV",{class:!0});var Fe=E(A);v=_(Fe,"DIV",{class:!0});var oe=E(v);F=_(oe,"DIV",{class:!0});var ue=E(F);S=_(ue,"DIV",{class:!0});var Te=E(S);U=_(Te,"FIGURE",{class:!0});var we=E(U);H=_(we,"IMG",{src:!0,alt:!0}),we.forEach(r),Te.forEach(r),he=D(ue),V=_(ue,"DIV",{class:!0});var ce=E(V);q=_(ce,"P",{class:!0});var Ae=E(q);le=j(Ae,K),Ae.forEach(r),me=D(ce),G=_(ce,"P",{class:!0});var He=E(G);se=j(He,Q),He.forEach(r),ce.forEach(r),ue.forEach(r),ve=D(oe),w=_(oe,"DIV",{class:!0});var J=E(w);M=_(J,"P",{});var fe=E(M);O=_(fe,"B",{"data-svelte-h":!0}),P(O)!=="svelte-iznlmt"&&(O.textContent=Ie),pe=D(fe),ie=j(fe,X),fe.forEach(r),be=D(J),N=_(J,"P",{});var _e=E(N);R=_(_e,"B",{"data-svelte-h":!0}),P(R)!=="svelte-17zsinn"&&(R.textContent=De),Ce=D(_e),ne=j(_e,Z),_e.forEach(r),ge=D(J),C&&C.l(J),J.forEach(r),oe.forEach(r),Fe.forEach(r),ae=D(t),g&&g.l(t),Y=D(t),k&&k.l(t),W=de(),this.h()},h(){p(e,"class","title is-1"),p(s,"class","subtitle is-3"),Pe(H.src,ee=i[1].picture)||p(H,"src",ee),p(H,"alt",te=i[1].picture),p(U,"class","image is-96x96"),p(S,"class","media-left"),p(q,"class","title is-4"),p(G,"class","subtitle is-6"),p(V,"class","media-content"),p(F,"class","media"),p(w,"class","content"),p(v,"class","card-content"),p(A,"class","card")},m(t,u){T(t,e,u),T(t,o,u),T(t,s,u),a(s,l),a(s,c),a(c,h),a(c,b),a(c,z),T(t,L,u),T(t,A,u),a(A,v),a(v,F),a(F,S),a(S,U),a(U,H),a(F,he),a(F,V),a(V,q),a(q,le),a(V,me),a(V,G),a(G,se),a(v,ve),a(v,w),a(w,M),a(M,O),a(M,pe),a(M,ie),a(w,be),a(w,N),a(N,R),a(N,Ce),a(N,ne),a(w,ge),C&&C.m(w,null),T(t,ae,u),g&&g.m(t,u),T(t,Y,u),k&&k.m(t,u),T(t,W,u)},p(t,u){u&2&&d!==(d=t[1].given_name+"")&&y(h,d),u&2&&m!==(m=t[1].family_name+"")&&y(z,m),u&2&&!Pe(H.src,ee=t[1].picture)&&p(H,"src",ee),u&2&&te!==(te=t[1].picture)&&p(H,"alt",te),u&2&&K!==(K=t[1].nickname+"")&&y(le,K),u&2&&Q!==(Q=t[1].email+"")&&y(se,Q),u&2&&X!==(X=t[1].given_name+"")&&y(ie,X),u&2&&Z!==(Z=t[1].family_name+"")&&y(ne,Z),t[1].user_roles&&t[1].user_roles.length>0?C?C.p(t,u):(C=Be(t),C.c(),C.m(w,null)):C&&(C.d(1),C=null),u&3&&(ke=t[1].user_roles&&t[1].user_roles.includes("fitnessuser")&&t[0].birthDate==null),ke?g?g.p(t,u):(g=je(t),g.c(),g.m(Y.parentNode,Y)):g&&(g.d(1),g=null),u&3&&(Ee=t[1].user_roles&&t[1].user_roles.includes("fitnesscoach")&&t[0].fitnesscenter==null),Ee?k?k.p(t,u):(k=Me(t),k.c(),k.m(W.parentNode,W)):k&&(k.d(1),k=null)},d(t){t&&(r(e),r(o),r(s),r(L),r(A),r(ae),r(Y),r(W)),C&&C.d(),g&&g.d(t),k&&k.d(t)}}}function Be(i){let e,n,o="Roles:",s,l=i[1].user_roles+"",c;return{c(){e=f("p"),n=f("b"),n.textContent=o,s=I(),c=B(l)},l(d){e=_(d,"P",{});var h=E(e);n=_(h,"B",{"data-svelte-h":!0}),P(n)!=="svelte-nl7aub"&&(n.textContent=o),s=D(h),c=j(h,l),h.forEach(r)},m(d,h){T(d,e,h),a(e,n),a(e,s),a(e,c)},p(d,h){h&2&&l!==(l=d[1].user_roles+"")&&y(c,l)},d(d){d&&r(e)}}}function je(i){let e,n,o="You can Fullfill your Account here",s,l,c='<span class="icon"><i class="fa-solid fa-user-pen"></i></span> <span>Fullfill Account</span>',d,h;return{c(){e=f("div"),n=f("h1"),n.textContent=o,s=I(),l=f("button"),l.innerHTML=c,this.h()},l(b){e=_(b,"DIV",{class:!0});var m=E(e);n=_(m,"H1",{class:!0,"data-svelte-h":!0}),P(n)!=="svelte-1mrgbbi"&&(n.textContent=o),s=D(m),l=_(m,"BUTTON",{class:!0,"data-svelte-h":!0}),P(l)!=="svelte-1bi25jv"&&(l.innerHTML=c),m.forEach(r),this.h()},h(){p(n,"class","title is-1"),p(l,"class","button is-fullwidth is-success"),p(e,"class","box")},m(b,m){T(b,e,m),a(e,n),a(e,s),a(e,l),d||(h=Ne(l,"click",i[5]),d=!0)},p:$,d(b){b&&r(e),d=!1,h()}}}function Me(i){let e,n,o="You can Fullfill your Account here",s,l,c='<span class="icon"><i class="fa-solid fa-user-pen"></i></span> <span>Fullfill Account</span>',d,h;return{c(){e=f("div"),n=f("h1"),n.textContent=o,s=I(),l=f("button"),l.innerHTML=c,this.h()},l(b){e=_(b,"DIV",{class:!0});var m=E(e);n=_(m,"H1",{class:!0,"data-svelte-h":!0}),P(n)!=="svelte-1mrgbbi"&&(n.textContent=o),s=D(m),l=_(m,"BUTTON",{class:!0,"data-svelte-h":!0}),P(l)!=="svelte-1bi25jv"&&(l.innerHTML=c),m.forEach(r),this.h()},h(){p(n,"class","title is-1"),p(l,"class","button is-fullwidth is-success"),p(e,"class","box")},m(b,m){T(b,e,m),a(e,n),a(e,s),a(e,l),d||(h=Ne(l,"click",i[6]),d=!0)},p:$,d(b){b&&r(e),d=!1,h()}}}function Ke(i){let e;function n(l,c){return l[2]?Je:We}let o=n(i),s=o(i);return{c(){s.c(),e=de()},l(l){s.l(l),e=de()},m(l,c){s.m(l,c),T(l,e,c)},p(l,[c]){o===(o=n(l))&&s?s.p(l,c):(s.d(1),s=o(l),s&&(s.c(),s.m(e.parentNode,e)))},i:$,o:$,d(l){l&&r(e),s.d(l)}}}function Qe(i,e,n){let o,s,l,c,d;x(i,Ve,v=>n(7,o=v)),x(i,Ue,v=>n(4,s=v)),x(i,qe,v=>n(1,l=v)),x(i,Re,v=>n(8,c=v)),x(i,Ge,v=>n(2,d=v));function h(v){Ye(v)}const b=c.url.origin;let m={id:null,email:l.email,name:null,birthDate:null,height:null,weight:null,fitnesscenter:null};function z(){var v={method:"get",url:b+"/api/service/me/myinfo",headers:{Authorization:"Bearer "+s}};Oe(v).then(function(F){ze(Ve,o=F.data.id,o),n(0,m=F.data),console.log(m)}).catch(function(F){alert("Could not get fitnessuser id"),console.log(F)})}const L=()=>h("/accountedit"),A=()=>h("/accountedit");return i.$$.update=()=>{i.$$.dirty&16&&s!==""&&z()},[m,l,d,h,s,L,A]}class tt extends Le{constructor(e){super(),Se(this,e,Qe,Ke,ye,{})}}export{tt as component};