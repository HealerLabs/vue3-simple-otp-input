import{s as o,$ as p,a0 as i,a1 as u,a2 as c,a3 as l,a4 as d,a5 as f,a6 as m,a7 as h,a8 as A,a9 as g,d as P,u as v,j as y,y as C,aa as w,ab as _,ac as b,ad as E}from"./chunks/framework.71faaeaf.js";import{t as R}from"./chunks/theme.8e76802a.js";function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=r(R),D=P({name:"VitePressApp",setup(){const{site:e}=v();return y(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),w(),_(),b(),s.setup&&s.setup(),()=>E(s.Layout)}});async function j(){const e=S(),a=O();a.provide(i,e);const t=u(e.route);return a.provide(c,t),a.component("Content",l),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:f}),{app:a,router:e,data:t}}function O(){return m(D)}function S(){let e=o,a;return h(t=>{let n=A(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),g(()=>import(n),[])):null},s.NotFound)}o&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{j as createApp};
