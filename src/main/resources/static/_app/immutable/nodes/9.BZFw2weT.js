import{s as Ve,n as ve,c as de,r as Oe,b as ze}from"../chunks/scheduler.ChOpgImw.js";import{S as Ge,i as Ye,s as E,m as Be,f as y,g as H,d,e as _,c as p,k as $,a as T,l as F,h as n,p as Ue,t as A,b as w,o as Te,j}from"../chunks/index.D2iMMSY1.js";import{e as ge}from"../chunks/each.D6YF6ztN.js";import{p as qe}from"../chunks/stores.CWPlaEI4.js";import{m as He,j as Je,i as Ke,u as Qe,a as pe}from"../chunks/store.BW9bcFzt.js";function We(t,e,a){const l=t.slice();return l[20]=e[a],l}function Me(t,e,a){const l=t.slice();return l[20]=e[a],l}function Pe(t){let e,a="My Created Challenges",l,o,h,f='<tr><th scope="col">Challenge ID</th> <th scope="col">Description</th> <th scope="col">Type</th> <th scope="col">Wager</th> <th scope="col">State</th> <th scope="col">Fitnessuser Id1</th> <th scope="col">Fitnessuser Id2</th> <th scope="col">Actions</th> <th scope="col">Actions to Finish</th> <th scope="col">View Single</th></tr>',c,g,k=ge(t[2]),i=[];for(let s=0;s<k.length;s+=1)i[s]=je(Me(t,k,s));return{c(){e=_("h1"),e.textContent=a,l=E(),o=_("table"),h=_("thead"),h.innerHTML=f,c=E(),g=_("tbody");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=p(s,"H1",{"data-svelte-h":!0}),$(e)!=="svelte-12o0bl6"&&(e.textContent=a),l=y(s),o=p(s,"TABLE",{class:!0});var b=T(o);h=p(b,"THEAD",{"data-svelte-h":!0}),$(h)!=="svelte-aogs9a"&&(h.innerHTML=f),c=y(b),g=p(b,"TBODY",{});var r=T(g);for(let C=0;C<i.length;C+=1)i[C].l(r);r.forEach(d),b.forEach(d),this.h()},h(){F(o,"class","table")},m(s,b){H(s,e,b),H(s,l,b),H(s,o,b),n(o,h),n(o,c),n(o,g);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(g,null)},p(s,b){if(b&231){k=ge(s[2]);let r;for(r=0;r<k.length;r+=1){const C=Me(s,k,r);i[r]?i[r].p(C,b):(i[r]=je(C),i[r].c(),i[r].m(g,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=k.length}},d(s){s&&(d(e),d(l),d(o)),Ue(i,s)}}}function Xe(t){let e,a="Finished";return{c(){e=_("span"),e.textContent=a,this.h()},l(l){e=p(l,"SPAN",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1pyhy73"&&(e.textContent=a),this.h()},h(){F(e,"class","badge bg-success")},m(l,o){H(l,e,o)},d(l){l&&d(e)}}}function Ze(t){let e,a="Running";return{c(){e=_("span"),e.textContent=a,this.h()},l(l){e=p(l,"SPAN",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-bkp6rd"&&(e.textContent=a),this.h()},h(){F(e,"class","badge bg-secondary")},m(l,o){H(l,e,o)},d(l){l&&d(e)}}}function $e(t){let e,a="Finish Challenge",l,o;function h(){return t[12](t[20])}return{c(){e=_("button"),e.textContent=a,this.h()},l(f){e=p(f,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),$(e)!=="svelte-h146dd"&&(e.textContent=a),this.h()},h(){F(e,"type","button"),F(e,"class","btn btn-primary btn-sm")},m(f,c){H(f,e,c),l||(o=Te(e,"click",h),l=!0)},p(f,c){t=f},d(f){f&&d(e),l=!1,o()}}}function xe(t){let e,a="Select a winner";return{c(){e=_("span"),e.textContent=a,this.h()},l(l){e=p(l,"SPAN",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-fr2vui"&&(e.textContent=a),this.h()},h(){F(e,"class","badge bg-info")},m(l,o){H(l,e,o)},p:ve,d(l){l&&d(e)}}}function je(t){let e,a,l=t[20].id+"",o,h,f,c=t[20].description+"",g,k,i,s=t[20].challengeType+"",b,r,C,W=t[20].wager+"",V,x,M,P=t[20].challengeState+"",G,ee,L,u,S,B=t[20].fitnessuserId1+"",R,te,J,U,K,le=t[20].fitnessuserId2+"",Q,Y,X,se,Z,ae,O,I,D,m,ie,re,ce;function ue(){return t[10](t[20])}function _e(){return t[11](t[20])}function he(z,v){if(z[20].challengeState==="RUNNING")return Ze;if(z[20].challengeState==="FINISHED")return Xe}let ne=he(t),N=ne&&ne(t);function fe(z,v){return z[1]==null?xe:$e}let oe=fe(t),q=oe(t);return{c(){e=_("tr"),a=_("td"),o=A(l),h=E(),f=_("td"),g=A(c),k=E(),i=_("td"),b=A(s),r=E(),C=_("td"),V=A(W),x=E(),M=_("td"),G=A(P),ee=E(),L=_("td"),u=_("button"),S=A("Select Winner: "),R=A(B),te=E(),J=_("td"),U=_("button"),K=A("Select Winner: "),Q=A(le),Y=E(),X=_("td"),N&&N.c(),se=E(),Z=_("td"),q.c(),ae=E(),O=_("td"),I=_("a"),D=A("View"),ie=E(),this.h()},l(z){e=p(z,"TR",{});var v=T(e);a=p(v,"TD",{});var Ce=T(a);o=w(Ce,l),Ce.forEach(d),h=y(v),f=p(v,"TD",{});var ke=T(f);g=w(ke,c),ke.forEach(d),k=y(v),i=p(v,"TD",{});var Ee=T(i);b=w(Ee,s),Ee.forEach(d),r=y(v),C=p(v,"TD",{});var ye=T(C);V=w(ye,W),ye.forEach(d),x=y(v),M=p(v,"TD",{});var De=T(M);G=w(De,P),De.forEach(d),ee=y(v),L=p(v,"TD",{});var Ie=T(L);u=p(Ie,"BUTTON",{type:!0,class:!0});var be=T(u);S=w(be,"Select Winner: "),R=w(be,B),be.forEach(d),Ie.forEach(d),te=y(v),J=p(v,"TD",{});var Se=T(J);U=p(Se,"BUTTON",{type:!0,class:!0});var me=T(U);K=w(me,"Select Winner: "),Q=w(me,le),me.forEach(d),Se.forEach(d),Y=y(v),X=p(v,"TD",{});var Ae=T(X);N&&N.l(Ae),Ae.forEach(d),se=y(v),Z=p(v,"TD",{});var we=T(Z);q.l(we),we.forEach(d),ae=y(v),O=p(v,"TD",{});var Ne=T(O);I=p(Ne,"A",{href:!0});var Fe=T(I);D=w(Fe,"View"),Fe.forEach(d),Ne.forEach(d),ie=y(v),v.forEach(d),this.h()},h(){F(u,"type","button"),F(u,"class","btn btn-primary btn-sm"),F(U,"type","button"),F(U,"class","btn btn-primary btn-sm"),F(I,"href",m="/challenge?id="+t[20].id)},m(z,v){H(z,e,v),n(e,a),n(a,o),n(e,h),n(e,f),n(f,g),n(e,k),n(e,i),n(i,b),n(e,r),n(e,C),n(C,V),n(e,x),n(e,M),n(M,G),n(e,ee),n(e,L),n(L,u),n(u,S),n(u,R),n(e,te),n(e,J),n(J,U),n(U,K),n(U,Q),n(e,Y),n(e,X),N&&N.m(X,null),n(e,se),n(e,Z),q.m(Z,null),n(e,ae),n(e,O),n(O,I),n(I,D),n(e,ie),re||(ce=[Te(u,"click",ue),Te(U,"click",_e)],re=!0)},p(z,v){t=z,v&4&&l!==(l=t[20].id+"")&&j(o,l),v&4&&c!==(c=t[20].description+"")&&j(g,c),v&4&&s!==(s=t[20].challengeType+"")&&j(b,s),v&4&&W!==(W=t[20].wager+"")&&j(V,W),v&4&&P!==(P=t[20].challengeState+"")&&j(G,P),v&4&&B!==(B=t[20].fitnessuserId1+"")&&j(R,B),v&4&&le!==(le=t[20].fitnessuserId2+"")&&j(Q,le),ne!==(ne=he(t))&&(N&&N.d(1),N=ne&&ne(t),N&&(N.c(),N.m(X,null))),oe===(oe=fe(t))&&q?q.p(t,v):(q.d(1),q=oe(t),q&&(q.c(),q.m(Z,null))),v&4&&m!==(m="/challenge?id="+t[20].id)&&F(I,"href",m)},d(z){z&&d(e),N&&N.d(),q.d(),re=!1,Oe(ce)}}}function Le(t){let e,a="My Competed Challenges",l,o,h,f='<tr><th scope="col">Challenge ID</th> <th scope="col">Description</th> <th scope="col">Type</th> <th scope="col">Wager</th> <th scope="col">State</th> <th scope="col">Fitnessuser Id1</th> <th scope="col">Fitnessuser Id2</th> <th scope="col">Actions</th> <th scope="col">View Single</th></tr>',c,g,k=ge(t[2]),i=[];for(let s=0;s<k.length;s+=1)i[s]=Re(We(t,k,s));return{c(){e=_("h1"),e.textContent=a,l=E(),o=_("table"),h=_("thead"),h.innerHTML=f,c=E(),g=_("tbody");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=p(s,"H1",{"data-svelte-h":!0}),$(e)!=="svelte-1ig9409"&&(e.textContent=a),l=y(s),o=p(s,"TABLE",{class:!0});var b=T(o);h=p(b,"THEAD",{"data-svelte-h":!0}),$(h)!=="svelte-1jybdjp"&&(h.innerHTML=f),c=y(b),g=p(b,"TBODY",{});var r=T(g);for(let C=0;C<i.length;C+=1)i[C].l(r);r.forEach(d),b.forEach(d),this.h()},h(){F(o,"class","table")},m(s,b){H(s,e,b),H(s,l,b),H(s,o,b),n(o,h),n(o,c),n(o,g);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(g,null)},p(s,b){if(b&4){k=ge(s[2]);let r;for(r=0;r<k.length;r+=1){const C=We(s,k,r);i[r]?i[r].p(C,b):(i[r]=Re(C),i[r].c(),i[r].m(g,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=k.length}},d(s){s&&(d(e),d(l),d(o)),Ue(i,s)}}}function et(t){let e,a="Finished";return{c(){e=_("span"),e.textContent=a,this.h()},l(l){e=p(l,"SPAN",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1pyhy73"&&(e.textContent=a),this.h()},h(){F(e,"class","badge bg-success")},m(l,o){H(l,e,o)},d(l){l&&d(e)}}}function tt(t){let e,a="Running";return{c(){e=_("span"),e.textContent=a,this.h()},l(l){e=p(l,"SPAN",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-bkp6rd"&&(e.textContent=a),this.h()},h(){F(e,"class","badge bg-secondary")},m(l,o){H(l,e,o)},d(l){l&&d(e)}}}function Re(t){let e,a,l=t[20].id+"",o,h,f,c=t[20].description+"",g,k,i,s=t[20].challengeType+"",b,r,C,W=t[20].wager+"",V,x,M,P=t[20].challengeState+"",G,ee,L,u=t[20].fitnessuserId1+"",S,B,R,te=t[20].fitnessuserId2+"",J,U,K,le,Q,Y,X,se,Z;function ae(D,m){if(D[20].challengeState==="RUNNING")return tt;if(D[20].challengeState==="FINISHED")return et}let O=ae(t),I=O&&O(t);return{c(){e=_("tr"),a=_("td"),o=A(l),h=E(),f=_("td"),g=A(c),k=E(),i=_("td"),b=A(s),r=E(),C=_("td"),V=A(W),x=E(),M=_("td"),G=A(P),ee=E(),L=_("td"),S=A(u),B=E(),R=_("td"),J=A(te),U=E(),K=_("td"),I&&I.c(),le=E(),Q=_("td"),Y=_("a"),X=A("View"),Z=E(),this.h()},l(D){e=p(D,"TR",{});var m=T(e);a=p(m,"TD",{});var ie=T(a);o=w(ie,l),ie.forEach(d),h=y(m),f=p(m,"TD",{});var re=T(f);g=w(re,c),re.forEach(d),k=y(m),i=p(m,"TD",{});var ce=T(i);b=w(ce,s),ce.forEach(d),r=y(m),C=p(m,"TD",{});var ue=T(C);V=w(ue,W),ue.forEach(d),x=y(m),M=p(m,"TD",{});var _e=T(M);G=w(_e,P),_e.forEach(d),ee=y(m),L=p(m,"TD",{});var he=T(L);S=w(he,u),he.forEach(d),B=y(m),R=p(m,"TD",{});var ne=T(R);J=w(ne,te),ne.forEach(d),U=y(m),K=p(m,"TD",{});var N=T(K);I&&I.l(N),N.forEach(d),le=y(m),Q=p(m,"TD",{});var fe=T(Q);Y=p(fe,"A",{href:!0});var oe=T(Y);X=w(oe,"View"),oe.forEach(d),fe.forEach(d),Z=y(m),m.forEach(d),this.h()},h(){F(Y,"href",se="/challenge?id="+t[20].id)},m(D,m){H(D,e,m),n(e,a),n(a,o),n(e,h),n(e,f),n(f,g),n(e,k),n(e,i),n(i,b),n(e,r),n(e,C),n(C,V),n(e,x),n(e,M),n(M,G),n(e,ee),n(e,L),n(L,S),n(e,B),n(e,R),n(R,J),n(e,U),n(e,K),I&&I.m(K,null),n(e,le),n(e,Q),n(Q,Y),n(Y,X),n(e,Z)},p(D,m){m&4&&l!==(l=D[20].id+"")&&j(o,l),m&4&&c!==(c=D[20].description+"")&&j(g,c),m&4&&s!==(s=D[20].challengeType+"")&&j(b,s),m&4&&W!==(W=D[20].wager+"")&&j(V,W),m&4&&P!==(P=D[20].challengeState+"")&&j(G,P),m&4&&u!==(u=D[20].fitnessuserId1+"")&&j(S,u),m&4&&te!==(te=D[20].fitnessuserId2+"")&&j(J,te),O!==(O=ae(D))&&(I&&I.d(1),I=O&&O(D),I&&(I.c(),I.m(K,null))),m&4&&se!==(se="/challenge?id="+D[20].id)&&F(Y,"href",se)},d(D){D&&d(e),I&&I.d()}}}function lt(t){let e=t[3]&&t[4].user_roles&&t[4].user_roles.includes("fitnesscoach"),a,l=t[3]&&t[4].user_roles&&t[4].user_roles.includes("fitnessuser"),o,h=e&&Pe(t),f=l&&Le(t);return{c(){h&&h.c(),a=E(),f&&f.c(),o=Be()},l(c){h&&h.l(c),a=y(c),f&&f.l(c),o=Be()},m(c,g){h&&h.m(c,g),H(c,a,g),f&&f.m(c,g),H(c,o,g)},p(c,[g]){g&24&&(e=c[3]&&c[4].user_roles&&c[4].user_roles.includes("fitnesscoach")),e?h?h.p(c,g):(h=Pe(c),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null),g&24&&(l=c[3]&&c[4].user_roles&&c[4].user_roles.includes("fitnessuser")),l?f?f.p(c,g):(f=Le(c),f.c(),f.m(o.parentNode,o)):f&&(f.d(1),f=null)},i:ve,o:ve,d(c){c&&(d(a),d(o)),h&&h.d(c),f&&f.d(c)}}}function nt(t,e,a){let l,o,h,f,c;de(t,He,u=>a(15,l=u)),de(t,Je,u=>a(8,o=u)),de(t,qe,u=>a(9,h=u)),de(t,Ke,u=>a(3,f=u)),de(t,Qe,u=>a(4,c=u));const g=h.url.origin;let k,i="",s=null,b=[],r=[];function C(){var u={method:"get",url:g+"/api/challenge/fitness/"+k,headers:{Authorization:"Bearer "+o}};pe(u).then(function(S){a(2,r=S.data)}).catch(function(S){alert("Could not get challenges"),console.log(S)})}function W(u,S){var B={method:"put",url:g+"/api/service/finishchallenge?challengeId="+u+"&winnerEmail="+S,headers:{Authorization:"Bearer "+o}};pe(B).then(function(R){C()}).catch(function(R){alert("Could not finish challenge"),console.log(R)})}function V(u){var S={method:"get",url:g+"/api/fitnessuser/"+u,headers:{Authorization:"Bearer "+o}};pe(S).then(function(B){b=B.data,a(0,i=B.data.email),console.log(b),console.log(i)}).catch(function(B){alert("Could not get fitnessuser id"),console.log(B)})}function x(){var u={method:"get",url:g+"/api/service/me/myinfo",headers:{Authorization:"Bearer "+o}};pe(u).then(function(S){ze(He,l=S.data.id,l)}).catch(function(S){alert("Could not get fitnessuser id"),console.log(S)})}function M(u){a(1,s=u),console.log(s),V(s)}function P(u){a(1,s=u),console.log(s),V(s)}const G=u=>{M(u.fitnessuserId1)},ee=u=>{P(u.fitnessuserId2)},L=u=>{W(u.id,i)};return t.$$.update=()=>{t.$$.dirty&768&&(k=h.url.searchParams.get("id"),o!==""&&x(),C())},[i,s,r,f,c,W,M,P,o,h,G,ee,L]}class ct extends Ge{constructor(e){super(),Ye(this,e,nt,lt,Ve,{})}}export{ct as component};
