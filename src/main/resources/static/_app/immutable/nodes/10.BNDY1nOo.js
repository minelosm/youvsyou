import{s as sl,n as Pe,c as Ae,i as We,r as il,a as rl}from"../chunks/scheduler.D14OqvYY.js";import{S as nl,i as ol,s as S,m as ze,f as A,g as C,d as f,e as d,t as k,c as _,a as m,k as Ve,b as D,l as u,h as r,j as y,q as Fe,n as Le,w as al}from"../chunks/index.BzgZtzQZ.js";import{e as he}from"../chunks/each.D6YF6ztN.js";import{p as cl}from"../chunks/stores.B7O8se8o.js";import{m as qe,j as fl,i as hl,u as ul,a as we}from"../chunks/store.Dbx3vW_f.js";function Je(a,l,e){const s=a.slice();return s[18]=l[e],s[20]=e,s}function Ke(a,l,e){const s=a.slice();return s[21]=l[e],s}function Qe(a,l,e){const s=a.slice();return s[18]=l[e],s[20]=e,s}function Xe(a,l,e){const s=a.slice();return s[21]=l[e],s}function Ye(a){let l,e,s="My Created Challenges",o,i,t,c=a[4].email+"",I,O,N,V,H,P,b=he(a[2]),p=[];for(let h=0;h<b.length;h+=1)p[h]=Ze(Xe(a,b,h));let w=he(Array(He)),g=[];for(let h=0;h<w.length;h+=1)g[h]=$e(Qe(a,w,h));return{c(){l=d("div"),e=d("h1"),e.textContent=s,o=S(),i=d("p"),t=k("from "),I=k(c),O=S(),N=d("div");for(let h=0;h<p.length;h+=1)p[h].c();V=S(),H=d("nav"),P=d("ul");for(let h=0;h<g.length;h+=1)g[h].c();this.h()},l(h){l=_(h,"DIV",{class:!0});var v=m(l);e=_(v,"H1",{class:!0,"data-svelte-h":!0}),Ve(e)!=="svelte-1cjw6jr"&&(e.textContent=s),o=A(v),i=_(v,"P",{class:!0});var n=m(i);t=D(n,"from "),I=D(n,c),n.forEach(f),v.forEach(f),O=A(h),N=_(h,"DIV",{class:!0});var E=m(N);for(let z=0;z<p.length;z+=1)p[z].l(E);E.forEach(f),V=A(h),H=_(h,"NAV",{class:!0,"aria-label":!0});var T=m(H);P=_(T,"UL",{class:!0});var W=m(P);for(let z=0;z<g.length;z+=1)g[z].l(W);W.forEach(f),T.forEach(f),this.h()},h(){u(e,"class","title is-1"),u(i,"class","subtitle is-3"),u(l,"class","box"),u(N,"class","columns is-multiline"),u(P,"class","pagination-list"),u(H,"class","pagination"),u(H,"aria-label","pagination")},m(h,v){C(h,l,v),r(l,e),r(l,o),r(l,i),r(i,t),r(i,I),C(h,O,v),C(h,N,v);for(let n=0;n<p.length;n+=1)p[n]&&p[n].m(N,null);C(h,V,v),C(h,H,v),r(H,P);for(let n=0;n<g.length;n+=1)g[n]&&g[n].m(P,null)},p(h,v){if(v&16&&c!==(c=h[4].email+"")&&y(I,c),v&454){b=he(h[2]);let n;for(n=0;n<b.length;n+=1){const E=Xe(h,b,n);p[n]?p[n].p(E,v):(p[n]=Ze(E),p[n].c(),p[n].m(N,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=b.length}if(v&32){w=he(Array(He));let n;for(n=0;n<w.length;n+=1){const E=Qe(h,w,n);g[n]?g[n].p(E,v):(g[n]=$e(E),g[n].c(),g[n].m(P,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=w.length}},d(h){h&&(f(l),f(O),f(N),f(V),f(H)),Fe(p,h),Fe(g,h)}}}function dl(a){let l,e,s=a[21].challengeState+"",o;return{c(){l=d("i"),e=k(`\r
                                challenge is `),o=k(s),this.h()},l(i){l=_(i,"I",{class:!0}),m(l).forEach(f),e=D(i,`\r
                                challenge is `),o=D(i,s),this.h()},h(){u(l,"class","fa-solid fa-flag-checkered")},m(i,t){C(i,l,t),C(i,e,t),C(i,o,t)},p(i,t){t&4&&s!==(s=i[21].challengeState+"")&&y(o,s)},d(i){i&&(f(l),f(e),f(o))}}}function _l(a){let l,e,s=a[21].challengeState+"",o;return{c(){l=d("i"),e=k(`\r
                                is `),o=k(s),this.h()},l(i){l=_(i,"I",{class:!0}),m(l).forEach(f),e=D(i,`\r
                                is `),o=D(i,s),this.h()},h(){u(l,"class","fa-solid fa-hourglass-start")},m(i,t){C(i,l,t),C(i,e,t),C(i,o,t)},p(i,t){t&4&&s!==(s=i[21].challengeState+"")&&y(o,s)},d(i){i&&(f(l),f(e),f(o))}}}function vl(a){let l,e,s=a[21].challengeState+"",o,i;return{c(){l=d("i"),e=S(),o=k(s),i=k(" for a competitor"),this.h()},l(t){l=_(t,"I",{class:!0}),m(l).forEach(f),e=A(t),o=D(t,s),i=D(t," for a competitor"),this.h()},h(){u(l,"class","fas fa-clock")},m(t,c){C(t,l,c),C(t,e,c),C(t,o,c),C(t,i,c)},p(t,c){c&4&&s!==(s=t[21].challengeState+"")&&y(o,s)},d(t){t&&(f(l),f(e),f(o),f(i))}}}function pl(a){let l,e,s=a[21].challengeState+"",o,i;return{c(){l=d("i"),e=S(),o=k(s),i=k(" to compete"),this.h()},l(t){l=_(t,"I",{class:!0}),m(l).forEach(f),e=A(t),o=D(t,s),i=D(t," to compete"),this.h()},h(){u(l,"class","fas fa-check")},m(t,c){C(t,l,c),C(t,e,c),C(t,o,c),C(t,i,c)},p(t,c){c&4&&s!==(s=t[21].challengeState+"")&&y(o,s)},d(t){t&&(f(l),f(e),f(o),f(i))}}}function Ze(a){let l,e,s,o,i=a[21].name+"",t,c,I=a[21].challengeType+"",O,N,V,H='<span class="icon"><i class="fas fa-dumbbell" aria-hidden="true"></i></span>',P,b,p,w=a[21].description+"",g,h,v,n,E,T=a[21].wager+"",W,z,ue,L,Z,de,$=a[21].startDate+"",se,_e,x=a[21].endDate+"",ie,ve,R,re,te,q=a[21].fitnesscenter+"",oe,ce,ee,me,j,F,U,M=a[21].fitnessuserEmail1+"",le,fe,J,Ce="Finish Challenge",K,Q,ne,X=a[21].fitnessuserEmail2+"",pe,ge,Ee,Me;function je(Y,B){if(Y[21].challengeState==="OPEN")return pl;if(Y[21].challengeState==="WAITING")return vl;if(Y[21].challengeState==="RUNNING")return _l;if(Y[21].challengeState==="FINSIHED")return dl}let be=je(a),G=be&&be(a);return{c(){l=d("div"),e=d("div"),s=d("header"),o=d("p"),t=k(i),c=d("span"),O=k(I),N=S(),V=d("button"),V.innerHTML=H,P=S(),b=d("div"),p=d("div"),g=k(w),h=S(),v=d("div"),n=d("i"),E=S(),W=k(T),z=k(" CHF"),ue=S(),L=d("div"),Z=d("i"),de=S(),se=k($),_e=k(" - "),ie=k(x),ve=S(),R=d("div"),re=d("i"),te=S(),oe=k(q),ce=S(),ee=d("div"),G&&G.c(),me=S(),j=d("footer"),F=d("a"),U=k("Choose Winner User 1: "),le=k(M),fe=S(),J=d("a"),J.textContent=Ce,K=S(),Q=d("a"),ne=k("Choose Winner User 2: "),pe=k(X),ge=S(),this.h()},l(Y){l=_(Y,"DIV",{class:!0});var B=m(l);e=_(B,"DIV",{class:!0});var Ie=m(e);s=_(Ie,"HEADER",{class:!0});var Ne=m(s);o=_(Ne,"P",{class:!0});var Ue=m(o);t=D(Ue,i),c=_(Ue,"SPAN",{class:!0});var Be=m(c);O=D(Be,I),Be.forEach(f),Ue.forEach(f),N=A(Ne),V=_(Ne,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),Ve(V)!=="svelte-b1yr4i"&&(V.innerHTML=H),Ne.forEach(f),P=A(Ie),b=_(Ie,"DIV",{class:!0});var ae=m(b);p=_(ae,"DIV",{class:!0});var Re=m(p);g=D(Re,w),Re.forEach(f),h=A(ae),v=_(ae,"DIV",{class:!0});var Se=m(v);n=_(Se,"I",{class:!0}),m(n).forEach(f),E=A(Se),W=D(Se,T),z=D(Se," CHF"),Se.forEach(f),ue=A(ae),L=_(ae,"DIV",{class:!0});var ke=m(L);Z=_(ke,"I",{class:!0}),m(Z).forEach(f),de=A(ke),se=D(ke,$),_e=D(ke," - "),ie=D(ke,x),ke.forEach(f),ve=A(ae),R=_(ae,"DIV",{class:!0});var Te=m(R);re=_(Te,"I",{class:!0}),m(re).forEach(f),te=A(Te),oe=D(Te,q),Te.forEach(f),ce=A(ae),ee=_(ae,"DIV",{class:!0});var Ge=m(ee);G&&G.l(Ge),Ge.forEach(f),ae.forEach(f),me=A(Ie),j=_(Ie,"FOOTER",{class:!0});var De=m(j);F=_(De,"A",{href:!0,class:!0});var ye=m(F);U=D(ye,"Choose Winner User 1: "),le=D(ye,M),ye.forEach(f),fe=A(De),J=_(De,"A",{href:!0,class:!0,"data-svelte-h":!0}),Ve(J)!=="svelte-1yhosgm"&&(J.textContent=Ce),K=A(De),Q=_(De,"A",{href:!0,class:!0});var Oe=m(Q);ne=D(Oe,"Choose Winner User 2: "),pe=D(Oe,X),Oe.forEach(f),De.forEach(f),Ie.forEach(f),ge=A(B),B.forEach(f),this.h()},h(){u(c,"class","tag is-info is-light"),u(o,"class","card-header-title"),u(V,"class","card-header-icon"),u(V,"aria-label","more options"),u(s,"class","card-header"),u(p,"class","content"),u(n,"class","fa-solid fa-sack-dollar"),u(v,"class","content"),u(Z,"class","fas fa-calendar-alt"),u(L,"class","content"),u(re,"class","fa-solid fa-weight-hanging"),u(R,"class","content"),u(ee,"class","content"),u(b,"class","card-content svelte-b9zz6y"),u(F,"href","#"),u(F,"class","card-footer-item"),u(J,"href","#"),u(J,"class","card-footer-item"),u(Q,"href","#"),u(Q,"class","card-footer-item"),u(j,"class","card-footer"),u(e,"class","card full-height-card svelte-b9zz6y"),u(l,"class","column is-one-third")},m(Y,B){C(Y,l,B),r(l,e),r(e,s),r(s,o),r(o,t),r(o,c),r(c,O),r(s,N),r(s,V),r(e,P),r(e,b),r(b,p),r(p,g),r(b,h),r(b,v),r(v,n),r(v,E),r(v,W),r(v,z),r(b,ue),r(b,L),r(L,Z),r(L,de),r(L,se),r(L,_e),r(L,ie),r(b,ve),r(b,R),r(R,re),r(R,te),r(R,oe),r(b,ce),r(b,ee),G&&G.m(ee,null),r(e,me),r(e,j),r(j,F),r(F,U),r(F,le),r(j,fe),r(j,J),r(j,K),r(j,Q),r(Q,ne),r(Q,pe),r(l,ge),Ee||(Me=[Le(F,"click",function(){We(a[7](a[21].fitnessuserId1))&&a[7](a[21].fitnessuserId1).apply(this,arguments)}),Le(J,"click",function(){We(a[6](a[21].id,a[1]))&&a[6](a[21].id,a[1]).apply(this,arguments)}),Le(Q,"click",function(){We(a[8](a[21].fitnessuserId2))&&a[8](a[21].fitnessuserId2).apply(this,arguments)})],Ee=!0)},p(Y,B){a=Y,B&4&&i!==(i=a[21].name+"")&&y(t,i),B&4&&I!==(I=a[21].challengeType+"")&&y(O,I),B&4&&w!==(w=a[21].description+"")&&y(g,w),B&4&&T!==(T=a[21].wager+"")&&y(W,T),B&4&&$!==($=a[21].startDate+"")&&y(se,$),B&4&&x!==(x=a[21].endDate+"")&&y(ie,x),B&4&&q!==(q=a[21].fitnesscenter+"")&&y(oe,q),be===(be=je(a))&&G?G.p(a,B):(G&&G.d(1),G=be&&be(a),G&&(G.c(),G.m(ee,null))),B&4&&M!==(M=a[21].fitnessuserEmail1+"")&&y(le,M),B&4&&X!==(X=a[21].fitnessuserEmail2+"")&&y(pe,X)},d(Y){Y&&f(l),G&&G.d(),Ee=!1,il(Me)}}}function $e(a){let l,e,s=a[20]+1+"",o,i;return{c(){l=d("li"),e=d("a"),o=k(s),i=S(),this.h()},l(t){l=_(t,"LI",{});var c=m(l);e=_(c,"A",{class:!0,"aria-label":!0,href:!0});var I=m(e);o=D(I,s),I.forEach(f),i=A(c),c.forEach(f),this.h()},h(){u(e,"class","pagination-link is-current"),u(e,"aria-label","Page 1"),u(e,"href","/challenges?page="+(a[20]+1)),al(e,"active",a[5]==a[20]+1)},m(t,c){C(t,l,c),r(l,e),r(e,o),r(l,i)},p:Pe,d(t){t&&f(l)}}}function xe(a){let l,e,s="My Competed Challenges",o,i,t,c=a[4].email+"",I,O,N,V,H,P,b=he(a[2]),p=[];for(let h=0;h<b.length;h+=1)p[h]=ll(Ke(a,b,h));let w=he(Array(He)),g=[];for(let h=0;h<w.length;h+=1)g[h]=tl(Je(a,w,h));return{c(){l=d("div"),e=d("h1"),e.textContent=s,o=S(),i=d("p"),t=k("from "),I=k(c),O=S(),N=d("div");for(let h=0;h<p.length;h+=1)p[h].c();V=S(),H=d("nav"),P=d("ul");for(let h=0;h<g.length;h+=1)g[h].c();this.h()},l(h){l=_(h,"DIV",{class:!0});var v=m(l);e=_(v,"H1",{class:!0,"data-svelte-h":!0}),Ve(e)!=="svelte-u1e8hy"&&(e.textContent=s),o=A(v),i=_(v,"P",{class:!0});var n=m(i);t=D(n,"from "),I=D(n,c),n.forEach(f),v.forEach(f),O=A(h),N=_(h,"DIV",{class:!0});var E=m(N);for(let z=0;z<p.length;z+=1)p[z].l(E);E.forEach(f),V=A(h),H=_(h,"NAV",{class:!0,"aria-label":!0});var T=m(H);P=_(T,"UL",{class:!0});var W=m(P);for(let z=0;z<g.length;z+=1)g[z].l(W);W.forEach(f),T.forEach(f),this.h()},h(){u(e,"class","title is-1"),u(i,"class","subtitle is-3"),u(l,"class","box"),u(N,"class","columns"),u(P,"class","pagination-list"),u(H,"class","pagination"),u(H,"aria-label","pagination")},m(h,v){C(h,l,v),r(l,e),r(l,o),r(l,i),r(i,t),r(i,I),C(h,O,v),C(h,N,v);for(let n=0;n<p.length;n+=1)p[n]&&p[n].m(N,null);C(h,V,v),C(h,H,v),r(H,P);for(let n=0;n<g.length;n+=1)g[n]&&g[n].m(P,null)},p(h,v){if(v&16&&c!==(c=h[4].email+"")&&y(I,c),v&5){b=he(h[2]);let n;for(n=0;n<b.length;n+=1){const E=Ke(h,b,n);p[n]?p[n].p(E,v):(p[n]=ll(E),p[n].c(),p[n].m(N,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=b.length}if(v&32){w=he(Array(He));let n;for(n=0;n<w.length;n+=1){const E=Je(h,w,n);g[n]?g[n].p(E,v):(g[n]=tl(E),g[n].c(),g[n].m(P,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=w.length}},d(h){h&&(f(l),f(O),f(N),f(V),f(H)),Fe(p,h),Fe(g,h)}}}function el(a){let l,e,s,o,i=a[21].name+"",t,c,I=a[21].challengeType+"",O,N,V,H='<span class="icon"><i class="fas fa-dumbbell" aria-hidden="true"></i></span>',P,b,p,w=a[21].description+"",g,h,v,n,E,T=a[21].wager+"",W,z,ue,L,Z,de,$=a[21].startDate+"",se,_e,x=a[21].endDate+"",ie,ve,R,re,te,q,oe,ce,ee;function me(U,M){if(U[21].challengeState==="OPEN")return El;if(U[21].challengeState==="WAITING")return gl;if(U[21].challengeState==="RUNNING")return ml}let j=me(a),F=j&&j(a);return{c(){l=d("div"),e=d("div"),s=d("header"),o=d("p"),t=k(i),c=d("span"),O=k(I),N=S(),V=d("button"),V.innerHTML=H,P=S(),b=d("div"),p=d("div"),g=k(w),h=S(),v=d("div"),n=d("i"),E=S(),W=k(T),z=k(" CHF"),ue=S(),L=d("div"),Z=d("i"),de=S(),se=k($),_e=k(" - "),ie=k(x),ve=S(),R=d("div"),F&&F.c(),re=S(),te=d("footer"),q=d("a"),oe=k("Detail"),ee=S(),this.h()},l(U){l=_(U,"DIV",{class:!0});var M=m(l);e=_(M,"DIV",{class:!0});var le=m(e);s=_(le,"HEADER",{class:!0});var fe=m(s);o=_(fe,"P",{class:!0});var J=m(o);t=D(J,i),c=_(J,"SPAN",{class:!0});var Ce=m(c);O=D(Ce,I),Ce.forEach(f),J.forEach(f),N=A(fe),V=_(fe,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),Ve(V)!=="svelte-klnzei"&&(V.innerHTML=H),fe.forEach(f),P=A(le),b=_(le,"DIV",{class:!0});var K=m(b);p=_(K,"DIV",{class:!0});var Q=m(p);g=D(Q,w),Q.forEach(f),h=A(K),v=_(K,"DIV",{class:!0});var ne=m(v);n=_(ne,"I",{class:!0}),m(n).forEach(f),E=A(ne),W=D(ne,T),z=D(ne," CHF"),ne.forEach(f),ue=A(K),L=_(K,"DIV",{class:!0});var X=m(L);Z=_(X,"I",{class:!0}),m(Z).forEach(f),de=A(X),se=D(X,$),_e=D(X," - "),ie=D(X,x),X.forEach(f),ve=A(K),R=_(K,"DIV",{class:!0});var pe=m(R);F&&F.l(pe),pe.forEach(f),K.forEach(f),re=A(le),te=_(le,"FOOTER",{class:!0});var ge=m(te);q=_(ge,"A",{href:!0,class:!0});var Ee=m(q);oe=D(Ee,"Detail"),Ee.forEach(f),ge.forEach(f),le.forEach(f),ee=A(M),M.forEach(f),this.h()},h(){u(c,"class","tag is-info is-light"),u(o,"class","card-header-title"),u(V,"class","card-header-icon"),u(V,"aria-label","more options"),u(s,"class","card-header"),u(p,"class","content"),u(n,"class","fa-solid fa-sack-dollar"),u(v,"class","content"),u(Z,"class","fas fa-calendar-alt"),u(L,"class","content"),u(R,"class","content"),u(b,"class","card-content svelte-b9zz6y"),u(q,"href",ce="/challenge?id="+a[21].id),u(q,"class","card-footer-item"),u(te,"class","card-footer"),u(e,"class","card full-height-card svelte-b9zz6y"),u(l,"class","column is-one-third")},m(U,M){C(U,l,M),r(l,e),r(e,s),r(s,o),r(o,t),r(o,c),r(c,O),r(s,N),r(s,V),r(e,P),r(e,b),r(b,p),r(p,g),r(b,h),r(b,v),r(v,n),r(v,E),r(v,W),r(v,z),r(b,ue),r(b,L),r(L,Z),r(L,de),r(L,se),r(L,_e),r(L,ie),r(b,ve),r(b,R),F&&F.m(R,null),r(e,re),r(e,te),r(te,q),r(q,oe),r(l,ee)},p(U,M){M&4&&i!==(i=U[21].name+"")&&y(t,i),M&4&&I!==(I=U[21].challengeType+"")&&y(O,I),M&4&&w!==(w=U[21].description+"")&&y(g,w),M&4&&T!==(T=U[21].wager+"")&&y(W,T),M&4&&$!==($=U[21].startDate+"")&&y(se,$),M&4&&x!==(x=U[21].endDate+"")&&y(ie,x),j===(j=me(U))&&F?F.p(U,M):(F&&F.d(1),F=j&&j(U),F&&(F.c(),F.m(R,null))),M&4&&ce!==(ce="/challenge?id="+U[21].id)&&u(q,"href",ce)},d(U){U&&f(l),F&&F.d()}}}function ml(a){let l,e,s=a[21].challengeState+"",o;return{c(){l=d("i"),e=k("is "),o=k(s),this.h()},l(i){l=_(i,"I",{class:!0});var t=m(l);e=D(t,"is "),o=D(t,s),t.forEach(f),this.h()},h(){u(l,"class","fa-solid fa-hourglass-start")},m(i,t){C(i,l,t),r(l,e),r(l,o)},p(i,t){t&4&&s!==(s=i[21].challengeState+"")&&y(o,s)},d(i){i&&f(l)}}}function gl(a){let l,e,s=a[21].challengeState+"",o,i;return{c(){l=d("i"),e=S(),o=k(s),i=k(" for a competitor"),this.h()},l(t){l=_(t,"I",{class:!0}),m(l).forEach(f),e=A(t),o=D(t,s),i=D(t," for a competitor"),this.h()},h(){u(l,"class","fas fa-clock")},m(t,c){C(t,l,c),C(t,e,c),C(t,o,c),C(t,i,c)},p(t,c){c&4&&s!==(s=t[21].challengeState+"")&&y(o,s)},d(t){t&&(f(l),f(e),f(o),f(i))}}}function El(a){let l,e,s=a[21].challengeState+"",o,i;return{c(){l=d("i"),e=S(),o=k(s),i=k(" to compete"),this.h()},l(t){l=_(t,"I",{class:!0}),m(l).forEach(f),e=A(t),o=D(t,s),i=D(t," to compete"),this.h()},h(){u(l,"class","fas fa-check")},m(t,c){C(t,l,c),C(t,e,c),C(t,o,c),C(t,i,c)},p(t,c){c&4&&s!==(s=t[21].challengeState+"")&&y(o,s)},d(t){t&&(f(l),f(e),f(o),f(i))}}}function ll(a){let l,e=(a[21].fitnessuserId1===a[0]||a[21].fitnessuserId2===a[0])&&el(a);return{c(){e&&e.c(),l=ze()},l(s){e&&e.l(s),l=ze()},m(s,o){e&&e.m(s,o),C(s,l,o)},p(s,o){s[21].fitnessuserId1===s[0]||s[21].fitnessuserId2===s[0]?e?e.p(s,o):(e=el(s),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(s){s&&f(l),e&&e.d(s)}}}function tl(a){let l,e,s=a[20]+1+"",o,i;return{c(){l=d("li"),e=d("a"),o=k(s),i=S(),this.h()},l(t){l=_(t,"LI",{});var c=m(l);e=_(c,"A",{class:!0,"aria-label":!0,href:!0});var I=m(e);o=D(I,s),I.forEach(f),i=A(c),c.forEach(f),this.h()},h(){u(e,"class","pagination-link is-current"),u(e,"aria-label","Page 1"),u(e,"href","/challenges?page="+(a[20]+1)),al(e,"active",a[5]==a[20]+1)},m(t,c){C(t,l,c),r(l,e),r(e,o),r(l,i)},p:Pe,d(t){t&&f(l)}}}function bl(a){let l=a[3]&&a[4].user_roles&&a[4].user_roles.includes("fitnesscoach"),e,s=a[3]&&a[4].user_roles&&a[4].user_roles.includes("fitnessuser"),o,i=l&&Ye(a),t=s&&xe(a);return{c(){i&&i.c(),e=S(),t&&t.c(),o=ze()},l(c){i&&i.l(c),e=A(c),t&&t.l(c),o=ze()},m(c,I){i&&i.m(c,I),C(c,e,I),t&&t.m(c,I),C(c,o,I)},p(c,[I]){I&24&&(l=c[3]&&c[4].user_roles&&c[4].user_roles.includes("fitnesscoach")),l?i?i.p(c,I):(i=Ye(c),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),I&24&&(s=c[3]&&c[4].user_roles&&c[4].user_roles.includes("fitnessuser")),s?t?t.p(c,I):(t=xe(c),t.c(),t.m(o.parentNode,o)):t&&(t.d(1),t=null)},i:Pe,o:Pe,d(c){c&&(f(e),f(o)),i&&i.d(c),t&&t.d(c)}}}let He=0;function Il(a,l,e){let s,o,i,t,c;Ae(a,qe,E=>e(0,s=E)),Ae(a,fl,E=>e(9,o=E)),Ae(a,cl,E=>e(10,i=E)),Ae(a,hl,E=>e(3,t=E)),Ae(a,ul,E=>e(4,c=E));const I=i.url.origin;let O,N="",V=null,H,P=[],b=[];function p(){var E={method:"get",url:I+"/api/challenge/fitness/"+O,headers:{Authorization:"Bearer "+o}};we(E).then(function(T){e(2,b=T.data)}).catch(function(T){alert("Could not get challenges"),console.log(T)})}function w(E,T){var W={method:"put",url:I+"/api/service/finishchallenge?challengeId="+E+"&winnerEmail="+T,headers:{Authorization:"Bearer "+o}};we(W).then(function(z){p()}).catch(function(z){alert("Could not finish challenge"),console.log(z)})}function g(E){var T={method:"get",url:I+"/api/fitnessuser/"+E,headers:{Authorization:"Bearer "+o}};we(T).then(function(W){P=W.data,e(1,N=W.data.email),console.log(P),console.log(N)}).catch(function(W){alert("Could not get fitnessuser id"),console.log(W)})}function h(){var E={method:"get",url:I+"/api/service/me/myinfo",headers:{Authorization:"Bearer "+o}};we(E).then(function(T){rl(qe,s=T.data.id,s)}).catch(function(T){alert("Could not get fitnessuser id"),console.log(T)})}function v(E){V=E,console.log(V),g(V)}function n(E){V=E,console.log(V),g(V)}return a.$$.update=()=>{a.$$.dirty&1537&&(O=i.url.searchParams.get("id"),o!==""&&(h(),console.log(s)),p())},[s,N,b,t,c,H,w,v,n,o,i]}class Vl extends nl{constructor(l){super(),ol(this,l,Il,bl,sl,{})}}export{Vl as component};