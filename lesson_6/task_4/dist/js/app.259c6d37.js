(function(){"use strict";var e={7558:function(e,n,t){var r=t(9242),a=t(3396);const u={class:"container"};function o(e,n,t,r,o,i){const s=(0,a.up)("fourth-task-name-age-user-input");return(0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(s,{age:o.user.age,"onUpdate:age":n[0]||(n[0]=e=>o.user.age=e),ageModifiers:{checkAge:!0},name:o.user.name,"onUpdate:name":n[1]||(n[1]=e=>o.user.name=e),nameModifiers:{empty:!0}},null,8,["age","name"])])}var i=t(7139);const s={class:"container"};function c(e,n,t,u,o,c){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("label",null,[(0,a.Uk)(" User name "),(0,a.wy)((0,a._)("input",{ref:"emptyName",class:(0,i.C_)({empty:o.validateName&&!c.userName}),type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>c.userName=e)},null,2),[[r.nr,c.userName]])]),(0,a._)("label",null,[(0,a.Uk)(" User age "),(0,a.wy)((0,a._)("input",{class:(0,i.C_)({[o.validateAge]:c.userAge}),type:"number","onUpdate:modelValue":n[1]||(n[1]=e=>c.userAge=e)},null,2),[[r.nr,c.userAge]])])])}var l={name:"FourthTaskNameAgeUserInput",props:{name:{type:String},nameModifiers:{default:()=>({})},age:{type:Number},ageModifiers:{default:()=>({})}},data(){return{validateName:!1,validateAge:""}},computed:{userName:{get(){return this.name},set(e){this.nameModifiers.empty&&e&&(this.validateName=!0,this.$refs.emptyName.focus()),this.$emit("update:name",e)}},userAge:{get(){return this.age},set(e){this.ageModifiers.checkAge&&e&&(this.validateAge=e<18?"mirror-user":"correct-age"),this.$emit("update:age",e)}}}},f=t(89);const m=(0,f.Z)(l,[["render",c],["__scopeId","data-v-715731b8"]]);var p=m,d={name:"App",components:{FourthTaskNameAgeUserInput:p},data(){return{user:{name:null,age:null}}}};const g=(0,f.Z)(d,[["render",o]]);var v=g;(0,r.ri)(v).mount("#app")}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var u=n[r]={exports:{}};return e[r].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,r,a,u){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],u=e[l][2];for(var i=!0,s=0;s<r.length;s++)(!1&u||o>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(i=!1,u<o&&(o=u));if(i){e.splice(l--,1);var c=a();void 0!==c&&(n=c)}}return n}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[r,a,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var a,u,o=r[0],i=r[1],s=r[2],c=0;if(o.some((function(n){return 0!==e[n]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(s)var l=s(t)}for(n&&n(r);c<o.length;c++)u=o[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(l)},r=self["webpackChunklesson_6"]=self["webpackChunklesson_6"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7558)}));r=t.O(r)})();
//# sourceMappingURL=app.259c6d37.js.map