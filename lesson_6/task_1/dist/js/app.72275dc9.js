(function(){"use strict";var e={8200:function(e,n,r){var t=r(9242),o=r(3396);const u={class:"container"};function i(e,n,r,t,i,l){const a=(0,o.up)("one-task-input-age");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(a,{title:"User Age",modelValue:i.ageValue,"onUpdate:modelValue":n[0]||(n[0]=e=>i.ageValue=e),modelModifiers:{check:!0,setColor:!0}},null,8,["modelValue"])])}var l=r(7139);const a={class:"container"},c={key:0};function s(e,n,r,u,i,s){return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("label",null,[(0,o.Uk)((0,l.zw)(r.title)+" ",1),(0,o.wy)((0,o._)("input",{class:(0,l.C_)({"error-age":e.checkAge,[e.currentColor]:s.currentValue&&s.currentValue<150}),type:"number","onUpdate:modelValue":n[0]||(n[0]=e=>s.currentValue=e)},null,2),[[t.nr,s.currentValue]])]),e.checkAge?((0,o.wg)(),(0,o.iD)("div",c,"Введений вік некоректний (> 150)")):(0,o.kq)("",!0)])}var f={name:"OneTaskInput",props:{title:{type:String,default:""},modelValue:{type:Number},modelModifiers:{default:()=>({})},data(){return{checkAge:null,currentColor:!1}}},computed:{currentValue:{get(){return this.modelValue},set(e){this.modelModifiers.check&&e&&(this.checkAge=e>150),this.modelModifiers.setColor&&e&&(this.currentColor=this.isCurrentClass(e)),this.$emit("update:modelValue",e)}}},methods:{isCurrentClass(e){return e<10?"green":e<21?"yellow":e<150&&"orange"}}},d=r(89);const p=(0,d.Z)(f,[["render",s],["__scopeId","data-v-5379b280"]]);var h=p,v={name:"App",components:{OneTaskInputAge:h},data(){return{ageValue:null}}};const g=(0,d.Z)(v,[["render",i]]);var m=g;(0,t.ri)(m).mount("#app")}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var u=n[t]={exports:{}};return e[t].call(u.exports,u,u.exports,r),u.exports}r.m=e,function(){var e=[];r.O=function(n,t,o,u){if(!t){var i=1/0;for(s=0;s<e.length;s++){t=e[s][0],o=e[s][1],u=e[s][2];for(var l=!0,a=0;a<t.length;a++)(!1&u||i>=u)&&Object.keys(r.O).every((function(e){return r.O[e](t[a])}))?t.splice(a--,1):(l=!1,u<i&&(i=u));if(l){e.splice(s--,1);var c=o();void 0!==c&&(n=c)}}return n}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[t,o,u]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,u,i=t[0],l=t[1],a=t[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(a)var s=a(r)}for(n&&n(t);c<i.length;c++)u=i[c],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(s)},t=self["webpackChunklesson_6"]=self["webpackChunklesson_6"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(8200)}));t=r.O(t)})();
//# sourceMappingURL=app.72275dc9.js.map