import{s as Ke,e as Qe,n as Ve,r as Xe,c as Pe,a as Ze,i as xe}from"../chunks/scheduler.D14OqvYY.js";import{S as $e,i as et,e as f,s as b,c as u,k as U,f as E,a as g,d as c,l as h,o as se,g as T,h as s,r as Me,n as Ne,v as Je,q as we,m as ke,t as F,b as R,w as ze,u as tt,j as ue}from"../chunks/index.BzgZtzQZ.js";import{e as Se}from"../chunks/each.D6YF6ztN.js";import{m as He,j as lt,u as at,a as Le}from"../chunks/store.D-AUMPJs.js";import{p as st}from"../chunks/stores.BrRabyrY.js";function Be(a,l,e){const t=a.slice();return t[20]=l[e],t[22]=e,t}function Ge(a,l,e){const t=a.slice();return t[11]=l[e],t}function Ue(a){let l,e,t='<span class="icon is-small"><i class="fa-solid fa-xmark"></i></span> <span>Clear Filter</span>',n,d;return{c(){l=f("div"),e=f("button"),e.innerHTML=t,this.h()},l(o){l=u(o,"DIV",{class:!0});var v=g(l);e=u(v,"BUTTON",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-150dsk1"&&(e.innerHTML=t),v.forEach(c),this.h()},h(){h(e,"class","button is-danger"),h(l,"class","field")},m(o,v){T(o,l,v),s(l,e),n||(d=Ne(e,"click",a[9]),n=!0)},p:Ve,d(o){o&&c(l),n=!1,d()}}}function Fe(a){let l,e=a[11].fitnessuserId1!==a[6]&&Re(a);return{c(){e&&e.c(),l=ke()},l(t){e&&e.l(t),l=ke()},m(t,n){e&&e.m(t,n),T(t,l,n)},p(t,n){t[11].fitnessuserId1!==t[6]?e?e.p(t,n):(e=Re(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(t){t&&c(l),e&&e.d(t)}}}function Re(a){let l,e=a[11].fitnessuserId2!==a[6]&&We(a);return{c(){e&&e.c(),l=ke()},l(t){e&&e.l(t),l=ke()},m(t,n){e&&e.m(t,n),T(t,l,n)},p(t,n){t[11].fitnessuserId2!==t[6]?e?e.p(t,n):(e=We(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(t){t&&c(l),e&&e.d(t)}}}function We(a){let l,e,t,n,d=a[11].name+"",o,v,y=a[11].challengeType+"",M,L,w,J='<span class="icon"><i class="fas fa-dumbbell" aria-hidden="true"></i></span>',P,I,z,W=a[11].description+"",K,C,S,V,he,p=a[11].wager+"",H,k,Ce,N,_e,Q,de=a[11].startDate+"",j,be,B=a[11].endDate+"",pe,X,ae,re,ne,q=a[11].fitnesscenter+"",me,ge,$,ee,Y,Z=a[7].user_roles.includes("fitnessuser"),te,le,Ee,O,ie;function A(_,r){if(_[11].challengeState==="OPEN")return it;if(_[11].challengeState==="WAITING")return nt}let x=A(a),m=x&&x(a),i=Z&&je(a);return{c(){l=f("div"),e=f("div"),t=f("header"),n=f("p"),o=F(d),v=f("span"),M=F(y),L=b(),w=f("button"),w.innerHTML=J,P=b(),I=f("div"),z=f("div"),K=F(W),C=b(),S=f("div"),V=f("i"),he=b(),H=F(p),k=F(" CHF"),Ce=b(),N=f("div"),_e=f("i"),Q=b(),j=F(de),be=F(" - "),pe=F(B),X=b(),ae=f("div"),re=f("i"),ne=b(),me=F(q),ge=b(),$=f("div"),m&&m.c(),ee=b(),Y=f("footer"),i&&i.c(),te=b(),le=f("a"),Ee=F("Detail"),ie=b(),this.h()},l(_){l=u(_,"DIV",{class:!0});var r=g(l);e=u(r,"DIV",{class:!0});var G=g(e);t=u(G,"HEADER",{class:!0});var ce=g(t);n=u(ce,"P",{class:!0});var Te=g(n);o=R(Te,d),v=u(Te,"SPAN",{class:!0});var Oe=g(v);M=R(Oe,y),Oe.forEach(c),Te.forEach(c),L=E(ce),w=u(ce,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),U(w)!=="svelte-35016i"&&(w.innerHTML=J),ce.forEach(c),P=E(G),I=u(G,"DIV",{class:!0});var D=g(I);z=u(D,"DIV",{class:!0});var De=g(z);K=R(De,W),De.forEach(c),C=E(D),S=u(D,"DIV",{class:!0});var ve=g(S);V=u(ve,"I",{class:!0}),g(V).forEach(c),he=E(ve),H=R(ve,p),k=R(ve," CHF"),ve.forEach(c),Ce=E(D),N=u(D,"DIV",{class:!0});var fe=g(N);_e=u(fe,"I",{class:!0}),g(_e).forEach(c),Q=E(fe),j=R(fe,de),be=R(fe," - "),pe=R(fe,B),fe.forEach(c),X=E(D),ae=u(D,"DIV",{class:!0});var Ie=g(ae);re=u(Ie,"I",{class:!0}),g(re).forEach(c),ne=E(Ie),me=R(Ie,q),Ie.forEach(c),ge=E(D),$=u(D,"DIV",{class:!0});var oe=g($);m&&m.l(oe),oe.forEach(c),D.forEach(c),ee=E(G),Y=u(G,"FOOTER",{class:!0});var Ae=g(Y);i&&i.l(Ae),te=E(Ae),le=u(Ae,"A",{href:!0,class:!0});var ye=g(le);Ee=R(ye,"Detail"),ye.forEach(c),Ae.forEach(c),G.forEach(c),ie=E(r),r.forEach(c),this.h()},h(){h(v,"class","tag is-info is-light"),h(n,"class","card-header-title"),h(w,"class","card-header-icon"),h(w,"aria-label","more options"),h(t,"class","card-header"),h(z,"class","content"),h(V,"class","fa-solid fa-sack-dollar"),h(S,"class","content"),h(_e,"class","fas fa-calendar-alt"),h(N,"class","content"),h(re,"class","fa-solid fa-weight-hanging"),h(ae,"class","content"),h($,"class","content"),h(I,"class","card-content svelte-b9zz6y"),h(le,"href",O="/challenge?id="+a[11].id),h(le,"class","card-footer-item"),h(Y,"class","card-footer"),h(e,"class","card full-height-card svelte-b9zz6y"),h(l,"class","column is-one-third")},m(_,r){T(_,l,r),s(l,e),s(e,t),s(t,n),s(n,o),s(n,v),s(v,M),s(t,L),s(t,w),s(e,P),s(e,I),s(I,z),s(z,K),s(I,C),s(I,S),s(S,V),s(S,he),s(S,H),s(S,k),s(I,Ce),s(I,N),s(N,_e),s(N,Q),s(N,j),s(N,be),s(N,pe),s(I,X),s(I,ae),s(ae,re),s(ae,ne),s(ae,me),s(I,ge),s(I,$),m&&m.m($,null),s(e,ee),s(e,Y),i&&i.m(Y,null),s(Y,te),s(Y,le),s(le,Ee),s(l,ie)},p(_,r){r&8&&d!==(d=_[11].name+"")&&ue(o,d),r&8&&y!==(y=_[11].challengeType+"")&&ue(M,y),r&8&&W!==(W=_[11].description+"")&&ue(K,W),r&8&&p!==(p=_[11].wager+"")&&ue(H,p),r&8&&de!==(de=_[11].startDate+"")&&ue(j,de),r&8&&B!==(B=_[11].endDate+"")&&ue(pe,B),r&8&&q!==(q=_[11].fitnesscenter+"")&&ue(me,q),x===(x=A(_))&&m?m.p(_,r):(m&&m.d(1),m=x&&x(_),m&&(m.c(),m.m($,null))),r&128&&(Z=_[7].user_roles.includes("fitnessuser")),Z?i?i.p(_,r):(i=je(_),i.c(),i.m(Y,te)):i&&(i.d(1),i=null),r&8&&O!==(O="/challenge?id="+_[11].id)&&h(le,"href",O)},d(_){_&&c(l),m&&m.d(),i&&i.d()}}}function nt(a){let l,e,t=a[11].challengeState+"",n,d;return{c(){l=f("i"),e=b(),n=F(t),d=F(" for a competitor"),this.h()},l(o){l=u(o,"I",{class:!0}),g(l).forEach(c),e=E(o),n=R(o,t),d=R(o," for a competitor"),this.h()},h(){h(l,"class","fas fa-clock")},m(o,v){T(o,l,v),T(o,e,v),T(o,n,v),T(o,d,v)},p(o,v){v&8&&t!==(t=o[11].challengeState+"")&&ue(n,t)},d(o){o&&(c(l),c(e),c(n),c(d))}}}function it(a){let l,e,t=a[11].challengeState+"",n,d;return{c(){l=f("i"),e=b(),n=F(t),d=F(" to compete"),this.h()},l(o){l=u(o,"I",{class:!0}),g(l).forEach(c),e=E(o),n=R(o,t),d=R(o," to compete"),this.h()},h(){h(l,"class","fas fa-check")},m(o,v){T(o,l,v),T(o,e,v),T(o,n,v),T(o,d,v)},p(o,v){v&8&&t!==(t=o[11].challengeState+"")&&ue(n,t)},d(o){o&&(c(l),c(e),c(n),c(d))}}}function je(a){let l,e="Compete to me",t,n;return{c(){l=f("a"),l.textContent=e,this.h()},l(d){l=u(d,"A",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-szjoe6"&&(l.textContent=e),this.h()},h(){h(l,"class","card-footer-item")},m(d,o){T(d,l,o),t||(n=Ne(l,"click",function(){xe(a[8](a[11].id))&&a[8](a[11].id).apply(this,arguments)}),t=!0)},p(d,o){a=d},d(d){d&&c(l),t=!1,n()}}}function qe(a){let l,e=(a[11].challengeState==="OPEN"||a[11].challengeState==="WAITING")&&Fe(a);return{c(){e&&e.c(),l=ke()},l(t){e&&e.l(t),l=ke()},m(t,n){e&&e.m(t,n),T(t,l,n)},p(t,n){t[11].challengeState==="OPEN"||t[11].challengeState==="WAITING"?e?e.p(t,n):(e=Fe(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(t){t&&c(l),e&&e.d(t)}}}function Ye(a){let l,e,t=a[22]+1+"",n,d;return{c(){l=f("li"),e=f("a"),n=F(t),d=b(),this.h()},l(o){l=u(o,"LI",{});var v=g(l);e=u(v,"A",{class:!0,"aria-label":!0,href:!0});var y=g(e);n=R(y,t),y.forEach(c),d=E(v),v.forEach(c),this.h()},h(){h(e,"class","pagination-link is-current"),h(e,"aria-label",`Page ${a[22]+1}`),h(e,"href","/challenges?page="+(a[22]+1)),ze(e,"active",a[1]==a[22]+1)},m(o,v){T(o,l,v),s(l,e),s(e,n),s(l,d)},p(o,v){v&2&&ze(e,"active",o[1]==o[22]+1)},d(o){o&&c(l)}}}function ot(a){let l,e="All Challenges",t,n,d,o,v="Wager:",y,M,L,w,J,P,I="Challenge Type:",z,W,K,C,S,V,he="STAMINA",p,H="MUSCLEBUILDING",k,Ce="SPEED",N,_e="POWER",Q,de="WEIGTHLOSS",j,be="CARDIO",B,pe="AGILITY",X,ae="REACTION",re,ne,q,me='<span class="icon is-small"><i class="fa-solid fa-magnifying-glass"></i></span> <span>Search</span>',ge,$,ee,Y,Z,te,le,Ee,O=a[0]&&Ue(a),ie=Se(a[3]),A=[];for(let i=0;i<ie.length;i+=1)A[i]=qe(Ge(a,ie,i));let x=Se(Array(a[2])),m=[];for(let i=0;i<x.length;i+=1)m[i]=Ye(Be(a,x,i));return{c(){l=f("h1"),l.textContent=e,t=b(),n=f("div"),d=f("div"),o=f("label"),o.textContent=v,y=b(),M=f("div"),L=f("input"),w=b(),J=f("div"),P=f("label"),P.textContent=I,z=b(),W=f("div"),K=f("div"),C=f("select"),S=f("option"),V=f("option"),V.textContent=he,p=f("option"),p.textContent=H,k=f("option"),k.textContent=Ce,N=f("option"),N.textContent=_e,Q=f("option"),Q.textContent=de,j=f("option"),j.textContent=be,B=f("option"),B.textContent=pe,X=f("option"),X.textContent=ae,re=b(),ne=f("div"),q=f("button"),q.innerHTML=me,ge=b(),O&&O.c(),$=b(),ee=f("div");for(let i=0;i<A.length;i+=1)A[i].c();Y=b(),Z=f("nav"),te=f("ul");for(let i=0;i<m.length;i+=1)m[i].c();this.h()},l(i){l=u(i,"H1",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-1m380mg"&&(l.textContent=e),t=E(i),n=u(i,"DIV",{class:!0});var _=g(n);d=u(_,"DIV",{class:!0});var r=g(d);o=u(r,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),U(o)!=="svelte-18a5rsn"&&(o.textContent=v),y=E(r),M=u(r,"DIV",{class:!0});var G=g(M);L=u(G,"INPUT",{class:!0,type:!0,placeholder:!0}),G.forEach(c),r.forEach(c),w=E(_),J=u(_,"DIV",{class:!0});var ce=g(J);P=u(ce,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),U(P)!=="svelte-1agfax"&&(P.textContent=I),z=E(ce),W=u(ce,"DIV",{class:!0});var Te=g(W);K=u(Te,"DIV",{class:!0});var Oe=g(K);C=u(Oe,"SELECT",{});var D=g(C);S=u(D,"OPTION",{}),g(S).forEach(c),V=u(D,"OPTION",{"data-svelte-h":!0}),U(V)!=="svelte-1n8rehg"&&(V.textContent=he),p=u(D,"OPTION",{"data-svelte-h":!0}),U(p)!=="svelte-1wko3ei"&&(p.textContent=H),k=u(D,"OPTION",{"data-svelte-h":!0}),U(k)!=="svelte-1niilbk"&&(k.textContent=Ce),N=u(D,"OPTION",{"data-svelte-h":!0}),U(N)!=="svelte-1bie7cs"&&(N.textContent=_e),Q=u(D,"OPTION",{"data-svelte-h":!0}),U(Q)!=="svelte-17t4u6"&&(Q.textContent=de),j=u(D,"OPTION",{"data-svelte-h":!0}),U(j)!=="svelte-i63bda"&&(j.textContent=be),B=u(D,"OPTION",{"data-svelte-h":!0}),U(B)!=="svelte-17iizz8"&&(B.textContent=pe),X=u(D,"OPTION",{"data-svelte-h":!0}),U(X)!=="svelte-fcx342"&&(X.textContent=ae),D.forEach(c),Oe.forEach(c),Te.forEach(c),ce.forEach(c),re=E(_),ne=u(_,"DIV",{class:!0});var De=g(ne);q=u(De,"BUTTON",{class:!0,"data-svelte-h":!0}),U(q)!=="svelte-qsigio"&&(q.innerHTML=me),De.forEach(c),ge=E(_),O&&O.l(_),_.forEach(c),$=E(i),ee=u(i,"DIV",{class:!0});var ve=g(ee);for(let oe=0;oe<A.length;oe+=1)A[oe].l(ve);ve.forEach(c),Y=E(i),Z=u(i,"NAV",{class:!0,role:!0,"aria-label":!0});var fe=g(Z);te=u(fe,"UL",{class:!0});var Ie=g(te);for(let oe=0;oe<m.length;oe+=1)m[oe].l(Ie);Ie.forEach(c),fe.forEach(c),this.h()},h(){h(l,"class","title is-1"),h(o,"for","wager"),h(o,"class","label"),h(L,"class","input"),h(L,"type","number"),h(L,"placeholder","min"),h(M,"class","control"),h(d,"class","field"),h(P,"for","challengetype"),h(P,"class","label"),S.__value="ALL",se(S,S.__value),V.__value="STAMINA",se(V,V.__value),p.__value="MUSCLEBUILDING",se(p,p.__value),k.__value="SPEED",se(k,k.__value),N.__value="POWER",se(N,N.__value),Q.__value="WEIGTHLOSS",se(Q,Q.__value),j.__value="CARDIO",se(j,j.__value),B.__value="AGILITY",se(B,B.__value),X.__value="REACTION",se(X,X.__value),a[5]===void 0&&Qe(()=>a[15].call(C)),h(K,"class","select"),h(W,"class","control"),h(J,"class","field"),h(q,"class","button is-success"),h(ne,"class","field"),h(n,"class","box"),h(ee,"class","columns"),h(te,"class","pagination-list"),h(Z,"class","pagination"),h(Z,"role","navigation"),h(Z,"aria-label","pagination")},m(i,_){T(i,l,_),T(i,t,_),T(i,n,_),s(n,d),s(d,o),s(d,y),s(d,M),s(M,L),se(L,a[4]),s(n,w),s(n,J),s(J,P),s(J,z),s(J,W),s(W,K),s(K,C),s(C,S),s(C,V),s(C,p),s(C,k),s(C,N),s(C,Q),s(C,j),s(C,B),s(C,X),Me(C,a[5],!0),s(n,re),s(n,ne),s(ne,q),s(n,ge),O&&O.m(n,null),T(i,$,_),T(i,ee,_);for(let r=0;r<A.length;r+=1)A[r]&&A[r].m(ee,null);T(i,Y,_),T(i,Z,_),s(Z,te);for(let r=0;r<m.length;r+=1)m[r]&&m[r].m(te,null);le||(Ee=[Ne(L,"input",a[14]),Ne(C,"change",a[15]),Ne(q,"click",a[10])],le=!0)},p(i,[_]){if(_&16&&Je(L.value)!==i[4]&&se(L,i[4]),_&32&&Me(C,i[5]),i[0]?O?O.p(i,_):(O=Ue(i),O.c(),O.m(n,null)):O&&(O.d(1),O=null),_&456){ie=Se(i[3]);let r;for(r=0;r<ie.length;r+=1){const G=Ge(i,ie,r);A[r]?A[r].p(G,_):(A[r]=qe(G),A[r].c(),A[r].m(ee,null))}for(;r<A.length;r+=1)A[r].d(1);A.length=ie.length}if(_&6){x=Se(Array(i[2]));let r;for(r=0;r<x.length;r+=1){const G=Be(i,x,r);m[r]?m[r].p(G,_):(m[r]=Ye(G),m[r].c(),m[r].m(te,null))}for(;r<m.length;r+=1)m[r].d(1);m.length=x.length}},i:Ve,o:Ve,d(i){i&&(c(l),c(t),c(n),c($),c(ee),c(Y),c(Z)),O&&O.d(),we(A,i),we(m,i),le=!1,Xe(Ee)}}}let rt=3;function ct(a,l,e){let t,n,d,o;Pe(a,He,p=>e(6,t=p)),Pe(a,lt,p=>e(12,n=p)),Pe(a,st,p=>e(13,d=p)),Pe(a,at,p=>e(7,o=p));let v=!1;const y=d.url.origin;let M,L=0,w=[],J={name:null,startDate:null,endDate:null,wager:null,challengeType:null,fitnesscoachId:t},P,I;function z(){let p="?pageSize="+rt+"&pageNumber="+M;P&&(p+="&min="+P),I&&I!=="ALL"&&(p+="&type="+I);var H={method:"get",url:y+"/api/challenge"+p,headers:{Authorization:"Bearer "+n}};Le(H).then(function(k){e(3,w=k.data.content),e(2,L=k.data.totalPages)}).catch(function(k){alert("Could not get challenges"),console.log(k)})}function W(p){var H={method:"put",url:y+"/api/service/me/competechallenge?challengeId="+p,headers:{Authorization:"Bearer "+n}};Le(H).then(function(k){z()}).catch(function(k){alert("Could not compete to the challenge, Balance Account is too low"),console.log(k)})}function K(){var p={method:"get",url:y+"/api/service/me/myinfo",headers:{Authorization:"Bearer "+n}};Le(p).then(function(H){Ze(He,t=H.data.id,t)}).catch(function(H){alert("Could not get fitnessuser id"),console.log(H)})}function C(){e(4,P=null),e(5,I=null),e(0,v=!1),z()}function S(){e(0,v=!0),z()}function V(){P=Je(this.value),e(4,P)}function he(){I=tt(this),e(5,I)}return a.$$.update=()=>{if(a.$$.dirty&12288&&n!==""){K();let p=d.url.searchParams;p.has("page")?e(1,M=p.get("page")):e(1,M="1"),z()}},[v,M,L,w,P,I,t,o,W,C,S,J,n,d,V,he]}class vt extends $e{constructor(l){super(),et(this,l,ct,ot,Ke,{})}}export{vt as component};
