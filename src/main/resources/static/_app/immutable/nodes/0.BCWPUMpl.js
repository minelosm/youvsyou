import{s as Y,f as $,u as w,g as z,h as P,c as S}from"../chunks/scheduler.Cu15T-2q.js";import{S as F,i as G,e as b,s as k,c as m,a as T,l as M,f as N,d,m as n,g as x,h as g,w as J,x as K,t as Q,b as R,o as W,j as X}from"../chunks/index.DU86TLFa.js";import{i as Z,u as tt}from"../chunks/store.DXD_zU6v.js";import{a as et}from"../chunks/auth.service.B14yvx5F.js";const at=!1,st=!0,ct=Object.freeze(Object.defineProperty({__proto__:null,prerender:st,ssr:at},Symbol.toStringTag,{value:"Module"}));function q(f){let t,e='<a class="nav-link" href="/challenges">Challenges</a>';return{c(){t=b("li"),t.innerHTML=e,this.h()},l(s){t=m(s,"LI",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-1hx6vn"&&(t.innerHTML=e),this.h()},h(){n(t,"class","nav-item")},m(s,h){x(s,t,h)},d(s){s&&d(t)}}}function B(f){let t,e=f[1].name+"",s,h,i,r="Log Out",v,L;return{c(){t=b("a"),s=Q(e),h=k(),i=b("button"),i.textContent=r,this.h()},l(l){t=m(l,"A",{class:!0,href:!0});var o=T(t);s=R(o,e),o.forEach(d),h=N(l),i=m(l,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),M(i)!=="svelte-13o4gc3"&&(i.textContent=r),this.h()},h(){n(t,"class","navbar-text me-2"),n(t,"href","/account"),n(i,"type","button"),n(i,"class","btn btn-primary")},m(l,o){x(l,t,o),g(t,s),x(l,h,o),x(l,i,o),v||(L=W(i,"click",et.logout),v=!0)},p(l,o){o&2&&e!==(e=l[1].name+"")&&X(s,e)},d(l){l&&(d(t),d(h),d(i)),v=!1,L()}}}function lt(f){let t,e,s,h="YOUvsYOU",i,r,v='<span class="navbar-toggler-icon"></span>',L,l,o,U,y,A,C,E,c=f[0]&&q(),u=f[0]&&B(f);const V=f[3].default,_=$(V,f,f[2],null);return{c(){t=b("nav"),e=b("div"),s=b("a"),s.textContent=h,i=k(),r=b("button"),r.innerHTML=v,L=k(),l=b("div"),o=b("ul"),c&&c.c(),U=k(),y=b("div"),u&&u.c(),A=k(),C=b("div"),_&&_.c(),this.h()},l(a){t=m(a,"NAV",{class:!0});var p=T(t);e=m(p,"DIV",{class:!0});var O=T(e);s=m(O,"A",{class:!0,href:!0,"data-svelte-h":!0}),M(s)!=="svelte-12e5rjh"&&(s.textContent=h),i=N(O),r=m(O,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0,"data-svelte-h":!0}),M(r)!=="svelte-1nsq9qc"&&(r.innerHTML=v),L=N(O),l=m(O,"DIV",{class:!0,id:!0});var I=T(l);o=m(I,"UL",{class:!0});var j=T(o);c&&c.l(j),j.forEach(d),U=N(I),y=m(I,"DIV",{class:!0});var D=T(y);u&&u.l(D),D.forEach(d),I.forEach(d),O.forEach(d),p.forEach(d),A=N(a),C=m(a,"DIV",{class:!0});var H=T(C);_&&_.l(H),H.forEach(d),this.h()},h(){n(s,"class","navbar-brand"),n(s,"href","/"),n(r,"class","navbar-toggler"),n(r,"type","button"),n(r,"data-bs-toggle","collapse"),n(r,"data-bs-target","#navbarNav"),n(r,"aria-controls","navbarNav"),n(r,"aria-expanded","false"),n(r,"aria-label","Toggle navigation"),n(o,"class","navbar-nav me-auto mb-2 mb-lg-0"),n(y,"class","d-flex"),n(l,"class","collapse navbar-collapse"),n(l,"id","navbarNav"),n(e,"class","container-fluid"),n(t,"class","navbar navbar-expand-lg bg-light"),n(C,"class","container mt-3")},m(a,p){x(a,t,p),g(t,e),g(e,s),g(e,i),g(e,r),g(e,L),g(e,l),g(l,o),c&&c.m(o,null),g(l,U),g(l,y),u&&u.m(y,null),x(a,A,p),x(a,C,p),_&&_.m(C,null),E=!0},p(a,[p]){a[0]?c||(c=q(),c.c(),c.m(o,null)):c&&(c.d(1),c=null),a[0]?u?u.p(a,p):(u=B(a),u.c(),u.m(y,null)):u&&(u.d(1),u=null),_&&_.p&&(!E||p&4)&&w(_,V,a,a[2],E?P(V,a[2],p,null):z(a[2]),null)},i(a){E||(J(_,a),E=!0)},o(a){K(_,a),E=!1},d(a){a&&(d(t),d(A),d(C)),c&&c.d(),u&&u.d(),_&&_.d(a)}}}function nt(f,t,e){let s,h;S(f,Z,v=>e(0,s=v)),S(f,tt,v=>e(1,h=v));let{$$slots:i={},$$scope:r}=t;return f.$$set=v=>{"$$scope"in v&&e(2,r=v.$$scope)},[s,h,r,i]}class ft extends F{constructor(t){super(),G(this,t,nt,lt,Y,{})}}export{ft as component,ct as universal};
