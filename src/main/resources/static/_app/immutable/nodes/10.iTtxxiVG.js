import{s as Qe,n as Ee,c as ke,a as Xe,i as De,r as Ye}from"../chunks/scheduler.D14OqvYY.js";import{S as Ze,i as $e,s as V,m as Ae,f as T,g,d as r,e as _,t as C,c as v,a as m,k as fe,b as S,l as u,h as f,j as U,q as Ve,w as Ke,n as Ne}from"../chunks/index.BzgZtzQZ.js";import{e as oe}from"../chunks/each.D6YF6ztN.js";import{p as xe}from"../chunks/stores.BJb2dh3Q.js";import{j as et,m as Pe,i as tt,u as lt,a as Ce}from"../chunks/store.uFPi0VEY.js";function we(i,e,t){const s=i.slice();return s[19]=e[t],s[21]=t,s}function Ue(i,e,t){const s=i.slice();return s[22]=e[t],s}function We(i,e,t){const s=i.slice();return s[19]=e[t],s[21]=t,s}function Oe(i,e,t){const s=i.slice();return s[22]=e[t],s}function Be(i){let e,t,s="My Created Challenges",n,a,l,c=i[4].email+"",k,y,F,N,z,P,E=oe(i[1]),d=[];for(let h=0;h<E.length;h+=1)d[h]=Le(Oe(i,E,h));let D=oe(Array(Te)),b=[];for(let h=0;h<D.length;h+=1)b[h]=Me(We(i,D,h));return{c(){e=_("div"),t=_("h1"),t.textContent=s,n=V(),a=_("p"),l=C("from "),k=C(c),y=V(),F=_("div");for(let h=0;h<d.length;h+=1)d[h].c();N=V(),z=_("nav"),P=_("ul");for(let h=0;h<b.length;h+=1)b[h].c();this.h()},l(h){e=v(h,"DIV",{class:!0});var p=m(e);t=v(p,"H1",{class:!0,"data-svelte-h":!0}),fe(t)!=="svelte-1cjw6jr"&&(t.textContent=s),n=T(p),a=v(p,"P",{class:!0});var o=m(a);l=S(o,"from "),k=S(o,c),o.forEach(r),p.forEach(r),y=T(h),F=v(h,"DIV",{class:!0});var I=m(F);for(let w=0;w<d.length;w+=1)d[w].l(I);I.forEach(r),N=T(h),z=v(h,"NAV",{class:!0,"aria-label":!0});var H=m(z);P=v(H,"UL",{class:!0});var B=m(P);for(let w=0;w<b.length;w+=1)b[w].l(B);B.forEach(r),H.forEach(r),this.h()},h(){u(t,"class","title is-1"),u(a,"class","subtitle is-3"),u(e,"class","box"),u(F,"class","columns is-multiline"),u(P,"class","pagination-list"),u(z,"class","pagination"),u(z,"aria-label","pagination")},m(h,p){g(h,e,p),f(e,t),f(e,n),f(e,a),f(a,l),f(a,k),g(h,y,p),g(h,F,p);for(let o=0;o<d.length;o+=1)d[o]&&d[o].m(F,null);g(h,N,p),g(h,z,p),f(z,P);for(let o=0;o<b.length;o+=1)b[o]&&b[o].m(P,null)},p(h,p){if(p&16&&c!==(c=h[4].email+"")&&U(k,c),p&967){E=oe(h[1]);let o;for(o=0;o<E.length;o+=1){const I=Oe(h,E,o);d[o]?d[o].p(I,p):(d[o]=Le(I),d[o].c(),d[o].m(F,null))}for(;o<d.length;o+=1)d[o].d(1);d.length=E.length}if(p&32){D=oe(Array(Te));let o;for(o=0;o<D.length;o+=1){const I=We(h,D,o);b[o]?b[o].p(I,p):(b[o]=Me(I),b[o].c(),b[o].m(P,null))}for(;o<b.length;o+=1)b[o].d(1);b.length=D.length}},d(h){h&&(r(e),r(y),r(F),r(N),r(z)),Ve(d,h),Ve(b,h)}}}function at(i){let e,t,s=i[22].challengeState+"",n;return{c(){e=_("i"),t=C(`\r
                                challenge is `),n=C(s),this.h()},l(a){e=v(a,"I",{class:!0}),m(e).forEach(r),t=S(a,`\r
                                challenge is `),n=S(a,s),this.h()},h(){u(e,"class","fa-solid fa-flag-checkered")},m(a,l){g(a,e,l),g(a,t,l),g(a,n,l)},p(a,l){l&2&&s!==(s=a[22].challengeState+"")&&U(n,s)},d(a){a&&(r(e),r(t),r(n))}}}function st(i){let e,t,s=i[22].challengeState+"",n;return{c(){e=_("i"),t=C(`\r
                                is `),n=C(s),this.h()},l(a){e=v(a,"I",{class:!0}),m(e).forEach(r),t=S(a,`\r
                                is `),n=S(a,s),this.h()},h(){u(e,"class","fa-solid fa-hourglass-start")},m(a,l){g(a,e,l),g(a,t,l),g(a,n,l)},p(a,l){l&2&&s!==(s=a[22].challengeState+"")&&U(n,s)},d(a){a&&(r(e),r(t),r(n))}}}function it(i){let e,t,s=i[22].challengeState+"",n,a;return{c(){e=_("i"),t=V(),n=C(s),a=C(" for a competitor"),this.h()},l(l){e=v(l,"I",{class:!0}),m(e).forEach(r),t=T(l),n=S(l,s),a=S(l," for a competitor"),this.h()},h(){u(e,"class","fas fa-clock")},m(l,c){g(l,e,c),g(l,t,c),g(l,n,c),g(l,a,c)},p(l,c){c&2&&s!==(s=l[22].challengeState+"")&&U(n,s)},d(l){l&&(r(e),r(t),r(n),r(a))}}}function nt(i){let e,t,s=i[22].challengeState+"",n,a;return{c(){e=_("i"),t=V(),n=C(s),a=C(" to compete"),this.h()},l(l){e=v(l,"I",{class:!0}),m(e).forEach(r),t=T(l),n=S(l,s),a=S(l," to compete"),this.h()},h(){u(e,"class","fas fa-check")},m(l,c){g(l,e,c),g(l,t,c),g(l,n,c),g(l,a,c)},p(l,c){c&2&&s!==(s=l[22].challengeState+"")&&U(n,s)},d(l){l&&(r(e),r(t),r(n),r(a))}}}function je(i){let e,t,s,n;return{c(){e=_("div"),t=_("i"),s=C(`\r
                                Winner: `),n=C(i[0]),this.h()},l(a){e=v(a,"DIV",{class:!0});var l=m(e);t=v(l,"I",{class:!0}),m(t).forEach(r),s=S(l,`\r
                                Winner: `),n=S(l,i[0]),l.forEach(r),this.h()},h(){u(t,"class","fa-solid fa-trophy"),u(e,"class","content")},m(a,l){g(a,e,l),f(e,t),f(e,s),f(e,n)},p(a,l){l&1&&U(n,a[0])},d(a){a&&r(e)}}}function rt(i){let e,t="Check Balance Account for Wager";return{c(){e=_("b"),e.textContent=t},l(s){e=v(s,"B",{"data-svelte-h":!0}),fe(e)!=="svelte-gskt66"&&(e.textContent=t)},m(s,n){g(s,e,n)},p:Ee,d(s){s&&r(e)}}}function ct(i){let e,t="One User already joined";return{c(){e=_("b"),e.textContent=t},l(s){e=v(s,"B",{"data-svelte-h":!0}),fe(e)!=="svelte-rpa9j4"&&(e.textContent=t)},m(s,n){g(s,e,n)},p:Ee,d(s){s&&r(e)}}}function ot(i){let e,t,s=i[22].fitnessuserEmail1+"",n,a,l,c="Finish Challenge",k,y,F,N=i[22].fitnessuserEmail2+"",z,P,E;return{c(){e=_("a"),t=C("Choose Winner User 1: "),n=C(s),a=V(),l=_("a"),l.textContent=c,k=V(),y=_("a"),F=C("Choose Winner User 2: "),z=C(N),this.h()},l(d){e=v(d,"A",{href:!0,class:!0});var D=m(e);t=S(D,"Choose Winner User 1: "),n=S(D,s),D.forEach(r),a=T(d),l=v(d,"A",{href:!0,class:!0,"data-svelte-h":!0}),fe(l)!=="svelte-9dekd2"&&(l.textContent=c),k=T(d),y=v(d,"A",{href:!0,class:!0});var b=m(y);F=S(b,"Choose Winner User 2: "),z=S(b,N),b.forEach(r),this.h()},h(){u(e,"href","#"),u(e,"class","card-footer-item"),u(l,"href","#"),u(l,"class","card-footer-item"),u(y,"href","#"),u(y,"class","card-footer-item")},m(d,D){g(d,e,D),f(e,t),f(e,n),g(d,a,D),g(d,l,D),g(d,k,D),g(d,y,D),f(y,F),f(y,z),P||(E=[Ne(e,"click",function(){De(i[7](i[22].fitnessuserId1))&&i[7](i[22].fitnessuserId1).apply(this,arguments)}),Ne(l,"click",function(){De(i[6](i[22].id,i[0]))&&i[6](i[22].id,i[0]).apply(this,arguments)}),Ne(y,"click",function(){De(i[8](i[22].fitnessuserId2))&&i[8](i[22].fitnessuserId2).apply(this,arguments)})],P=!0)},p(d,D){i=d,D&2&&s!==(s=i[22].fitnessuserEmail1+"")&&U(n,s),D&2&&N!==(N=i[22].fitnessuserEmail2+"")&&U(z,N)},d(d){d&&(r(e),r(a),r(l),r(k),r(y)),P=!1,Ye(E)}}}function ft(i){let e,t="Delete Challenge",s,n;return{c(){e=_("button"),e.textContent=t,this.h()},l(a){e=v(a,"BUTTON",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-zc36ty"&&(e.textContent=t),this.h()},h(){u(e,"class","card-footer-item button is-danger")},m(a,l){g(a,e,l),s||(n=Ne(e,"click",function(){De(i[9](i[22].id,i[2]))&&i[9](i[22].id,i[2]).apply(this,arguments)}),s=!0)},p(a,l){i=a},d(a){a&&r(e),s=!1,n()}}}function Le(i){let e,t,s,n,a=i[22].name+"",l,c,k=i[22].challengeType+"",y,F,N,z='<span class="icon"><i class="fas fa-dumbbell" aria-hidden="true"></i></span>',P,E,d,D=i[22].description+"",b,h,p,o,I,H=i[22].wager+"",B,w,he,L,Z,ue,$=i[22].startDate+"",ae,de,x=i[22].endDate+"",se,_e,J,ie,te,Q=i[22].fitnesscenter+"",re,ce,ee,pe,le,j,W;function q(A,O){if(A[22].challengeState==="OPEN")return nt;if(A[22].challengeState==="WAITING")return it;if(A[22].challengeState==="RUNNING")return st;if(A[22].challengeState==="FINISHED")return at}let X=q(i),M=X&&X(i),R=i[22].challengeState!="FINISHED"&&je(i);function be(A,O){if(A[22].challengeState==="OPEN")return ft;if(A[22].challengeState==="RUNNING")return ot;if(A[22].challengeState==="WAITING")return ct;if(A[22].challengeState==="FINISHED")return rt}let K=be(i),G=K&&K(i);return{c(){e=_("div"),t=_("div"),s=_("header"),n=_("p"),l=C(a),c=_("span"),y=C(k),F=V(),N=_("button"),N.innerHTML=z,P=V(),E=_("div"),d=_("div"),b=C(D),h=V(),p=_("div"),o=_("i"),I=V(),B=C(H),w=C(" CHF"),he=V(),L=_("div"),Z=_("i"),ue=V(),ae=C($),de=C(" - "),se=C(x),_e=V(),J=_("div"),ie=_("i"),te=V(),re=C(Q),ce=V(),ee=_("div"),M&&M.c(),pe=V(),R&&R.c(),le=V(),j=_("footer"),G&&G.c(),W=V(),this.h()},l(A){e=v(A,"DIV",{class:!0});var O=m(e);t=v(O,"DIV",{class:!0});var ne=m(t);s=v(ne,"HEADER",{class:!0});var ve=m(s);n=v(ve,"P",{class:!0});var me=m(n);l=S(me,a),c=v(me,"SPAN",{class:!0});var ye=m(c);y=S(ye,k),ye.forEach(r),me.forEach(r),F=T(ve),N=v(ve,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),fe(N)!=="svelte-b1yr4i"&&(N.innerHTML=z),ve.forEach(r),P=T(ne),E=v(ne,"DIV",{class:!0});var Y=m(E);d=v(Y,"DIV",{class:!0});var Fe=m(d);b=S(Fe,D),Fe.forEach(r),h=T(Y),p=v(Y,"DIV",{class:!0});var Ie=m(p);o=v(Ie,"I",{class:!0}),m(o).forEach(r),I=T(Ie),B=S(Ie,H),w=S(Ie," CHF"),Ie.forEach(r),he=T(Y),L=v(Y,"DIV",{class:!0});var ge=m(L);Z=v(ge,"I",{class:!0}),m(Z).forEach(r),ue=T(ge),ae=S(ge,$),de=S(ge," - "),se=S(ge,x),ge.forEach(r),_e=T(Y),J=v(Y,"DIV",{class:!0});var Se=m(J);ie=v(Se,"I",{class:!0}),m(ie).forEach(r),te=T(Se),re=S(Se,Q),Se.forEach(r),ce=T(Y),ee=v(Y,"DIV",{class:!0});var He=m(ee);M&&M.l(He),He.forEach(r),pe=T(Y),R&&R.l(Y),Y.forEach(r),le=T(ne),j=v(ne,"FOOTER",{class:!0});var ze=m(j);G&&G.l(ze),ze.forEach(r),ne.forEach(r),W=T(O),O.forEach(r),this.h()},h(){u(c,"class","tag is-info is-light"),u(n,"class","card-header-title"),u(N,"class","card-header-icon"),u(N,"aria-label","more options"),u(s,"class","card-header"),u(d,"class","content"),u(o,"class","fa-solid fa-sack-dollar"),u(p,"class","content"),u(Z,"class","fas fa-calendar-alt"),u(L,"class","content"),u(ie,"class","fa-solid fa-weight-hanging"),u(J,"class","content"),u(ee,"class","content"),u(E,"class","card-content svelte-zvynze"),u(j,"class","card-footer"),u(t,"class","card full-height-card svelte-zvynze"),u(e,"class","column is-half")},m(A,O){g(A,e,O),f(e,t),f(t,s),f(s,n),f(n,l),f(n,c),f(c,y),f(s,F),f(s,N),f(t,P),f(t,E),f(E,d),f(d,b),f(E,h),f(E,p),f(p,o),f(p,I),f(p,B),f(p,w),f(E,he),f(E,L),f(L,Z),f(L,ue),f(L,ae),f(L,de),f(L,se),f(E,_e),f(E,J),f(J,ie),f(J,te),f(J,re),f(E,ce),f(E,ee),M&&M.m(ee,null),f(E,pe),R&&R.m(E,null),f(t,le),f(t,j),G&&G.m(j,null),f(e,W)},p(A,O){O&2&&a!==(a=A[22].name+"")&&U(l,a),O&2&&k!==(k=A[22].challengeType+"")&&U(y,k),O&2&&D!==(D=A[22].description+"")&&U(b,D),O&2&&H!==(H=A[22].wager+"")&&U(B,H),O&2&&$!==($=A[22].startDate+"")&&U(ae,$),O&2&&x!==(x=A[22].endDate+"")&&U(se,x),O&2&&Q!==(Q=A[22].fitnesscenter+"")&&U(re,Q),X===(X=q(A))&&M?M.p(A,O):(M&&M.d(1),M=X&&X(A),M&&(M.c(),M.m(ee,null))),A[22].challengeState!="FINISHED"?R?R.p(A,O):(R=je(A),R.c(),R.m(E,null)):R&&(R.d(1),R=null),K===(K=be(A))&&G?G.p(A,O):(G&&G.d(1),G=K&&K(A),G&&(G.c(),G.m(j,null)))},d(A){A&&r(e),M&&M.d(),R&&R.d(),G&&G.d()}}}function Me(i){let e,t,s=i[21]+1+"",n,a;return{c(){e=_("li"),t=_("a"),n=C(s),a=V(),this.h()},l(l){e=v(l,"LI",{});var c=m(e);t=v(c,"A",{class:!0,"aria-label":!0,href:!0});var k=m(t);n=S(k,s),k.forEach(r),a=T(c),c.forEach(r),this.h()},h(){u(t,"class","pagination-link is-current"),u(t,"aria-label","Page 1"),u(t,"href","/challenges?page="+(i[21]+1)),Ke(t,"active",i[5]==i[21]+1)},m(l,c){g(l,e,c),f(e,t),f(t,n),f(e,a)},p:Ee,d(l){l&&r(e)}}}function Re(i){let e,t,s="My Competed Challenges",n,a,l,c=i[4].email+"",k,y,F,N,z,P,E=oe(i[1]),d=[];for(let h=0;h<E.length;h+=1)d[h]=qe(Ue(i,E,h));let D=oe(Array(Te)),b=[];for(let h=0;h<D.length;h+=1)b[h]=Je(we(i,D,h));return{c(){e=_("div"),t=_("h1"),t.textContent=s,n=V(),a=_("p"),l=C("from "),k=C(c),y=V(),F=_("div");for(let h=0;h<d.length;h+=1)d[h].c();N=V(),z=_("nav"),P=_("ul");for(let h=0;h<b.length;h+=1)b[h].c();this.h()},l(h){e=v(h,"DIV",{class:!0});var p=m(e);t=v(p,"H1",{class:!0,"data-svelte-h":!0}),fe(t)!=="svelte-u1e8hy"&&(t.textContent=s),n=T(p),a=v(p,"P",{class:!0});var o=m(a);l=S(o,"from "),k=S(o,c),o.forEach(r),p.forEach(r),y=T(h),F=v(h,"DIV",{class:!0});var I=m(F);for(let w=0;w<d.length;w+=1)d[w].l(I);I.forEach(r),N=T(h),z=v(h,"NAV",{class:!0,"aria-label":!0});var H=m(z);P=v(H,"UL",{class:!0});var B=m(P);for(let w=0;w<b.length;w+=1)b[w].l(B);B.forEach(r),H.forEach(r),this.h()},h(){u(t,"class","title is-1"),u(a,"class","subtitle is-3"),u(e,"class","box"),u(F,"class","columns is-multiline"),u(P,"class","pagination-list"),u(z,"class","pagination"),u(z,"aria-label","pagination")},m(h,p){g(h,e,p),f(e,t),f(e,n),f(e,a),f(a,l),f(a,k),g(h,y,p),g(h,F,p);for(let o=0;o<d.length;o+=1)d[o]&&d[o].m(F,null);g(h,N,p),g(h,z,p),f(z,P);for(let o=0;o<b.length;o+=1)b[o]&&b[o].m(P,null)},p(h,p){if(p&16&&c!==(c=h[4].email+"")&&U(k,c),p&6){E=oe(h[1]);let o;for(o=0;o<E.length;o+=1){const I=Ue(h,E,o);d[o]?d[o].p(I,p):(d[o]=qe(I),d[o].c(),d[o].m(F,null))}for(;o<d.length;o+=1)d[o].d(1);d.length=E.length}if(p&32){D=oe(Array(Te));let o;for(o=0;o<D.length;o+=1){const I=we(h,D,o);b[o]?b[o].p(I,p):(b[o]=Je(I),b[o].c(),b[o].m(P,null))}for(;o<b.length;o+=1)b[o].d(1);b.length=D.length}},d(h){h&&(r(e),r(y),r(F),r(N),r(z)),Ve(d,h),Ve(b,h)}}}function Ge(i){let e,t,s,n,a=i[22].name+"",l,c,k=i[22].challengeType+"",y,F,N,z='<span class="icon"><i class="fas fa-dumbbell" aria-hidden="true"></i></span>',P,E,d,D=i[22].description+"",b,h,p,o,I,H=i[22].wager+"",B,w,he,L,Z,ue,$=i[22].startDate+"",ae,de,x=i[22].endDate+"",se,_e,J,ie,te,Q,re,ce,ee;function pe(W,q){if(W[22].challengeState==="OPEN")return _t;if(W[22].challengeState==="WAITING")return dt;if(W[22].challengeState==="RUNNING")return ut;if(W[22].challengeState==="FINISHED")return ht}let le=pe(i),j=le&&le(i);return{c(){e=_("div"),t=_("div"),s=_("header"),n=_("p"),l=C(a),c=_("span"),y=C(k),F=V(),N=_("button"),N.innerHTML=z,P=V(),E=_("div"),d=_("div"),b=C(D),h=V(),p=_("div"),o=_("i"),I=V(),B=C(H),w=C(" CHF"),he=V(),L=_("div"),Z=_("i"),ue=V(),ae=C($),de=C(" - "),se=C(x),_e=V(),J=_("div"),j&&j.c(),ie=V(),te=_("footer"),Q=_("a"),re=C("Detail"),ee=V(),this.h()},l(W){e=v(W,"DIV",{class:!0});var q=m(e);t=v(q,"DIV",{class:!0});var X=m(t);s=v(X,"HEADER",{class:!0});var M=m(s);n=v(M,"P",{class:!0});var R=m(n);l=S(R,a),c=v(R,"SPAN",{class:!0});var be=m(c);y=S(be,k),be.forEach(r),R.forEach(r),F=T(M),N=v(M,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),fe(N)!=="svelte-klnzei"&&(N.innerHTML=z),M.forEach(r),P=T(X),E=v(X,"DIV",{class:!0});var K=m(E);d=v(K,"DIV",{class:!0});var G=m(d);b=S(G,D),G.forEach(r),h=T(K),p=v(K,"DIV",{class:!0});var A=m(p);o=v(A,"I",{class:!0}),m(o).forEach(r),I=T(A),B=S(A,H),w=S(A," CHF"),A.forEach(r),he=T(K),L=v(K,"DIV",{class:!0});var O=m(L);Z=v(O,"I",{class:!0}),m(Z).forEach(r),ue=T(O),ae=S(O,$),de=S(O," - "),se=S(O,x),O.forEach(r),_e=T(K),J=v(K,"DIV",{class:!0});var ne=m(J);j&&j.l(ne),ne.forEach(r),K.forEach(r),ie=T(X),te=v(X,"FOOTER",{class:!0});var ve=m(te);Q=v(ve,"A",{href:!0,class:!0});var me=m(Q);re=S(me,"Detail"),me.forEach(r),ve.forEach(r),X.forEach(r),ee=T(q),q.forEach(r),this.h()},h(){u(c,"class","tag is-info is-light"),u(n,"class","card-header-title"),u(N,"class","card-header-icon"),u(N,"aria-label","more options"),u(s,"class","card-header"),u(d,"class","content"),u(o,"class","fa-solid fa-sack-dollar"),u(p,"class","content"),u(Z,"class","fas fa-calendar-alt"),u(L,"class","content"),u(J,"class","content"),u(E,"class","card-content svelte-zvynze"),u(Q,"href",ce="/challenge?id="+i[22].id),u(Q,"class","card-footer-item"),u(te,"class","card-footer"),u(t,"class","card full-height-card svelte-zvynze"),u(e,"class","column is-one-third")},m(W,q){g(W,e,q),f(e,t),f(t,s),f(s,n),f(n,l),f(n,c),f(c,y),f(s,F),f(s,N),f(t,P),f(t,E),f(E,d),f(d,b),f(E,h),f(E,p),f(p,o),f(p,I),f(p,B),f(p,w),f(E,he),f(E,L),f(L,Z),f(L,ue),f(L,ae),f(L,de),f(L,se),f(E,_e),f(E,J),j&&j.m(J,null),f(t,ie),f(t,te),f(te,Q),f(Q,re),f(e,ee)},p(W,q){q&2&&a!==(a=W[22].name+"")&&U(l,a),q&2&&k!==(k=W[22].challengeType+"")&&U(y,k),q&2&&D!==(D=W[22].description+"")&&U(b,D),q&2&&H!==(H=W[22].wager+"")&&U(B,H),q&2&&$!==($=W[22].startDate+"")&&U(ae,$),q&2&&x!==(x=W[22].endDate+"")&&U(se,x),le===(le=pe(W))&&j?j.p(W,q):(j&&j.d(1),j=le&&le(W),j&&(j.c(),j.m(J,null))),q&2&&ce!==(ce="/challenge?id="+W[22].id)&&u(Q,"href",ce)},d(W){W&&r(e),j&&j.d()}}}function ht(i){let e,t,s=i[22].challengeState+"",n;return{c(){e=_("i"),t=C(`\r
                                    challenge is `),n=C(s),this.h()},l(a){e=v(a,"I",{class:!0}),m(e).forEach(r),t=S(a,`\r
                                    challenge is `),n=S(a,s),this.h()},h(){u(e,"class","fa-solid fa-flag-checkered")},m(a,l){g(a,e,l),g(a,t,l),g(a,n,l)},p(a,l){l&2&&s!==(s=a[22].challengeState+"")&&U(n,s)},d(a){a&&(r(e),r(t),r(n))}}}function ut(i){let e,t,s=i[22].challengeState+"",n;return{c(){e=_("i"),t=C(`\r
                                    is `),n=C(s),this.h()},l(a){e=v(a,"I",{class:!0}),m(e).forEach(r),t=S(a,`\r
                                    is `),n=S(a,s),this.h()},h(){u(e,"class","fa-solid fa-hourglass-start")},m(a,l){g(a,e,l),g(a,t,l),g(a,n,l)},p(a,l){l&2&&s!==(s=a[22].challengeState+"")&&U(n,s)},d(a){a&&(r(e),r(t),r(n))}}}function dt(i){let e,t,s=i[22].challengeState+"",n,a;return{c(){e=_("i"),t=V(),n=C(s),a=C(" for a competitor"),this.h()},l(l){e=v(l,"I",{class:!0}),m(e).forEach(r),t=T(l),n=S(l,s),a=S(l," for a competitor"),this.h()},h(){u(e,"class","fas fa-clock")},m(l,c){g(l,e,c),g(l,t,c),g(l,n,c),g(l,a,c)},p(l,c){c&2&&s!==(s=l[22].challengeState+"")&&U(n,s)},d(l){l&&(r(e),r(t),r(n),r(a))}}}function _t(i){let e,t,s=i[22].challengeState+"",n,a;return{c(){e=_("i"),t=V(),n=C(s),a=C(" to compete"),this.h()},l(l){e=v(l,"I",{class:!0}),m(e).forEach(r),t=T(l),n=S(l,s),a=S(l," to compete"),this.h()},h(){u(e,"class","fas fa-check")},m(l,c){g(l,e,c),g(l,t,c),g(l,n,c),g(l,a,c)},p(l,c){c&2&&s!==(s=l[22].challengeState+"")&&U(n,s)},d(l){l&&(r(e),r(t),r(n),r(a))}}}function qe(i){let e,t=(i[22].fitnessuserId1===i[2]||i[22].fitnessuserId2===i[2])&&Ge(i);return{c(){t&&t.c(),e=Ae()},l(s){t&&t.l(s),e=Ae()},m(s,n){t&&t.m(s,n),g(s,e,n)},p(s,n){s[22].fitnessuserId1===s[2]||s[22].fitnessuserId2===s[2]?t?t.p(s,n):(t=Ge(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(s){s&&r(e),t&&t.d(s)}}}function Je(i){let e,t,s=i[21]+1+"",n,a;return{c(){e=_("li"),t=_("a"),n=C(s),a=V(),this.h()},l(l){e=v(l,"LI",{});var c=m(e);t=v(c,"A",{class:!0,"aria-label":!0,href:!0});var k=m(t);n=S(k,s),k.forEach(r),a=T(c),c.forEach(r),this.h()},h(){u(t,"class","pagination-link is-current"),u(t,"aria-label","Page 1"),u(t,"href","/challenges?page="+(i[21]+1)),Ke(t,"active",i[5]==i[21]+1)},m(l,c){g(l,e,c),f(e,t),f(t,n),f(e,a)},p:Ee,d(l){l&&r(e)}}}function vt(i){let e=i[3]&&i[4].user_roles&&i[4].user_roles.includes("fitnesscoach"),t,s=i[3]&&i[4].user_roles&&i[4].user_roles.includes("fitnessuser"),n,a=e&&Be(i),l=s&&Re(i);return{c(){a&&a.c(),t=V(),l&&l.c(),n=Ae()},l(c){a&&a.l(c),t=T(c),l&&l.l(c),n=Ae()},m(c,k){a&&a.m(c,k),g(c,t,k),l&&l.m(c,k),g(c,n,k)},p(c,[k]){k&24&&(e=c[3]&&c[4].user_roles&&c[4].user_roles.includes("fitnesscoach")),e?a?a.p(c,k):(a=Be(c),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),k&24&&(s=c[3]&&c[4].user_roles&&c[4].user_roles.includes("fitnessuser")),s?l?l.p(c,k):(l=Re(c),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},i:Ee,o:Ee,d(c){c&&(r(t),r(n)),a&&a.d(c),l&&l.d(c)}}}let Te=0;function pt(i,e,t){let s,n,a,l,c;ke(i,et,I=>t(10,s=I)),ke(i,Pe,I=>t(2,n=I)),ke(i,xe,I=>t(11,a=I)),ke(i,tt,I=>t(3,l=I)),ke(i,lt,I=>t(4,c=I));const k=a.url.origin;let y,F="",N=null,z,P=[];function E(){var I={method:"get",url:k+"/api/challenge/fitness/"+y,headers:{Authorization:"Bearer "+s}};Ce(I).then(function(H){t(1,P=H.data)}).catch(function(H){alert("Could not get challenges. There are no challenges associated to you. Create a chellenge or compete in one."),console.log(H)})}function d(I,H){var B={method:"put",url:k+"/api/service/finishchallenge?challengeId="+I+"&winnerEmail="+H,headers:{Authorization:"Bearer "+s}};Ce(B).then(function(w){alert("Challenge set as finished"),E()}).catch(function(w){alert("Could not finish challenge"),console.log(w)})}function D(I){var H={method:"get",url:k+"/api/fitnessuser/"+I,headers:{Authorization:"Bearer "+s}};Ce(H).then(function(B){B.data,t(0,F=B.data.email)}).catch(function(B){alert("Could not get fitnessuser id"),console.log(B)})}function b(){var I={method:"get",url:k+"/api/service/me/myinfo",headers:{Authorization:"Bearer "+s}};Ce(I).then(function(H){Xe(Pe,n=H.data.id,n)}).catch(function(H){alert("Could not get fitnessuser id"),console.log(H)})}function h(I){N=I,D(N)}function p(I){N=I,D(N)}function o(I,H){var B={method:"delete",url:k+"/api/challenge/"+H+"/"+I,headers:{Authorization:"Bearer "+s}};Ce(B).then(function(w){alert("Challenge deleted"),E()}).catch(function(w){alert("Could not delete challenge, Challenge is already running or finished"),console.log(w)})}return i.$$.update=()=>{i.$$.dirty&3072&&(y=a.url.searchParams.get("id"),s!==""&&b(),E())},[F,P,n,l,c,z,d,h,p,o,s,a]}class kt extends Ze{constructor(e){super(),$e(this,e,pt,vt,Qe,{})}}export{kt as component};
