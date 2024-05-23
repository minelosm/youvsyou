import{s as Qe,n as Ee,c as ke,a as Xe,i as Se,r as Ye}from"../chunks/scheduler.D14OqvYY.js";import{S as Ze,i as $e,s as V,m as Ae,f as T,g,d as r,e as _,t as k,c as v,a as m,k as he,b as C,l as u,h as f,j as W,q as Ve,w as Ke,n as Ne}from"../chunks/index.BzgZtzQZ.js";import{e as fe}from"../chunks/each.D6YF6ztN.js";import{p as xe}from"../chunks/stores.D7hZxBcF.js";import{j as et,m as ze,i as tt,u as lt,a as Ce}from"../chunks/store.BY1jNIC8.js";function Pe(i,e,t){const s=i.slice();return s[19]=e[t],s[21]=t,s}function Ue(i,e,t){const s=i.slice();return s[22]=e[t],s}function We(i,e,t){const s=i.slice();return s[19]=e[t],s[21]=t,s}function Oe(i,e,t){const s=i.slice();return s[22]=e[t],s}function Be(i){let e,t,s="My Created Challenges",n,a,l,o=i[4].email+"",I,y,F,S,w,z,b=fe(i[2]),d=[];for(let h=0;h<b.length;h+=1)d[h]=Le(Oe(i,b,h));let N=fe(Array(Te)),E=[];for(let h=0;h<N.length;h+=1)E[h]=Me(We(i,N,h));return{c(){e=_("div"),t=_("h1"),t.textContent=s,n=V(),a=_("p"),l=k("from "),I=k(o),y=V(),F=_("div");for(let h=0;h<d.length;h+=1)d[h].c();S=V(),w=_("nav"),z=_("ul");for(let h=0;h<E.length;h+=1)E[h].c();this.h()},l(h){e=v(h,"DIV",{class:!0});var p=m(e);t=v(p,"H1",{class:!0,"data-svelte-h":!0}),he(t)!=="svelte-1cjw6jr"&&(t.textContent=s),n=T(p),a=v(p,"P",{class:!0});var c=m(a);l=C(c,"from "),I=C(c,o),c.forEach(r),p.forEach(r),y=T(h),F=v(h,"DIV",{class:!0});var U=m(F);for(let H=0;H<d.length;H+=1)d[H].l(U);U.forEach(r),S=T(h),w=v(h,"NAV",{class:!0,"aria-label":!0});var D=m(w);z=v(D,"UL",{class:!0});var P=m(z);for(let H=0;H<E.length;H+=1)E[H].l(P);P.forEach(r),D.forEach(r),this.h()},h(){u(t,"class","title is-1"),u(a,"class","subtitle is-3"),u(e,"class","box"),u(F,"class","columns is-multiline"),u(z,"class","pagination-list"),u(w,"class","pagination"),u(w,"aria-label","pagination")},m(h,p){g(h,e,p),f(e,t),f(e,n),f(e,a),f(a,l),f(a,I),g(h,y,p),g(h,F,p);for(let c=0;c<d.length;c+=1)d[c]&&d[c].m(F,null);g(h,S,p),g(h,w,p),f(w,z);for(let c=0;c<E.length;c+=1)E[c]&&E[c].m(z,null)},p(h,p){if(p&16&&o!==(o=h[4].email+"")&&W(I,o),p&967){b=fe(h[2]);let c;for(c=0;c<b.length;c+=1){const U=Oe(h,b,c);d[c]?d[c].p(U,p):(d[c]=Le(U),d[c].c(),d[c].m(F,null))}for(;c<d.length;c+=1)d[c].d(1);d.length=b.length}if(p&32){N=fe(Array(Te));let c;for(c=0;c<N.length;c+=1){const U=We(h,N,c);E[c]?E[c].p(U,p):(E[c]=Me(U),E[c].c(),E[c].m(z,null))}for(;c<E.length;c+=1)E[c].d(1);E.length=N.length}},d(h){h&&(r(e),r(y),r(F),r(S),r(w)),Ve(d,h),Ve(E,h)}}}function at(i){let e,t,s=i[22].challengeState+"",n;return{c(){e=_("i"),t=k(`\r
                                challenge is `),n=k(s),this.h()},l(a){e=v(a,"I",{class:!0}),m(e).forEach(r),t=C(a,`\r
                                challenge is `),n=C(a,s),this.h()},h(){u(e,"class","fa-solid fa-flag-checkered")},m(a,l){g(a,e,l),g(a,t,l),g(a,n,l)},p(a,l){l&4&&s!==(s=a[22].challengeState+"")&&W(n,s)},d(a){a&&(r(e),r(t),r(n))}}}function st(i){let e,t,s=i[22].challengeState+"",n;return{c(){e=_("i"),t=k(`\r
                                is `),n=k(s),this.h()},l(a){e=v(a,"I",{class:!0}),m(e).forEach(r),t=C(a,`\r
                                is `),n=C(a,s),this.h()},h(){u(e,"class","fa-solid fa-hourglass-start")},m(a,l){g(a,e,l),g(a,t,l),g(a,n,l)},p(a,l){l&4&&s!==(s=a[22].challengeState+"")&&W(n,s)},d(a){a&&(r(e),r(t),r(n))}}}function it(i){let e,t,s=i[22].challengeState+"",n,a;return{c(){e=_("i"),t=V(),n=k(s),a=k(" for a competitor"),this.h()},l(l){e=v(l,"I",{class:!0}),m(e).forEach(r),t=T(l),n=C(l,s),a=C(l," for a competitor"),this.h()},h(){u(e,"class","fas fa-clock")},m(l,o){g(l,e,o),g(l,t,o),g(l,n,o),g(l,a,o)},p(l,o){o&4&&s!==(s=l[22].challengeState+"")&&W(n,s)},d(l){l&&(r(e),r(t),r(n),r(a))}}}function nt(i){let e,t,s=i[22].challengeState+"",n,a;return{c(){e=_("i"),t=V(),n=k(s),a=k(" to compete"),this.h()},l(l){e=v(l,"I",{class:!0}),m(e).forEach(r),t=T(l),n=C(l,s),a=C(l," to compete"),this.h()},h(){u(e,"class","fas fa-check")},m(l,o){g(l,e,o),g(l,t,o),g(l,n,o),g(l,a,o)},p(l,o){o&4&&s!==(s=l[22].challengeState+"")&&W(n,s)},d(l){l&&(r(e),r(t),r(n),r(a))}}}function je(i){let e,t,s,n;return{c(){e=_("div"),t=_("i"),s=k(`\r
                                Winner: `),n=k(i[1]),this.h()},l(a){e=v(a,"DIV",{class:!0});var l=m(e);t=v(l,"I",{class:!0}),m(t).forEach(r),s=C(l,`\r
                                Winner: `),n=C(l,i[1]),l.forEach(r),this.h()},h(){u(t,"class","fa-solid fa-trophy"),u(e,"class","content")},m(a,l){g(a,e,l),f(e,t),f(e,s),f(e,n)},p(a,l){l&2&&W(n,a[1])},d(a){a&&r(e)}}}function rt(i){let e,t="Check Balance Account for Wager";return{c(){e=_("b"),e.textContent=t},l(s){e=v(s,"B",{"data-svelte-h":!0}),he(e)!=="svelte-gskt66"&&(e.textContent=t)},m(s,n){g(s,e,n)},p:Ee,d(s){s&&r(e)}}}function ot(i){let e,t="One User already joined";return{c(){e=_("b"),e.textContent=t},l(s){e=v(s,"B",{"data-svelte-h":!0}),he(e)!=="svelte-rpa9j4"&&(e.textContent=t)},m(s,n){g(s,e,n)},p:Ee,d(s){s&&r(e)}}}function ct(i){let e,t,s=i[22].fitnessuserEmail1+"",n,a,l,o="Finish Challenge",I,y,F,S=i[22].fitnessuserEmail2+"",w,z,b;return{c(){e=_("a"),t=k("Choose Winner User 1: "),n=k(s),a=V(),l=_("a"),l.textContent=o,I=V(),y=_("a"),F=k("Choose Winner User 2: "),w=k(S),this.h()},l(d){e=v(d,"A",{href:!0,class:!0});var N=m(e);t=C(N,"Choose Winner User 1: "),n=C(N,s),N.forEach(r),a=T(d),l=v(d,"A",{href:!0,class:!0,"data-svelte-h":!0}),he(l)!=="svelte-9dekd2"&&(l.textContent=o),I=T(d),y=v(d,"A",{href:!0,class:!0});var E=m(y);F=C(E,"Choose Winner User 2: "),w=C(E,S),E.forEach(r),this.h()},h(){u(e,"href","#"),u(e,"class","card-footer-item"),u(l,"href","#"),u(l,"class","card-footer-item"),u(y,"href","#"),u(y,"class","card-footer-item")},m(d,N){g(d,e,N),f(e,t),f(e,n),g(d,a,N),g(d,l,N),g(d,I,N),g(d,y,N),f(y,F),f(y,w),z||(b=[Ne(e,"click",function(){Se(i[7](i[22].fitnessuserId1))&&i[7](i[22].fitnessuserId1).apply(this,arguments)}),Ne(l,"click",function(){Se(i[6](i[22].id,i[1]))&&i[6](i[22].id,i[1]).apply(this,arguments)}),Ne(y,"click",function(){Se(i[8](i[22].fitnessuserId2))&&i[8](i[22].fitnessuserId2).apply(this,arguments)})],z=!0)},p(d,N){i=d,N&4&&s!==(s=i[22].fitnessuserEmail1+"")&&W(n,s),N&4&&S!==(S=i[22].fitnessuserEmail2+"")&&W(w,S)},d(d){d&&(r(e),r(a),r(l),r(I),r(y)),z=!1,Ye(b)}}}function ft(i){let e,t="Delete Challenge",s,n;return{c(){e=_("button"),e.textContent=t,this.h()},l(a){e=v(a,"BUTTON",{class:!0,"data-svelte-h":!0}),he(e)!=="svelte-zc36ty"&&(e.textContent=t),this.h()},h(){u(e,"class","card-footer-item button is-danger")},m(a,l){g(a,e,l),s||(n=Ne(e,"click",function(){Se(i[9](i[22].id,i[0]))&&i[9](i[22].id,i[0]).apply(this,arguments)}),s=!0)},p(a,l){i=a},d(a){a&&r(e),s=!1,n()}}}function Le(i){let e,t,s,n,a=i[22].name+"",l,o,I=i[22].challengeType+"",y,F,S,w='<span class="icon"><i class="fas fa-dumbbell" aria-hidden="true"></i></span>',z,b,d,N=i[22].description+"",E,h,p,c,U,D=i[22].wager+"",P,H,X,L,$,ue,x=i[22].startDate+"",se,de,ee=i[22].endDate+"",ie,_e,J,ne,le,Q=i[22].fitnesscenter+"",oe,ce,te,pe,ae,j,O;function q(A,B){if(A[22].challengeState==="OPEN")return nt;if(A[22].challengeState==="WAITING")return it;if(A[22].challengeState==="RUNNING")return st;if(A[22].challengeState==="FINISHED")return at}let Y=q(i),M=Y&&Y(i),R=i[22].challengeState!="FINISHED"&&je(i);function be(A,B){if(A[22].challengeState==="OPEN")return ft;if(A[22].challengeState==="RUNNING")return ct;if(A[22].challengeState==="WAITING")return ot;if(A[22].challengeState==="FINISHED")return rt}let K=be(i),G=K&&K(i);return{c(){e=_("div"),t=_("div"),s=_("header"),n=_("p"),l=k(a),o=_("span"),y=k(I),F=V(),S=_("button"),S.innerHTML=w,z=V(),b=_("div"),d=_("div"),E=k(N),h=V(),p=_("div"),c=_("i"),U=V(),P=k(D),H=k(" CHF"),X=V(),L=_("div"),$=_("i"),ue=V(),se=k(x),de=k(" - "),ie=k(ee),_e=V(),J=_("div"),ne=_("i"),le=V(),oe=k(Q),ce=V(),te=_("div"),M&&M.c(),pe=V(),R&&R.c(),ae=V(),j=_("footer"),G&&G.c(),O=V(),this.h()},l(A){e=v(A,"DIV",{class:!0});var B=m(e);t=v(B,"DIV",{class:!0});var re=m(t);s=v(re,"HEADER",{class:!0});var ve=m(s);n=v(ve,"P",{class:!0});var me=m(n);l=C(me,a),o=v(me,"SPAN",{class:!0});var ye=m(o);y=C(ye,I),ye.forEach(r),me.forEach(r),F=T(ve),S=v(ve,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),he(S)!=="svelte-b1yr4i"&&(S.innerHTML=w),ve.forEach(r),z=T(re),b=v(re,"DIV",{class:!0});var Z=m(b);d=v(Z,"DIV",{class:!0});var Fe=m(d);E=C(Fe,N),Fe.forEach(r),h=T(Z),p=v(Z,"DIV",{class:!0});var Ie=m(p);c=v(Ie,"I",{class:!0}),m(c).forEach(r),U=T(Ie),P=C(Ie,D),H=C(Ie," CHF"),Ie.forEach(r),X=T(Z),L=v(Z,"DIV",{class:!0});var ge=m(L);$=v(ge,"I",{class:!0}),m($).forEach(r),ue=T(ge),se=C(ge,x),de=C(ge," - "),ie=C(ge,ee),ge.forEach(r),_e=T(Z),J=v(Z,"DIV",{class:!0});var De=m(J);ne=v(De,"I",{class:!0}),m(ne).forEach(r),le=T(De),oe=C(De,Q),De.forEach(r),ce=T(Z),te=v(Z,"DIV",{class:!0});var He=m(te);M&&M.l(He),He.forEach(r),pe=T(Z),R&&R.l(Z),Z.forEach(r),ae=T(re),j=v(re,"FOOTER",{class:!0});var we=m(j);G&&G.l(we),we.forEach(r),re.forEach(r),O=T(B),B.forEach(r),this.h()},h(){u(o,"class","tag is-info is-light"),u(n,"class","card-header-title"),u(S,"class","card-header-icon"),u(S,"aria-label","more options"),u(s,"class","card-header"),u(d,"class","content"),u(c,"class","fa-solid fa-sack-dollar"),u(p,"class","content"),u($,"class","fas fa-calendar-alt"),u(L,"class","content"),u(ne,"class","fa-solid fa-weight-hanging"),u(J,"class","content"),u(te,"class","content"),u(b,"class","card-content svelte-zvynze"),u(j,"class","card-footer"),u(t,"class","card full-height-card svelte-zvynze"),u(e,"class","column is-half")},m(A,B){g(A,e,B),f(e,t),f(t,s),f(s,n),f(n,l),f(n,o),f(o,y),f(s,F),f(s,S),f(t,z),f(t,b),f(b,d),f(d,E),f(b,h),f(b,p),f(p,c),f(p,U),f(p,P),f(p,H),f(b,X),f(b,L),f(L,$),f(L,ue),f(L,se),f(L,de),f(L,ie),f(b,_e),f(b,J),f(J,ne),f(J,le),f(J,oe),f(b,ce),f(b,te),M&&M.m(te,null),f(b,pe),R&&R.m(b,null),f(t,ae),f(t,j),G&&G.m(j,null),f(e,O)},p(A,B){B&4&&a!==(a=A[22].name+"")&&W(l,a),B&4&&I!==(I=A[22].challengeType+"")&&W(y,I),B&4&&N!==(N=A[22].description+"")&&W(E,N),B&4&&D!==(D=A[22].wager+"")&&W(P,D),B&4&&x!==(x=A[22].startDate+"")&&W(se,x),B&4&&ee!==(ee=A[22].endDate+"")&&W(ie,ee),B&4&&Q!==(Q=A[22].fitnesscenter+"")&&W(oe,Q),Y===(Y=q(A))&&M?M.p(A,B):(M&&M.d(1),M=Y&&Y(A),M&&(M.c(),M.m(te,null))),A[22].challengeState!="FINISHED"?R?R.p(A,B):(R=je(A),R.c(),R.m(b,null)):R&&(R.d(1),R=null),K===(K=be(A))&&G?G.p(A,B):(G&&G.d(1),G=K&&K(A),G&&(G.c(),G.m(j,null)))},d(A){A&&r(e),M&&M.d(),R&&R.d(),G&&G.d()}}}function Me(i){let e,t,s=i[21]+1+"",n,a;return{c(){e=_("li"),t=_("a"),n=k(s),a=V(),this.h()},l(l){e=v(l,"LI",{});var o=m(e);t=v(o,"A",{class:!0,"aria-label":!0,href:!0});var I=m(t);n=C(I,s),I.forEach(r),a=T(o),o.forEach(r),this.h()},h(){u(t,"class","pagination-link is-current"),u(t,"aria-label","Page 1"),u(t,"href","/challenges?page="+(i[21]+1)),Ke(t,"active",i[5]==i[21]+1)},m(l,o){g(l,e,o),f(e,t),f(t,n),f(e,a)},p:Ee,d(l){l&&r(e)}}}function Re(i){let e,t,s="My Competed Challenges",n,a,l,o=i[4].email+"",I,y,F,S,w,z,b=fe(i[2]),d=[];for(let h=0;h<b.length;h+=1)d[h]=qe(Ue(i,b,h));let N=fe(Array(Te)),E=[];for(let h=0;h<N.length;h+=1)E[h]=Je(Pe(i,N,h));return{c(){e=_("div"),t=_("h1"),t.textContent=s,n=V(),a=_("p"),l=k("from "),I=k(o),y=V(),F=_("div");for(let h=0;h<d.length;h+=1)d[h].c();S=V(),w=_("nav"),z=_("ul");for(let h=0;h<E.length;h+=1)E[h].c();this.h()},l(h){e=v(h,"DIV",{class:!0});var p=m(e);t=v(p,"H1",{class:!0,"data-svelte-h":!0}),he(t)!=="svelte-u1e8hy"&&(t.textContent=s),n=T(p),a=v(p,"P",{class:!0});var c=m(a);l=C(c,"from "),I=C(c,o),c.forEach(r),p.forEach(r),y=T(h),F=v(h,"DIV",{class:!0});var U=m(F);for(let H=0;H<d.length;H+=1)d[H].l(U);U.forEach(r),S=T(h),w=v(h,"NAV",{class:!0,"aria-label":!0});var D=m(w);z=v(D,"UL",{class:!0});var P=m(z);for(let H=0;H<E.length;H+=1)E[H].l(P);P.forEach(r),D.forEach(r),this.h()},h(){u(t,"class","title is-1"),u(a,"class","subtitle is-3"),u(e,"class","box"),u(F,"class","columns is-multiline"),u(z,"class","pagination-list"),u(w,"class","pagination"),u(w,"aria-label","pagination")},m(h,p){g(h,e,p),f(e,t),f(e,n),f(e,a),f(a,l),f(a,I),g(h,y,p),g(h,F,p);for(let c=0;c<d.length;c+=1)d[c]&&d[c].m(F,null);g(h,S,p),g(h,w,p),f(w,z);for(let c=0;c<E.length;c+=1)E[c]&&E[c].m(z,null)},p(h,p){if(p&16&&o!==(o=h[4].email+"")&&W(I,o),p&5){b=fe(h[2]);let c;for(c=0;c<b.length;c+=1){const U=Ue(h,b,c);d[c]?d[c].p(U,p):(d[c]=qe(U),d[c].c(),d[c].m(F,null))}for(;c<d.length;c+=1)d[c].d(1);d.length=b.length}if(p&32){N=fe(Array(Te));let c;for(c=0;c<N.length;c+=1){const U=Pe(h,N,c);E[c]?E[c].p(U,p):(E[c]=Je(U),E[c].c(),E[c].m(z,null))}for(;c<E.length;c+=1)E[c].d(1);E.length=N.length}},d(h){h&&(r(e),r(y),r(F),r(S),r(w)),Ve(d,h),Ve(E,h)}}}function Ge(i){let e,t,s,n,a=i[22].name+"",l,o,I=i[22].challengeType+"",y,F,S,w='<span class="icon"><i class="fas fa-dumbbell" aria-hidden="true"></i></span>',z,b,d,N=i[22].description+"",E,h,p,c,U,D=i[22].wager+"",P,H,X,L,$,ue,x=i[22].startDate+"",se,de,ee=i[22].endDate+"",ie,_e,J,ne,le,Q,oe,ce,te;function pe(O,q){if(O[22].challengeState==="OPEN")return _t;if(O[22].challengeState==="WAITING")return dt;if(O[22].challengeState==="RUNNING")return ut;if(O[22].challengeState==="FINISHED")return ht}let ae=pe(i),j=ae&&ae(i);return{c(){e=_("div"),t=_("div"),s=_("header"),n=_("p"),l=k(a),o=_("span"),y=k(I),F=V(),S=_("button"),S.innerHTML=w,z=V(),b=_("div"),d=_("div"),E=k(N),h=V(),p=_("div"),c=_("i"),U=V(),P=k(D),H=k(" CHF"),X=V(),L=_("div"),$=_("i"),ue=V(),se=k(x),de=k(" - "),ie=k(ee),_e=V(),J=_("div"),j&&j.c(),ne=V(),le=_("footer"),Q=_("a"),oe=k("Detail"),te=V(),this.h()},l(O){e=v(O,"DIV",{class:!0});var q=m(e);t=v(q,"DIV",{class:!0});var Y=m(t);s=v(Y,"HEADER",{class:!0});var M=m(s);n=v(M,"P",{class:!0});var R=m(n);l=C(R,a),o=v(R,"SPAN",{class:!0});var be=m(o);y=C(be,I),be.forEach(r),R.forEach(r),F=T(M),S=v(M,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),he(S)!=="svelte-klnzei"&&(S.innerHTML=w),M.forEach(r),z=T(Y),b=v(Y,"DIV",{class:!0});var K=m(b);d=v(K,"DIV",{class:!0});var G=m(d);E=C(G,N),G.forEach(r),h=T(K),p=v(K,"DIV",{class:!0});var A=m(p);c=v(A,"I",{class:!0}),m(c).forEach(r),U=T(A),P=C(A,D),H=C(A," CHF"),A.forEach(r),X=T(K),L=v(K,"DIV",{class:!0});var B=m(L);$=v(B,"I",{class:!0}),m($).forEach(r),ue=T(B),se=C(B,x),de=C(B," - "),ie=C(B,ee),B.forEach(r),_e=T(K),J=v(K,"DIV",{class:!0});var re=m(J);j&&j.l(re),re.forEach(r),K.forEach(r),ne=T(Y),le=v(Y,"FOOTER",{class:!0});var ve=m(le);Q=v(ve,"A",{href:!0,class:!0});var me=m(Q);oe=C(me,"Detail"),me.forEach(r),ve.forEach(r),Y.forEach(r),te=T(q),q.forEach(r),this.h()},h(){u(o,"class","tag is-info is-light"),u(n,"class","card-header-title"),u(S,"class","card-header-icon"),u(S,"aria-label","more options"),u(s,"class","card-header"),u(d,"class","content"),u(c,"class","fa-solid fa-sack-dollar"),u(p,"class","content"),u($,"class","fas fa-calendar-alt"),u(L,"class","content"),u(J,"class","content"),u(b,"class","card-content svelte-zvynze"),u(Q,"href",ce="/challenge?id="+i[22].id),u(Q,"class","card-footer-item"),u(le,"class","card-footer"),u(t,"class","card full-height-card svelte-zvynze"),u(e,"class","column is-one-third")},m(O,q){g(O,e,q),f(e,t),f(t,s),f(s,n),f(n,l),f(n,o),f(o,y),f(s,F),f(s,S),f(t,z),f(t,b),f(b,d),f(d,E),f(b,h),f(b,p),f(p,c),f(p,U),f(p,P),f(p,H),f(b,X),f(b,L),f(L,$),f(L,ue),f(L,se),f(L,de),f(L,ie),f(b,_e),f(b,J),j&&j.m(J,null),f(t,ne),f(t,le),f(le,Q),f(Q,oe),f(e,te)},p(O,q){q&4&&a!==(a=O[22].name+"")&&W(l,a),q&4&&I!==(I=O[22].challengeType+"")&&W(y,I),q&4&&N!==(N=O[22].description+"")&&W(E,N),q&4&&D!==(D=O[22].wager+"")&&W(P,D),q&4&&x!==(x=O[22].startDate+"")&&W(se,x),q&4&&ee!==(ee=O[22].endDate+"")&&W(ie,ee),ae===(ae=pe(O))&&j?j.p(O,q):(j&&j.d(1),j=ae&&ae(O),j&&(j.c(),j.m(J,null))),q&4&&ce!==(ce="/challenge?id="+O[22].id)&&u(Q,"href",ce)},d(O){O&&r(e),j&&j.d()}}}function ht(i){let e,t,s=i[22].challengeState+"",n;return{c(){e=_("i"),t=k(`\r
                                    challenge is `),n=k(s),this.h()},l(a){e=v(a,"I",{class:!0}),m(e).forEach(r),t=C(a,`\r
                                    challenge is `),n=C(a,s),this.h()},h(){u(e,"class","fa-solid fa-flag-checkered")},m(a,l){g(a,e,l),g(a,t,l),g(a,n,l)},p(a,l){l&4&&s!==(s=a[22].challengeState+"")&&W(n,s)},d(a){a&&(r(e),r(t),r(n))}}}function ut(i){let e,t,s=i[22].challengeState+"",n;return{c(){e=_("i"),t=k(`\r
                                    is `),n=k(s),this.h()},l(a){e=v(a,"I",{class:!0}),m(e).forEach(r),t=C(a,`\r
                                    is `),n=C(a,s),this.h()},h(){u(e,"class","fa-solid fa-hourglass-start")},m(a,l){g(a,e,l),g(a,t,l),g(a,n,l)},p(a,l){l&4&&s!==(s=a[22].challengeState+"")&&W(n,s)},d(a){a&&(r(e),r(t),r(n))}}}function dt(i){let e,t,s=i[22].challengeState+"",n,a;return{c(){e=_("i"),t=V(),n=k(s),a=k(" for a competitor"),this.h()},l(l){e=v(l,"I",{class:!0}),m(e).forEach(r),t=T(l),n=C(l,s),a=C(l," for a competitor"),this.h()},h(){u(e,"class","fas fa-clock")},m(l,o){g(l,e,o),g(l,t,o),g(l,n,o),g(l,a,o)},p(l,o){o&4&&s!==(s=l[22].challengeState+"")&&W(n,s)},d(l){l&&(r(e),r(t),r(n),r(a))}}}function _t(i){let e,t,s=i[22].challengeState+"",n,a;return{c(){e=_("i"),t=V(),n=k(s),a=k(" to compete"),this.h()},l(l){e=v(l,"I",{class:!0}),m(e).forEach(r),t=T(l),n=C(l,s),a=C(l," to compete"),this.h()},h(){u(e,"class","fas fa-check")},m(l,o){g(l,e,o),g(l,t,o),g(l,n,o),g(l,a,o)},p(l,o){o&4&&s!==(s=l[22].challengeState+"")&&W(n,s)},d(l){l&&(r(e),r(t),r(n),r(a))}}}function qe(i){let e,t=(i[22].fitnessuserId1===i[0]||i[22].fitnessuserId2===i[0])&&Ge(i);return{c(){t&&t.c(),e=Ae()},l(s){t&&t.l(s),e=Ae()},m(s,n){t&&t.m(s,n),g(s,e,n)},p(s,n){s[22].fitnessuserId1===s[0]||s[22].fitnessuserId2===s[0]?t?t.p(s,n):(t=Ge(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(s){s&&r(e),t&&t.d(s)}}}function Je(i){let e,t,s=i[21]+1+"",n,a;return{c(){e=_("li"),t=_("a"),n=k(s),a=V(),this.h()},l(l){e=v(l,"LI",{});var o=m(e);t=v(o,"A",{class:!0,"aria-label":!0,href:!0});var I=m(t);n=C(I,s),I.forEach(r),a=T(o),o.forEach(r),this.h()},h(){u(t,"class","pagination-link is-current"),u(t,"aria-label","Page 1"),u(t,"href","/challenges?page="+(i[21]+1)),Ke(t,"active",i[5]==i[21]+1)},m(l,o){g(l,e,o),f(e,t),f(t,n),f(e,a)},p:Ee,d(l){l&&r(e)}}}function vt(i){let e=i[3]&&i[4].user_roles&&i[4].user_roles.includes("fitnesscoach"),t,s=i[3]&&i[4].user_roles&&i[4].user_roles.includes("fitnessuser"),n,a=e&&Be(i),l=s&&Re(i);return{c(){a&&a.c(),t=V(),l&&l.c(),n=Ae()},l(o){a&&a.l(o),t=T(o),l&&l.l(o),n=Ae()},m(o,I){a&&a.m(o,I),g(o,t,I),l&&l.m(o,I),g(o,n,I)},p(o,[I]){I&24&&(e=o[3]&&o[4].user_roles&&o[4].user_roles.includes("fitnesscoach")),e?a?a.p(o,I):(a=Be(o),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),I&24&&(s=o[3]&&o[4].user_roles&&o[4].user_roles.includes("fitnessuser")),s?l?l.p(o,I):(l=Re(o),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},i:Ee,o:Ee,d(o){o&&(r(t),r(n)),a&&a.d(o),l&&l.d(o)}}}let Te=0;function pt(i,e,t){let s,n,a,l,o;ke(i,et,D=>t(10,s=D)),ke(i,ze,D=>t(0,n=D)),ke(i,xe,D=>t(11,a=D)),ke(i,tt,D=>t(3,l=D)),ke(i,lt,D=>t(4,o=D));const I=a.url.origin;let y,F="",S=null,w,z=[],b=[];function d(){var D={method:"get",url:I+"/api/challenge/fitness/"+y,headers:{Authorization:"Bearer "+s}};Ce(D).then(function(P){t(2,b=P.data)}).catch(function(P){alert("Could not get challenges. There are no challenges associated to you. Create a chellenge or compete in one."),console.log(P)})}function N(D,P){var H={method:"put",url:I+"/api/service/finishchallenge?challengeId="+D+"&winnerEmail="+P,headers:{Authorization:"Bearer "+s}};Ce(H).then(function(X){alert("Challenge set as finished"),d()}).catch(function(X){alert("Could not finish challenge"),console.log(X)})}function E(D){var P={method:"get",url:I+"/api/fitnessuser/"+D,headers:{Authorization:"Bearer "+s}};Ce(P).then(function(H){z=H.data,t(1,F=H.data.email),console.log(z),console.log(F)}).catch(function(H){alert("Could not get fitnessuser id"),console.log(H)})}function h(){var D={method:"get",url:I+"/api/service/me/myinfo",headers:{Authorization:"Bearer "+s}};Ce(D).then(function(P){Xe(ze,n=P.data.id,n)}).catch(function(P){alert("Could not get fitnessuser id"),console.log(P)})}function p(D){S=D,console.log(S),E(S)}function c(D){S=D,console.log(S),E(S)}function U(D,P){var H={method:"delete",url:I+"/api/challenge/"+P+"/"+D,headers:{Authorization:"Bearer "+s}};Ce(H).then(function(X){alert("Challenge deleted"),d()}).catch(function(X){alert("Could not delete challenge, Challenge is already running or finished"),console.log(X)})}return i.$$.update=()=>{i.$$.dirty&3073&&(y=a.url.searchParams.get("id"),s!==""&&(h(),console.log(n)),d())},[n,F,b,l,o,w,N,p,c,U,s,a]}class kt extends Ze{constructor(e){super(),$e(this,e,pt,vt,Qe,{})}}export{kt as component};
