(function(e,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(e=typeof globalThis!="undefined"?globalThis:e||self,n(e["my-lib"]={},e.Vue))})(this,function(e,n){"use strict";const o=n.defineComponent({name:"MyComponent",props:{},setup(){return()=>n.h("div",{},"hello world from MyComponent in my-lib")}}),t=i=>{i.component(o.name,o)};o.install=t,e.MyComponent=o,e.default=o,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"});
